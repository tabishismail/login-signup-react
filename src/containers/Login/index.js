import "./css/index.css"
import { Container,Row,Col } from "react-bootstrap";
import {MyAppBar, Input,BasicButtons} from "../../components"
import "./css/index.css"

let Login = () => {
    return (
        <Container fluid>
            <Row>
                <Col><MyAppBar BtnTitle={"Logout"} title="Hello Moto" />
                </Col>
            </Row>
            <Row>
                <Col className="main">
                    <div className="justify-content-center mt-auto">
                    <Input type="email" className="myInput" Label="Email" title="email" />
                    <Input type="password" className="myInput" Label="Password" title="password" />
                    <BasicButtons title="Login"/>

                    </div>


                </Col>
            </Row>
        </Container>
    )
}

export default Login;