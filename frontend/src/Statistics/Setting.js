import { Container, Button } from "rsuite";
import { Container as GridContainer, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect, useRef } from "react"
import { api, postApi } from "shared/api"
import { Toggle } from "rsuite";

export const Setting = () => {
	const [data, setData] = useState({});
	const inputRef2 = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];
	useEffect(() => {
		const getResponse = async () => {
			const res = await api("waring-threshold")
			const json = await res.json();
			console.log(json);
			setData(json)
		}
		getResponse()
		const interval = setInterval(() => {
			getResponse()
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	async function handleClick() {
		const body = {
            dien_ap_pha_a_cao: inputRef2[0].current ? inputRef2[0].current.value : null,
            dien_ap_pha_b_cao: inputRef2[1].current ? inputRef2[1].current.value : null,
            dien_ap_pha_c_cao: inputRef2[2].current ? inputRef2[2].current.value : null,
            dien_ap_pha_a_thap: inputRef2[3].current ? inputRef2[3].current.value : null,
            dien_ap_pha_b_thap: inputRef2[4].current ? inputRef2[4].current.value : null,
            dien_ap_pha_c_thap: inputRef2[5].current ? inputRef2[5].current.value : null,
            qua_dong_pha_a: inputRef2[6].current ? inputRef2[6].current.value : null,
            qua_dong_pha_b: inputRef2[7].current ? inputRef2[7].current.value : null,
            qua_dong_pha_c: inputRef2[8].current ? inputRef2[8].current.value : null,
            tan_so_thap: inputRef2[9].current ? inputRef2[9].current.value : null,
            tan_so_cao: inputRef2[10].current ? inputRef2[10].current.value : null,
            do_am_cao: inputRef2[11].current ? inputRef2[11].current.value : null,
            do_am_thap: inputRef2[12].current ? inputRef2[12].current.value : null,
            nhiet_do_cao: inputRef2[13].current ? inputRef2[13].current.value : null,
            nhiet_do_thap: inputRef2[14].current ? inputRef2[14].current.value : null,
            cos_phi_pha_a_thap: inputRef2[15].current ? inputRef2[15].current.value : null,
            cos_phi_pha_b_thap: inputRef2[16].current ? inputRef2[16].current.value : null,
            cos_phi_pha_c_thap: inputRef2[17].current ? inputRef2[17].current.value : null
        }
		await postApi('settings/waring', body)
	}

	return (
		<Container>
			<Form>
				<GridContainer fluid>
					<Row>
						<Col>
							{[["Ngưỡng Điện áp pha A cao", "V", "dien_ap_pha_a_cao"], ["Ngưỡng Điện áp pha B cao", 'V', 'dien_ap_pha_b_cao'], ["Ngưỡng Điện áp pha C cao", 'V', 'dien_ap_pha_c_cao'], ["Ngưỡng Điện áp pha A thấp", 'V', 'dien_ap_pha_a_thap'], ["Ngưỡng Điện áp pha B thấp", 'V', 'dien_ap_pha_b_thap'], ["Ngưỡng Điện áp pha C thấp", 'V', 'dien_ap_pha_c_thap'], ["Ngưỡng Quá dòng pha A", 'A', 'qua_dong_pha_a'], ["Ngưỡng Quá dòng pha B", 'A', 'qua_dong_pha_b'], ["Ngưỡng Quá dòng pha C", 'A', 'qua_dong_pha_c']].map(([name, dvi, dataField], index) => {

								return (
									<Row style={{ marginBottom: "10px" }}>
										<Col sm={6}>{name}</Col>
										<Col>
											<div style={{ display: "flex" }}>
												<Form.Label column sm="3" className="text-start" style={{marginLeft:"5px"}}>
													{data[dataField]}
												</Form.Label>
												<input ref={inputRef2[index]}/>
												<Form.Label column sm="3" className="text-start" style={{marginLeft:"5px"}}>
													[{dvi}]
												</Form.Label>
											</div>
										</Col>

									</Row>
								);

							})}
						</Col>
						<Col>
							{[["Ngưỡng Tần số thấp", 'Hz', 'tan_so_thap'], ["Ngưỡng Tần số cao", 'Hz', 'tan_so_cao'], ["Ngưỡng Độ ẩm cao", '%', 'do_am_cao'], ["Ngưỡng Độ ẩm thấp", '%', 'do_am_thap'], ["Ngưỡng Nhiệt độ cao", '°C', 'nhiet_do_cao'], ["Ngưỡng Nhiệt độ thấp", '°C', 'nhiet_do_thap'], ["Ngưỡng Cos φ pha A thấp", '', 'cos_phi_pha_a_thap'], ["Ngưỡng Cos φ pha B thấp", '', 'cos_phi_pha_b_thap'], ["Ngưỡng Cos φ pha C thấp", '', 'cos_phi_pha_c_thap']].map(([name, dvi, dataField], index) => {

								return (
									<Row style={{ marginBottom: "10px" }}>
										<Col sm={6}>{name}</Col>
										<Col>
											<div style={{ display: "flex" }}>
												<Form.Label column sm="3" className="text-start" style={{marginLeft:"5px"}}>
													{data[dataField]}
												</Form.Label>
												<input ref={inputRef2[index + 9]}/>
												<Form.Label column sm="3" className="text-start" style={{marginLeft:"5px"}}>
													{dvi ? `[${dvi}]` : ''}
												</Form.Label>
											</div>
										</Col>

									</Row>
								);

							})}
						</Col>
						<Row>
							<Button onClick={handleClick} style={{ width: "150px", margin: "auto", height: "80px", backgroundColor: "cyan", marginTop: "20px", fontSize: "30px" }}>SEND</Button>
						</Row>

					</Row>
				</GridContainer>
			</Form>
		</Container>
	);
};
