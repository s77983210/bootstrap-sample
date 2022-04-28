import React from 'react';
import { Badge, Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import "../css/Progress.css";
import Button_Donate from "./Button_Donate"; //載入component

function Progress(props) {
    return (
        <div className="py-5 bg-light">
            <Container>
                <Badge bg="secondary">魔法科技</Badge>
                <p className="mt-1 fs-2 fw-bold ls-3">拍出會動的照片 | LivePhotos魔法拍立得</p>

                <Row className="g-3">
                    <Col md="7">
                        <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/produt_image.jpg" className="img1"></img>
                    </Col>

                    <Col md="5">
                        <Container className='px-0'>
                            <p className="mb-0">目標 $600,000</p>
                            <p className="fs-2 fw-bold mb-0">$280,047</p>
                            <ProgressBar className="mb-3" variant="warning" now={41} label={`${41}%`} />

                            <Row>
                                <Col>
                                    <p className="fs-6">贊助人數</p>
                                    <p className="fs-2 fw-bold">1374人</p>
                                </Col>
                                <Col>
                                    <p className="fs-6">募資倒數</p>
                                    <p className="fs-2 fw-bold">27天</p>
                                </Col>
                            </Row>
                            <Row className="mb-3 ms-1">
                                <Col className="px-1">
                                    <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good01.svg" alt="" />
                                    <small className='d-md-none'>認證標章</small>
                                </Col>
                                <Col className="px-1">
                                    <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good02.svg" alt="" />
                                    <small className='d-md-none'>品質保證</small>
                                </Col>
                                <Col className="px-1">
                                    <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good03.svg" alt="" />
                                    <small className='d-md-none'>原生創意</small>
                                </Col>
                                <Col className="px-1"> 
                                    <img src="https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good04.svg" alt="" />
                                    <small className='d-md-none'>人氣王</small>
                                </Col>
                                <Col md="8" sm="0"></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="bg-white border-start border-warning border-4 pd-start">
                                        <p className="ps-2 py-3">
                                            專案募資中!<br />
                                            在 2021/06/14 23:59 募資結束前，您都可以贊助我們！
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-1">
                                <Col className="d-grid">
                                    <Button_Donate variant="warning"/>
                                </Col>
                            </Row>
                            <Row className="gx-2">
                                <Col className="d-grid col-7" >
                                    <Button variant="warning btn-outline-secondary btn-lg bg-light">
                                        <i className="fa-solid fa-heart">追蹤專案</i>
                                        
                                    </Button>
                                </Col>
                                <Col className="d-grid">
                                    <Button variant="warning btn-outline-secondary btn-lg bg-light">
                                        <i className="fa-solid fa-share-nodes">分享</i>
                                    </Button>
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Progress;