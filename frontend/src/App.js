import {
	CustomProvider,
	FlexboxGrid,
	Container,
	Button,
	Toggle,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "rsuite/styles/index.less";
import { Sidebar } from "./Sidebar";
import { Statistics } from "./Statistics";
import { Routes, Route, Link } from "react-router-dom";
import { Container as GridContainer, Row, Col } from "react-bootstrap";
import { Graph } from "./Graph";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { useEffect, useCallback, useState } from "react";

function App() {
	const onContentRefChange = useCallback((ref) => {
		setContentRef(ref);
	}, []);
	const onSidebarRefChange = useCallback((ref) => {
		setSidebarRef(ref);
	}, []);
	const [contentRef, setContentRef] = useState(null);
	const [sidebarRef, setSidebarRef] = useState(null);
	const [sidebarExpanded, setSidebarExpanded] = useState(true);
	const [activeKey, setActiveKey] = useState("Trang chủ");

	useEffect(() => {
		if (contentRef && sidebarRef) {
			sidebarRef.style.height = `${contentRef.clientHeight}px`;
			sidebarRef.style.minHeight = `calc(100vh - 90px)`;
		}
	}, [contentRef, sidebarRef, sidebarExpanded]);

	useEffect(() => {}, []);
	return (
		<div>
			<CustomProvider theme="light">
				<Header />
				<FlexboxGrid style={{ "padding-top": "5px" }}>
					<FlexboxGrid.Item colspan={sidebarExpanded ? 4 : 1}>
						<Toggle
							size={sidebarExpanded ? "lg" : "md"}
							onChange={setSidebarExpanded}
							checked={sidebarExpanded}
							checkedChildren="Thu gọn"
							unCheckedChildren="Mở rộng"
						/>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item colspan={sidebarExpanded ? 20 : 23}>
						<GridContainer style={{"margin-left": "0px", "margin-right": "0px"}}>
								<Button style={{minWidth: "150px"}}>{activeKey}</Button>
						</GridContainer>
					</FlexboxGrid.Item>
				</FlexboxGrid>
				<FlexboxGrid ref={onContentRefChange} style={{"padding-top": "5px"}}>
					<FlexboxGrid.Item
						ref={onSidebarRefChange}
						colspan={sidebarExpanded ? 4 : 1}
					>
						<Container
							className="sidebar-page"
							style={{ display: "flex", height: "100%" }}
						>
							<Sidebar
								expanded={sidebarExpanded}
								setExpanded={setSidebarExpanded}
								style={{ display: "flex" }}
								activeKey={activeKey}
								setActiveKey={setActiveKey}
							/>
						</Container>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item colspan={sidebarExpanded ? 20 : 23}>
						<Routes>
							<Route path="/" element={<Statistics />} />
							<Route path="/statistics" element={<Statistics />} />
							<Route path="/graph" element={<Graph />} />
						</Routes>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</CustomProvider>
		</div>
	);
}

export default App;
