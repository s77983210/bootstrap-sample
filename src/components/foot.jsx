import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "../css/main.css";

const Foot = () => {
    return (
        <div className="bg-secondary py-4">
           <Container className="text-white">
               <Row>
                   <Col>
                        <p className="text-center my-0">Copyright © 拼拼 All rights reserved.</p>
                   </Col>
               </Row>
           </Container>
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

export default Foot;