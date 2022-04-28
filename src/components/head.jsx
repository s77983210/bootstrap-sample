import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import "../css/main.css";

const style = {
    display: 'flex'
};
const head = () => {
    return (
        <div>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="#">
                        <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/logo.jpg" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav.Link href="#">
                            <span className="title">關於</span>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <span className="title">挖寶</span>
                        </Nav.Link>
                        <Nav.Link href="#" className="me-auto">
                            <span className="title">我有個大膽的想法</span>
                        </Nav.Link>

                        <Nav.Item className="me-2">
                            <button className="title btnlogin">登入</button>
                        </Nav.Item>
                        <Nav.Item>
                            <button className="title btnsub">註冊</button>
                        </Nav.Item>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
            <hr />
        </div>
        /*<Container>
            <Row>
                <Col className="toollist">

                    <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/logo.jpg" />
                    <img src="https://fakeimg.pl/100x100/ff0000/" />
                    <img src="https://fakeimg.pl/100x100/ff0000/" />
                    <img src="https://fakeimg.pl/100x100/ff0000/" />
                    <img src="https://fakeimg.pl/100x100/ff0000/" />
                    <img src="https://fakeimg.pl/100x100/ff0000/" />
                    <img src="https://fakeimg.pl/100x100/ff0000/" />
                    <img src="https://fakeimg.pl/100x100/ff0000/" />
                    <img src="https://fakeimg.pl/100x100/ff0000/" />
                </Col>
            </Row>
        </Container>*/
    );
};

export default head;