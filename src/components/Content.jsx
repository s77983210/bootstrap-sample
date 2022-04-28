import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav, Badge, Form } from 'react-bootstrap';
import "../css/Progress.css";
//import Button_Donate from "./Button_Donate"; //載入component
function Content(props) {
    const [item, setItem] = useState("link-0");

    const handleChange = (item) => {
        setItem(item)
        console.log({ item })
    }

    return (
        <div>
            <SelectedTitle onSelectChange={handleChange} />
            <SelectedItem item={item} />
        </div>
    );
}
function SelectedTitle(props) {
    return (
        <div className="mb-2 border-top border-bottom mb-5">
            <Container className="">
                <Row>
                    <Col>
                        <Nav
                            defaultActiveKey="link-0"
                            onSelect={(selectedKey) => { props.onSelectChange(`${selectedKey}`) }}
                        >
                            <Nav.Item as="li">
                                <Nav.Link className="py-3 text-dark" eventKey="link-0">專案介紹</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link className="py-3 text-dark" eventKey="link-1">常見問答</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link className="py-3 text-dark" eventKey="link-2">目前進度</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link className="py-3 text-dark" eventKey="link-3">留言</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}
function SelectedItem(props) {
    let data = "";
    if (props.item == "")
        data = ""
    else if (props.item == "link-0") {
        data = <MainIntroduce></MainIntroduce>
    }
    return data;
}
function DonateItem(props) {
    return (
        <Card>
            <Card.Img variant="top" src="https://hexschool.github.io/boootstrap5WebLayout/assets/plan_img.jpg" />
            <Card.Body>
                <Container>
                    <Row className="justify-content-md-between border-bottom pb-2">
                        <Col>限時優惠</Col>
                        <Col className="text-end">2 days 20:05:20</Col>
                    </Row>
                    <p className="mb-0 fs-5">買一送一，只有兩百組別錯過</p>
                    <p className="mb-1 fs-4">NT$ 1600</p>
                    <Container className="ps-0 mb-1">
                        <Badge bg="light" text="dark" className="me-1 ps-0" >已被贊助88次</Badge>
                        <Badge bg="dark" className="">限量200個</Badge >
                    </Container>

                    <p>受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。</p>

                    <div className="d-grid">
                        <Button variant="warning">贊助此專案</Button>
                    </div>
                </Container>
            </Card.Body>



        </Card >

    );
}
function DonateForm(props) {
    const items = ["方案1", "方案2", "方案3"];
    const pays = ["信用卡付款", "貨到付款"];

    const listItems = items.map((item) =>
        <option key={item.toString()} value={item}>{item}</option>
    );
    const listPays = pays.map((pay) =>
        <option key={pay.toString()} value={pay}>{pay}</option>
    );
    return (
        <Container className="px-0 mb-5">
            <Row className="justify-content-md-center">
                <Col md="1"><img src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_heart.svg" /></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="pt-3">
                    <hr className="pt-6 border-2" />
                </Col>
                <Col md="2">
                    <p className="text-center fs-4 pe-2">贊助專案</p>
                </Col>
                <Col className="pt-3">
                    <hr className="pt-6 border-2" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Label htmlFor="basic-url">贊助方案</Form.Label>
                    <Form.Select aria-label="Default select example" className="bg-secondary text-white">
                        <option>請選擇一個方案</option>
                        {listItems}
                    </Form.Select>
                    <Form.Label htmlFor="basic-url">收件人姓名</Form.Label>
                    <Form.Control type="text" className="bg-secondary"/>

                    <Form.Label htmlFor="basic-url">收件地址</Form.Label>
                    <Form.Control type="text" className="bg-secondary"/>

                    <Form.Label htmlFor="basic-url">聯絡電話</Form.Label>
                    <Form.Control type="text" className="bg-secondary"/>

                    <Form.Label htmlFor="basic-url">聯絡信箱</Form.Label>
                    <Form.Control type="text" className="bg-secondary"/>

                    <Form.Label htmlFor="basic-url">付款方式</Form.Label>
                    <Form.Select aria-label="Default select example" className="bg-secondary text-white">
                        {listPays}
                    </Form.Select>

                    <Row className="justify-content-md-center mt-4">
                        <Col md="3">
                            <div className="d-grid">
                                <Button variant="warning fs-5">贊助專案</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}
function MainIntroduce(props) {
    return (
        <Container>
            <Row>
                <Col md="8">
                    <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/p1.jpg" className=""></img>
                    <div className='border-start border-warning border-4 pd-start'>
                        <p className="ps-2 py-3 fs-4" >施了魔法的照片</p>
                    </div>
                    <p className="lh-base"> 受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。</p>
                    <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/p2.jpg" />
                    <div className='border-start border-warning border-4 pd-start'>
                        <p className="ps-2 py-3 fs-4" >留下當下的美好</p>
                    </div>
                    <p className="lh-base">受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。</p>
                    <DonateForm />
                </Col>
                <Col md="4">
                    <Container className='border border-1 pt-3 mb-4'>
                        <Row>
                            <Col md={4}>
                                <img
                                    className='border rounded-circle border-warning border-2'
                                    src="https://hexschool.github.io/boootstrap5WebLayout/assets/store_img.jpg"
                                />
                            </Col>
                            <Col className='pt-3'>
                                <p className='fs-5'>缺錢事務所</p>
                                <p>已發起 1 個專案</p>
                            </Col>
                        </Row>
                        <p>需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！</p>
                        <Row>
                            <Col md={4}>
                                <Button variant="secondary" className="icon-30"><i className="fa-brands fa-facebook-f" /></Button>
                                <Button variant="secondary" className="icon-30"><i className="fa-brands fa-youtube" /></Button>
                            </Col>
                            <Col md={{ span: 5, offset: 3 }}>
                                <Button variant="light">
                                    <i className="far fa-comment-dots me-2"></i>
                                    <span className='fs-6'> 聯絡我們</span>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    <p className='vw-344 vh-40 bg-light text-center fs-5 border-start border-end border-warning border-5'>選擇一個方案來支持</p>
                    <DonateItem />
                    <DonateItem />
                    <DonateItem />
                </Col>
            </Row>
        </Container>
    );
}
export default Content;