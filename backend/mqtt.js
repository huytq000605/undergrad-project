import mqtt from 'mqtt';
import { knex } from './index.js';
// mqtt://test.mosquitto.org
// mqtt://34.101.145.91:1883
export const mqttClient = mqtt.connect('mqtt://test.mosquitto.org', {
	clientId: 'mba1',
	clean: true,
	reconnectPeriod: 3000,
});
export const receiveTopic = "MBA1";
export const sendTopic = "datn-hust/web";

mqttClient.on('connect', () => {
	console.log("Connecting to broker")
	mqttClient.subscribe(receiveTopic, (err) => {
		if(err) {
			throw Error("Cannot subscribe the topic " + receiveTopic)
		} else {
			console.log("Subscribed to topic " + receiveTopic)
		}
	});
	mqttClient.subscribe(sendTopic, (err) => {
		if(err) {
			throw Error("Cannot subscribe the topic " + sendTopic)
		} else {
			console.log("Subscribed to topic " + sendTopic)
		}
	})
	//mqttClient.publish(receiveTopic, "300005");
})

mqttClient.on('message', async (topic, message) => {
	console.log("Receiving messages from topic " + topic + ": " + message);
	message = message.toString()
	// Todo: Handle logic here
	// "10-5-7_1-3-5_0-0-0_0-0-0_0-0-0_0-0-0_37.7-40.5"
	if (topic === receiveTopic) {
		const time = new Date();
		let phaA = {
			created_at: time,
			updated_at: time,
		}, phaB = {
			created_at: time,
			updated_at: time,
		}, phaC = {
			created_at: time,
			updated_at: time,
		},
		env = {
			created_at: time,
			updated_at: time,
		};
		// save data
		try {
			const receivedData = message.split('_');
			{
				const dongDienData = receivedData[1].split('-');
				phaA.dong_dien = Number(dongDienData[0]);
				phaB.dong_dien = Number(dongDienData[1]);
				phaC.dong_dien = Number(dongDienData[2]);
			}
			{
				const dienApData = receivedData[0].split('-');
				phaA.dien_ap = Number(dienApData[0]);
				phaB.dien_ap = Number(dienApData[1]);
				phaC.dien_ap = Number(dienApData[2]);
			}
			{
				const congSuatDieuKhienData = receivedData[2].split('-');
				phaA.cong_suat_dieu_khien = Number(congSuatDieuKhienData[0]);
				phaB.cong_suat_dieu_khien = Number(congSuatDieuKhienData[1]);
				phaC.cong_suat_dieu_khien = Number(congSuatDieuKhienData[2]);
			}
			{
				const cosPhiData = receivedData[3].split('-');
				phaA.cos_phi = Number(cosPhiData[0]);
				phaB.cos_phi = Number(cosPhiData[1]);
				phaC.cos_phi = Number(cosPhiData[2]);
			}
			{
				const congSuatHieuDungData = receivedData[4].split('-');
				phaA.cong_suat_hieu_dung = Number(congSuatHieuDungData[0]);
				phaB.cong_suat_hieu_dung = Number(congSuatHieuDungData[1]);
				phaC.cong_suat_hieu_dung = Number(congSuatHieuDungData[2]);
			}
			{
				const congSuatPhanKhangData = receivedData[5].split('-');
				phaA.cong_suat_phan_khang = Number(congSuatPhanKhangData[0]);
				phaB.cong_suat_phan_khang = Number(congSuatPhanKhangData[1]);
				phaC.cong_suat_phan_khang = Number(congSuatPhanKhangData[2]);
			}
			{
				const thongSoMoiTruongData = receivedData[6].split('-');
				env.nhiet_do = Number(thongSoMoiTruongData[0]);
				env.do_am = Number(thongSoMoiTruongData[1]);
			}
		}
		catch (err) {
			console.error("Messsage không hợp lệ!");
			return;
		}

		knex('chi_so_pha_a').insert({...phaA})
		.then(()=>{
			console.log("Inserted to chi_so_pha_a table: ", phaA);
		});

		knex('chi_so_pha_b').insert({...phaB})
		.then(()=>{
			console.log("Inserted to chi_so_pha_b table: ", phaB);
		});

		knex('chi_so_pha_c').insert({...phaC})
		.then(()=>{
			console.log("Inserted to chi_so_pha_c table: ", phaC);
		});

		knex('thong_so_moi_truong').insert({...env})
		.then(()=>{
			console.log("Inserted to thong_so_moi_truong table: ", env);
		});

		// detect power-off
		const powerOffCheckTimes = 2;
		const powerOffVolgate = 5;
		const powerOffCurrent = 0.5;
		checkingPowerOff(
			phaA.dong_dien,
			powerOffCurrent,
			phaA.dien_ap,
			powerOffVolgate,
			powerOffCheckTimes,
			'A',
			time
		);
		checkingPowerOff(
			phaB.dong_dien,
			powerOffCurrent,
			phaB.dien_ap,
			powerOffVolgate,
			powerOffCheckTimes,
			'B',
			time
		);
		checkingPowerOff(
			phaC.dong_dien,
			powerOffCurrent,
			phaC.dien_ap,
			powerOffVolgate,
			powerOffCheckTimes,
			'C',
			time
		);
	}
})

/**
 * Detect power off
 * @param {float} current
 * @param {float} powerOffCurrent
 * @param {float} voltage
 * @param {float} powerOffVolgate
 * @param {integer} powerOffCheckTimes
 * @param {string} pha
 * @param {Date} time
 * @returns {null}
 */
const checkingPowerOff = async(current, powerOffCurrent, voltage, powerOffVolgate, powerOffCheckTimes, pha, time) => {
	if (current <= powerOffCurrent && voltage <= powerOffVolgate) {
		const data = await knex('thong_so_mat_dien')
								.where({ pha })
								.havingNull('end')
        						.orderBy('id', 'desc')
        						.first();
		if (!data) {
			knex('thong_so_mat_dien')
				.insert({ 
					start: time, 
					year: time.getFullYear(), 
					month: time.getMonth() + 1, 
					date: time.getDate(),
					pha
				})
				.then(()=>{
					console.log(`Inserted to thong_so_mat_dien table pha : ${pha}`);
				});
		} else if (data) {
			knex('thong_so_mat_dien').update({ check_times: data.check_times + 1 })
				.where({id: data.id})
				.then(()=>{
					console.log("updated check_times to thong_so_mat_dien where id: ", data.id);
				});
		}
	} else {
		const data = await knex('thong_so_mat_dien')
								.where({ pha })
								.havingNull('end')
        						.orderBy('id', 'desc')
        						.first();
		if (data && data.check_times >= powerOffCheckTimes) {
			const minutes = Math.ceil((time.getTime() - data.start.getTime()) / 60000);
			knex('thong_so_mat_dien').update({ end: time, minutes })
				.where({id: data.id})
				.then(()=>{
					console.log("updated to thong_so_mat_dien where id: ", data.id);
				});
		} else if (data && data.check_times < powerOffCheckTimes) {
			knex('thong_so_mat_dien')
				.where('id', data.id)
				.del()
				.then(()=>{
					console.log("deleted in thong_so_mat_dien where id: ", data.id);
				});
		}
	}
} 

//export default mqttClient
