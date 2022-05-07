import { Sidenav, Nav, Dropdown } from "rsuite";
import GearIcon from "@rsuite/icons/Gear";
import DashboardIcon from "@rsuite/icons/Dashboard";
import SingleSourceIcon from "@rsuite/icons/SingleSource";
import OperatePeopleIcon from "@rsuite/icons/OperatePeople";
import PageIcon from "@rsuite/icons/Page";

export const Sidebar = () => {
    return (
        <Sidenav
            defaultOpenKeys={["3", "4"]}
            collapsible
            activeKey="1"
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            <Sidenav.Body style={{ height: "100%" }}>
                <Nav style={{ height: "100%" }}>
                    <Nav.Item eventKey="1" icon={<PageIcon />}>
                        Trang chủ
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<DashboardIcon />}>
                        Thông số
                    </Nav.Item>
                    <Dropdown
                        eventKey="3"
                        title="Nhà máy điện"
                        icon={<SingleSourceIcon />}
                    >
                        {[
                            "Đống Đa",
                            "Hai Bà Trưng",
                            "Ba Đình",
                            "Hoàn Kiếm",
                        ].map((name, idx) => {
                            return (
                                <Dropdown.Item
                                    eventKey={`3-${idx + 1}`}
                                    icon={<OperatePeopleIcon />}
                                >
                                    Nhà máy quận {`${name}`}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown>
                    <Nav.Item eventKey="4" icon={<GearIcon />}>
                        Cài đặt
                    </Nav.Item>
                </Nav>
            </Sidenav.Body>
        </Sidenav>
    );
};
