import { CustomProvider, FlexboxGrid, Container } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import 'rsuite/styles/index.less';
import { Sidebar } from "./Sidebar";
import { Statistics } from "./Statistics";
import { Routes, Route, Link } from "react-router-dom";
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
				<FlexboxGrid ref={onContentRefChange}>
					<FlexboxGrid.Item
						ref={onSidebarRefChange}
						colspan={sidebarExpanded ? 4 : 1}
					>
						<Container
							className="sidebar-page"
							style={{ display: "flex", height: "100%" }}
						>
							<Sidebar expanded={sidebarExpanded} setExpanded={setSidebarExpanded} style={{ display: "flex" }} />
						</Container>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item colspan={sidebarExpanded ? 20 : 23}>
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
