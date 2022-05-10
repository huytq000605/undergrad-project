import { Container } from "rsuite";
import { StatisticComponent } from "./StatisticComponent";

export const Statistics = ({name}) => {
	return (
		<Container>
			<StatisticComponent name="A" />
			<StatisticComponent name="B" />
			<StatisticComponent name="C" />
			
		</Container>
	);
};
