import mqtt from 'mqtt'
import { knex } from './index.js'
export const mqttClient = mqtt.connect('mqtt://test.mosquitto.org')
export const receiveTopic = "datn-hust/device";
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
	console.log("Receiving messages from topic " + topic + message);
	message = message.toString()
	// Todo: Handle logic here
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
		}
		// save data
		const receivedData = message.split('_');
		{
			const dongDienData = receivedData[0].split('-');
			phaA.dong_dien = Number(dongDienData[0]);
			phaB.dong_dien = Number(dongDienData[1]);
			phaC.dong_dien = Number(dongDienData[2]);
		}
		{
			const dienApData = receivedData[1].split('-');
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

		// detect power-off
		if ((phaA.dong_dien <= 0.5 && phaA.dien_ap <= 5) ||
			(phaB.dong_dien <= 0.5 && phaB.dien_ap <= 5) ||
			(phaC.dong_dien <= 0.5 && phaC.dien_ap <= 5)) {
				const data = await knex('thong_so_mat_dien')
								.havingNull('end')
        						.orderBy('id', 'desc')
        						.first();
				if (!data) {
					knex('thong_so_mat_dien').insert({start: time})
					.then(()=>{
						console.log("Inserted to thong_so_mat_dien table: ", phaC);
					});
				}
			} else {
				const data = await knex('thong_so_mat_dien')
								.havingNull('end')
        						.orderBy('id', 'desc')
        						.first();
				if (data) {
					knex('thong_so_mat_dien').update({end: time})
					.where({id: data.id})
					.then(()=>{
						console.log("updated to thong_so_mat_dien where id: ", data.id);
					});
				}
			}
	}
})

//export default mqttClient
