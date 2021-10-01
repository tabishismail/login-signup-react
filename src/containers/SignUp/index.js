import {useState} from 'react';
import { Formik } from 'formik';
import { Container, Row, Col } from "react-bootstrap";
import { MyAppBar, Input, BasicButtons } from "../../components"
import { Link,useHistory } from 'react-router-dom'
import { createUserWithEmailAndPassword, auth } from '../../confiq/Firebase';
import "./css/index.css"


let SignUp = () => {
    const history = useHistory();
    const register = (values) => {
        let email=values.email;
        let password=values.password;
        createUserWithEmailAndPassword(auth,email,password )
            .then((res) => {
                // setLoading(false)
                console.log("agaya===>", res)
                history.push('/')
            })
            .catch((err) => {
                // setLoading(false)
                console.log("masla agaya==>", err)
            })
    }
    return (

        <Container fluid>
            <Row>
                <Col><MyAppBar BtnTitle={"Logout"} title="Hello Moto" />
                </Col>
            </Row>
            <Row>
                <Col className="main">
                    <h1>SignUp</h1>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.firstName) {
                                errors.firstName = 'Required';
                            }
                            else if (!values.lastName) {
                                errors.lastName = 'Required';
                            }
                            else if (!values.email) {
                                errors.email = 'Required';
                            }
                             else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            else if (!values.password) {
                                errors.password = 'Required';
                            }
                            else if (values.password.length < 6) {
                                errors.password = 'Password must be atleast 6 digits';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                register(values)
                                // alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Input
                                error={errors.firstName}
                                    type="text"
                                    label="First Name"
                                    name="firstName"
                                    helperText={errors.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                />
                                
                                <Input
                                    type="text"
                                    error={errors.lastName}
                                    helperText={errors.lastName}
                                    label="Last Name"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                />
                                
                                <Input
                                error={errors.email}
                                    type="email"
                                    helperText={errors.email}
                                    label="Email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                
                                <Input
                                    type="password"
                                    error={errors.password}
                                    helperText={errors.password}
                                    label="Password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                               
                                <div className="myBtn">
                                    <BasicButtons type="submit" disabled={isSubmitting}>Register</BasicButtons>
                                </div>
                                <div>
                                    <Link to="/">Login</Link>
                                </div>
                            </form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>

    )
}

export default SignUp;