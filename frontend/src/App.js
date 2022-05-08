import logo from "./logoEn.png";
import { CustomProvider, FlexboxGrid, Container } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { Routes, Route, Link } from "react-router-dom";

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
							style={{ height: "calc(100vh - 90px)" }}
						>
							<Container className="sidebar-page" style={{ height: "100%" }}>
								<Sidebar />
							</Container>
						</FlexboxGrid.Item>
						<FlexboxGrid.Item colspan={20}>
							<Container>
								<Routes>
									<Route path="/" element={<MainContent />} />
									<Route path="/home" element={() => {
										return (
											<h1>Hello</h1>
										)
									}} />
									<Route path="/statistics" element={<MainContent />} />
								</Routes>
							</Container>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</CustomProvider>
			</div>
		);
}

export default App;
