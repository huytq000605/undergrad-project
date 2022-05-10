import logo from "./logoEn.png";
import { CustomProvider, FlexboxGrid, Container } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Sidebar } from "./Sidebar";
import { Statistics } from "./Statistics";
import { Routes, Route, Link } from "react-router-dom";
import { Graph } from "./Graph";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
			<div>
				<CustomProvider theme="light">
					<Container style={{ style: "5px", backgroundColor: "#f2f2f5" }}>
						<img
							src={logo}
							alt="HUST Logo"
							style={{ height: "auto", width: "477px", padding: "5px" }}
						/>
					</Container>
					<FlexboxGrid>
						<FlexboxGrid.Item
							colspan={4}
							// style={{ height: "calc(100vh - 90px)" }}
							style={{ height: "100vh" }}
						>
							<Container className="sidebar-page" style={{ height: "100vh" }}>
								<Sidebar />
							</Container>
						</FlexboxGrid.Item>
						<FlexboxGrid.Item colspan={20}>
							<Container>
								<Routes>
									<Route path="/" element={<Statistics />} />
									<Route path="/statistics" element={<Statistics />} />
									<Route path="/graph" element={<Graph />} />
								</Routes>
							</Container>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</CustomProvider>
			</div>
		);
}

export default App;
