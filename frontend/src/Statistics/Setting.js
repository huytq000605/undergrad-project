import { Container } from "rsuite";
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
						<Col />
						<Col>
							{["Ngưỡng điện áp pha A cao", "Ngưỡng điện áp pha B cao", "Ngưỡng điện áp pha C cao", "Quá dòng pha A", "Quá dòng pha B", "Quá dòng pha C", "Tần số thấp", "Độ ẩm cao", "Nhiệt độ cao", "Cos φ pha A thấp", "Cos φ pha B thấp", "Cos φ pha C thấp"].map((name) => {

								return (
									<Row style={{ marginBottom: "10px" }}>
										<Col sm={6}>{name}</Col>
										<Col>
                                            <input></input>
                                        </Col>
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
