import "./css/index.css"
import { Container, Row, Col } from "react-bootstrap";
import { MyAppBar, Input, BasicButtons } from "../../components"
import { Link, useHistory } from 'react-router-dom'



let Login = () => {
    return (
        <Container fluid>
            <Row>
                <Col><MyAppBar BtnTitle={"Logout"} title="Hello Moto" />
                </Col>
            </Row>
            <Row>
                <Col className="main">
                    <div className="justify-content-around mt-auto">
                        <Input type="email" className="myInput" Label="Email" title="email" />
                        <Input type="password" className="myInput" Label="Password" title="password" />


                        <div className="myBtn">
                            <BasicButtons >Login</BasicButtons>
                        </div>
                        <div>
                            <Link to="/signup">Register Now</Link>
                        </div>


                    </div>


                </Col>
            </Row>
        </Container>
    )
}

export default Login;