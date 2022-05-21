import { Sidenav, Nav, Dropdown, Toggle } from "rsuite";
import GearIcon from "@rsuite/icons/Gear";
import DashboardIcon from "@rsuite/icons/Dashboard";
import SingleSourceIcon from "@rsuite/icons/SingleSource";
import OperatePeopleIcon from "@rsuite/icons/OperatePeople";
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
		<div style={{ height: "100%", display: "flex", flexDirection:"column" }}>
			<Sidenav
				defaultOpenKeys={["Nhà máy điện", "4"]}
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
						{/* <Nav.Item
						eventKey="2"
						icon={<DashboardIcon />}
					>
						Thông số
					</Nav.Item> */}
						<Dropdown
							eventKey="Nhà máy điện"
							title="Nhà máy điện"
							icon={<SingleSourceIcon />}
							trigger="click"
						>
							{["Đống Đa", "Hai Bà Trưng", "Ba Đình", "Hoàn Kiếm"].map(
								(name, idx) => {
									return (
										<Dropdown.Item
											key={idx}
											eventKey={`Nhà máy quận ${name}`}
											icon={<OperatePeopleIcon />}
											onClick={() => {
												handleLink("statistics");
											}}
										>
											Nhà máy quận {`${name}`}
										</Dropdown.Item>
									);
								}
							)}
						</Dropdown>
						<Dropdown
							eventKey="Đồ thị trực tuyến"
							title="Đồ thị trực tuyến"
							icon={<DashboardIcon />}
							trigger="click"
						>
							{["Đống Đa", "Hai Bà Trưng", "Ba Đình", "Hoàn Kiếm"].map(
								(name, idx) => {
									return (
										<Dropdown.Item
											eventKey={`Đồ thị nhà máy quận ${name}`}
											key={idx}
											icon={<OperatePeopleIcon />}
											onClick={() => {
												handleLink("graph", { location: `quận ${name}` });
											}}
										>
											Nhà máy quận {`${name}`}
										</Dropdown.Item>
									);
								}
							)}
						</Dropdown>
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
