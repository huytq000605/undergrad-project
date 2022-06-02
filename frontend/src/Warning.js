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
							{["Điện áp pha A cao", "Điện áp pha B cao", "Điện áp pha C cao", "Quá dòng pha A", "Quá dòng pha B", "Quá dòng pha C", "Tần số thấp", "Độ ẩm cao", "Nhiệt độ cao", "Cos φ pha A thấp", "Cos φ pha B thấp", "Cos φ pha C thấp"].map((name) => {

								const randomValue = Math.random() > 0.5
								return (
									<Row style={{ marginBottom: "10px" }}>
										<Col sm={6}>{name}</Col>
										<Col>
											<Toggle
												style={{ marginLeft: "6px", marginRight: "5px" }}
												size="lg"
												checkedChildren=""
												unCheckedChildren=""
												checked={randomValue ? false : true}
											/>
										</Col>
										<Col>{randomValue ? "[KHÔNG]" : "[CÓ]"}</Col>
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
