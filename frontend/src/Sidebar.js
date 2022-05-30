import { Sidenav, Dropdown, Toggle } from "rsuite";
import Nav from "rsuite/Nav"
import GearIcon from "@rsuite/icons/Gear";
import DashboardIcon from "@rsuite/icons/Dashboard";
import SingleSourceIcon from "@rsuite/icons/SingleSource";
import OperatePeopleIcon from "@rsuite/icons/OperatePeople";
import MediaIcon from '@rsuite/icons/Media';
import PageIcon from "@rsuite/icons/Page";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react"

export const Sidebar = ({expanded, setExpanded, activeKey, setActiveKey}) => {
	const navigate = useNavigate();
	const handleLink = useCallback(
		(link, data) => {
			console.log(data);
			navigate(`/${link}`, { replace: true, state: data });
		},
		[navigate]
	);

	return (
		<div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
			<Sidenav
				defaultOpenKeys={["Nhà máy điện"]}
				expanded={expanded}
				activeKey="1"
				style={{
					display: "flex",
					flexDirection: "column",
					height: "100%",
				}}
				onSelect={setActiveKey}
			>
				<Sidenav.Body style={{ height: "100%" }}>
					<Nav style={{ height: "100%" }}>
						<Nav.Item
							eventKey="Trang chủ"
							icon={<PageIcon />}
							onClick={() => {
								handleLink("home");
							}}
						>
							Trang chủ
						</Nav.Item>
						<Nav.Menu
							title="Nhà máy điện"
							icon={<SingleSourceIcon />}
							onOpen={(event) => {
								setActiveKey("Nhà máy điện")
							}}
							open
						>
							{["Đống Đa", "Hai Bà Trưng", "Ba Đình", "Hoàn Kiếm"].map(
								(name, idx) => {
									return (
										<Nav.Menu
											eventKey={`Quận ${name}`}
											title={` Quận ${name}`}
											key={name}
											icon={<MediaIcon />}
										>
											<Nav.Item
												key={idx}
												icon={<OperatePeopleIcon />}
												onClick={(event) => {
													handleLink("statistics");
												}}
											>
												Thông số
											</Nav.Item>
											<Nav.Item
												icon={<DashboardIcon />}
												eventKey="Đồ thị"
												key="Đồ thị"
												onClick={() => {
													handleLink("graph", { location: `quận ${name}` });
												}}
											>
												Đồ thị
											</Nav.Item>
											<Nav.Item
												icon={<DashboardIcon />}
												eventKey="Độ tin cậy"
												key="Độ tin cậy"
												onClick={() => {
													handleLink("analysis");
												}}
											>
												Độ tin cậy
											</Nav.Item>
										</Nav.Menu>
									);
								}
							)}
						</Nav.Menu>
						<Nav.Item
							eventKey="Cài đặt"
							icon={<GearIcon />}
							onClick={() => {
								handleLink("home");
							}}
						>
							Cài đặt
						</Nav.Item>
					</Nav>
				</Sidenav.Body>
			</Sidenav>
		</div>
	);
};
