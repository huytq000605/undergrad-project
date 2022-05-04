import logo from "./logoEn.png";
import {
    CustomProvider,
    FlexboxGrid,
    Container,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent"

function App() {
    return (
        <div>
            <img src={logo} alt="HUST Logo" />
            <CustomProvider theme="light">
                <FlexboxGrid style={{ "padding-top": "5px" }}>
                    <FlexboxGrid.Item
                        colspan={3}
                        style={{ height: "calc(100vh - 85px)" }}
                    >
                        <Container
                            className="sidebar-page"
                            style={{ height: "100%" }}
                        >
                            <Sidebar />
                        </Container>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={21}>
                        <Container>
                          <MainContent />
                        </Container>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </CustomProvider>
        </div>
    );
}

export default App;
