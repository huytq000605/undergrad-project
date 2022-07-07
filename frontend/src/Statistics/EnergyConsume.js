import { Container } from "rsuite";
import {
	Container as GridContainer,
	Card,
	Form,
	Row,
	Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { api } from "../shared/api"

export const EnergyConsume = () => {
	const [data, setData] = useState({})
	useEffect(() => {
		const getResponse = async () => {
			const res = await api("thong-so-tieu-thu-3-pha")
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
			<Card className="mx-1 mt-2">
				<Card.Header className="px-1 py-1" style={{ width: "100%", textTransform: "uppercase" }}>
					{`Các thông số tiêu thụ điện năng`}
				</Card.Header>
				<Card.Body className="px-2 py-2" style={{}}>
					<Form>
						<GridContainer fluid>
							<Row>
								<Col sm={12} md={6}>
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Điện năng tiêu thụ`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												value={data['dien_nang_tieu_thu'] || 0}
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kWh]
										</Form.Label>
									</Form.Group>
									{/* <Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất phản kháng`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												value={data['pha_a'] || 0}
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kVAR]
										</Form.Label>
									</Form.Group> */}
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất hiệu dụng tổng`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												value={data['cong_suat_hieu_dung_tong'] || 0}
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kW]
										</Form.Label>
									</Form.Group>
								</Col>
								<Col sm={12} md={6}>
								{/* <Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất biểu kiến`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												value={data['pha_a'] || 0}
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kVA]
										</Form.Label>
									</Form.Group> */}
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất biểu kiến tổng`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												value={data['cong_suat_bieu_kien_tong'] || 0}
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kVA]
										</Form.Label>
									</Form.Group>
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất phản kháng tổng`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												value={data['cong_suat_phan_khang_tong'] || 0}
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kVAR]
										</Form.Label>
									</Form.Group>
								</Col>
							</Row>
						</GridContainer>
					</Form>
				</Card.Body>
			</Card>
	);
};
