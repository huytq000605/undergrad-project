const host = "http://localhost:4000"

export const api = (endpoint, method = "GET") => {
	return fetch(`${host}/${endpoint}`)
}

export const postApi = async (endpoint, body) => {
	return await fetch(`${host}/${endpoint}`, {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	  });
}

export const convertToWarning = (data) => {
	console.log(data);
	const mapData = new Array(21).fill(false);
	mapData[0] = data.nguongcanhbao.dien_ap_pha_a_cao < data.phaA.dien_ap ? true : false;
	mapData[1] = data.nguongcanhbao.dien_ap_pha_b_cao < data.phaB.dien_ap ? true : false;
	mapData[2] = data.nguongcanhbao.dien_ap_pha_c_cao < data.phaC.dien_ap ? true : false;
	mapData[3] = data.nguongcanhbao.dien_ap_pha_a_thap > data.phaA.dien_ap ? true : false;
	mapData[4] = data.nguongcanhbao.dien_ap_pha_b_thap > data.phaB.dien_ap ? true : false;
	mapData[5] = data.nguongcanhbao.dien_ap_pha_c_thap > data.phaC.dien_ap ? true : false;
	mapData[6] = data.nguongcanhbao.qua_dong_pha_a < data.phaA.dong_dien ? true : false;
	mapData[7] = data.nguongcanhbao.qua_dong_pha_b < data.phaB.dong_dien ? true : false;
	mapData[8] = data.nguongcanhbao.qua_dong_pha_c < data.phaC.dong_dien ? true : false;
	mapData[9] = data.nguongcanhbao.tan_so_thap > 50 ? true : false;
	mapData[10] = data.nguongcanhbao.tan_so_cao < 50 ? true : false;
	mapData[11] = data.nguongcanhbao.do_am_cao < data.thongsomoitruong.do_am ? true : false;
	mapData[12] = data.nguongcanhbao.do_am_thap > data.thongsomoitruong.do_am ? true : false;
	mapData[13] = data.nguongcanhbao.nhiet_do_cao < data.thongsomoitruong.nhiet_do ? true : false;
	mapData[14] = data.nguongcanhbao.nhiet_do_thap > data.thongsomoitruong.nhiet_do ? true : false;
	mapData[15] = data.nguongcanhbao.cos_phi_pha_a_thap > data.phaA.cos_phi ? true : false;
	mapData[16] = data.nguongcanhbao.cos_phi_pha_b_thap > data.phaB.cos_phi ? true : false;
	mapData[17] = data.nguongcanhbao.cos_phi_pha_c_thap > data.phaC.cos_phi ? true : false;
	mapData[18] = (data.phaA.dien_ap < 5 && data.phaA.dong_dien < 0.5) ? true : false;
	mapData[19] = (data.phaB.dien_ap < 5 && data.phaB.dong_dien < 0.5) ? true : false;
	mapData[20] = (data.phaC.dien_ap < 5 && data.phaC.dong_dien < 0.5) ? true : false;
	return mapData;
}