import { Sidenav, Nav, Dropdown, Toggle } from "rsuite";
import GearIcon from "@rsuite/icons/Gear";
import DashboardIcon from "@rsuite/icons/Dashboard";
import SingleSourceIcon from "@rsuite/icons/SingleSource";
import OperatePeopleIcon from "@rsuite/icons/OperatePeople";
import PageIcon from "@rsuite/icons/Page";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react"

export const Sidebar = ({expanded, setExpanded}) => {
	const navigate = useNavigate();
	const handleLink = useCallback(
		(link) => {
			navigate(`/${link}`, { replace: true });
		},
		[navigate]
	);

	const [activeKey, setActiveKey] = useState('1');

	return (
		<div style={{ height: "100%", display: "flex", flexDirection:"column" }}>
		<Toggle
			size="md"
			onChange={setExpanded}
			checked={expanded}
			checkedChildren="Thu gọn"
			unCheckedChildren="Mở rộng"
		/>
			<Sidenav
				defaultOpenKeys={["3", "4"]}
				collapsible
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
							eventKey="1"
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
							eventKey="3"
							title="Nhà máy điện"
							icon={<SingleSourceIcon />}
							trigger="click"
						>
							{["Đống Đa", "Hai Bà Trưng", "Ba Đình", "Hoàn Kiếm"].map(
								(name, idx) => {
									return (
										<Dropdown.Item
											eventKey={`3-${idx + 1}`}
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
						<Nav.Item
							eventKey="4"
							icon={<DashboardIcon />}
							onClick={() => {
								handleLink("graph");
							}}
						>
							Đồ thị trực tuyến
						</Nav.Item>
						<Nav.Item
							eventKey="5"
							icon={<GearIcon />}
							onClick={() => {
								handleLink("graph");
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
