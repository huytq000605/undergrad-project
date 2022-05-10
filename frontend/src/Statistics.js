import { Container } from "rsuite";
import { Container as GridContainer, Row, Col } from "react-bootstrap";
import { StatisticComponent } from "./StatisticComponent";

export const Statistics = () => {
	const names = ["A", "B", "C", "Other", "Other"];

	return (
		<Container>
			<div style={{ maxHeight: "100%", overflow: "hidden" }}>
				<GridContainer fluid>
					<Row>
						{names.map((name, index) => (
							<Col key={index} xs={12} md={name !== "Other" ? 12 : 6}>
								<StatisticComponent name={name} />
							</Col>
						))}
					</Row>
				</GridContainer>
			</div>
		</Container>
	);
};
