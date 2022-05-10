import { Container } from "rsuite";
import { StatisticComponent } from "./StatisticComponent";

export const Statistics = ({name}) => {
	return (
		<Container>
			<div style={{ maxHeight: '100%', overflow: 'hidden' }}>
				<StatisticComponent name="A" />
				<StatisticComponent name="B" />
				{/* <StatisticComponent name="C" /> */}
			</div>
		</Container>
	);
};
