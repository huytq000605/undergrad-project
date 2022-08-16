import { Container } from "rsuite";
import { Container as GridContainer, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react"
import { api, convertToWarning } from "shared/api"
import { Toggle } from "rsuite";

export const Warning = () => {
	const [data, setData] = useState({});
	let mapData = new Array(21).fill(false);
	useEffect(() => {
		const getResponse = async () => {
			let res = await api("waring-threshold")
			const nguongcanhbao = await res.json();
			res = await api("thong-so-tieu-thu-3-pha")
			const thongsotieuthu = await res.json()
			res = await api("pha-a")
			const phaA = await res.json()
			res = await api("pha-b")
			const phaB = await res.json()
			res = await api("pha-c")
			const phaC = await res.json()
			res = await api("moi-truong")
			const thongsomoitruong = await res.json();
			mapData = convertToWarning({nguongcanhbao, phaA, phaB, phaC, thongsomoitruong, thongsotieuthu});
			setData(mapData);
		}
		getResponse()
		const interval = setInterval(() => {
			getResponse()
		}, 10000)

		console.log(data);
		return () => clearInterval(interval)
	}, [])

	return (
		<Container>
			<Form>
				<GridContainer fluid>
					<Row>
						<Col />
						<Col>
							{["Điện áp pha A cao", "Điện áp pha B cao", "Điện áp pha C cao", "Điện áp pha A thấp", "Điện áp pha B thấp", "Điện áp pha C thấp", "Quá dòng pha A", "Quá dòng pha B", "Quá dòng pha C", "Tần số thấp", "Tần số cao", "Độ ẩm cao", "Độ ẩm thấp", "Nhiệt độ cao", "Nhiệt độ thấp", "Cos φ pha A thấp", "Cos φ pha B thấp", "Cos φ pha C thấp", 'Mất điện pha A', 'Mất điện pha B', 'Mất điện pha C'].map((name, index, arr) => {
								return (
									<Row style={{ marginBottom: "10px" }}>
										<Col sm={6}>{name}</Col>
										<Col sm={3}>
											<Toggle
												style={{ marginLeft: "6px", marginRight: "6px" }}
												size="lg"
												checkedChildren=""
												unCheckedChildren=""
												checked={!data[index] ? false : true}
											/>
										</Col>
										<Col sm={3}>{!data[index]? "[KHÔNG]" : "[CÓ]"}</Col>
									</Row>
								);

							})}
						</Col>
						<Col />
					</Row>
				</GridContainer>
			</Form>
		</Container>
	);
};
