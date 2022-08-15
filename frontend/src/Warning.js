import { Container } from "rsuite";
import { Container as GridContainer, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react"
import { api } from "shared/api"
import { Toggle } from "rsuite";

export const Warning = () => {
	const [data, setData] = useState({})
	useEffect(() => {
		const getResponse = async () => {
			const res = await api("warning")
			const json = await res.json()
			setData(json)
		}
		getResponse()
		const interval = setInterval(() => {
			getResponse()
		}, 5000)

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
								const mapData = new Array(arr.length).fill(false);
								mapData[1] = true;
								mapData[1] = true;
								mapData[1] = true;
								mapData[13] = true;
								mapData[5] = true;
								mapData[6] = true;
								console.log(mapData);
								return (
									<Row style={{ marginBottom: "10px" }}>
										<Col sm={6}>{name}</Col>
										<Col sm={3}>
											<Toggle
												style={{ marginLeft: "6px", marginRight: "6px" }}
												size="lg"
												checkedChildren=""
												unCheckedChildren=""
												checked={!mapData[index] ? false : true}
											/>
										</Col>
										<Col sm={3}>{!mapData[index]? "[KHÔNG]" : "[CÓ]"}</Col>
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
