import { Container, Button } from "rsuite";
import { Container as GridContainer, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react"
import { api } from "shared/api"
import { Toggle } from "rsuite";

export const Setting = () => {
	return (
		<Container>
			<Form>
				<GridContainer fluid>
					<Row>
						<Col>
							{[["Ngưỡng Điện áp pha A cao", "V"], ["Ngưỡng Điện áp pha B cao", 'V'], ["Ngưỡng Điện áp pha C cao", 'V'], ["Ngưỡng Điện áp pha A thấp", 'V'], ["Ngưỡng Điện áp pha B thấp", 'V'], ["Ngưỡng Điện áp pha C thấp", 'V'], ["Ngưỡng Quá dòng pha A", 'A'], ["Ngưỡng Quá dòng pha B", 'A'], ["Ngưỡng Quá dòng pha C", 'A']].map(([name, dvi]) => {

								return (
									<Row style={{ marginBottom: "10px" }}>
										<Col sm={6}>{name}</Col>
										<Col>
											<div style={{ display: "flex" }}>
												<input></input>

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
							{[["Ngưỡng Tần số thấp", 'Hz'], ["Ngưỡng Tần số cao", 'Hz'], ["Ngưỡng Độ ẩm cao", '%'], ["Ngưỡng Độ ẩm thấp", '%'], ["Ngưỡng Nhiệt độ cao", '°C'], ["Ngưỡng Nhiệt độ thấp", '°C'], ["Ngưỡng Cos φ pha A thấp"], ["Ngưỡng Cos φ pha B thấp"], ["Ngưỡng Cos φ pha C thấp"]].map(([name, dvi]) => {

								return (
									<Row style={{ marginBottom: "10px" }}>
										<Col sm={6}>{name}</Col>
										<Col>
											<div style={{ display: "flex" }}>
												<input></input>

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
							<Button style={{ width: "150px", margin: "auto", height: "80px", backgroundColor: "cyan", marginTop: "20px", fontSize: "30px" }}>SEND</Button>
						</Row>

					</Row>
				</GridContainer>
			</Form>
		</Container>
	);
};
