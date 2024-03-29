import logo from "./logoEn.png";
import { Container } from "rsuite";

const Header = () => {
	return (
		<Container
			style={{ style: "5px", backgroundColor: "#f2f2f5", height: "90px" }}
		>
			<img
				src={logo}
				alt="HUST Logo"
				style={{ height: "auto", width: "477px", padding: "5px" }}
			/>
		</Container>
	);
};

export default Header;
