import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
//import PropTypes from 'prop-types';
//
//Button_Donate.propTypes = {
//
//};

function Button_Donate(props) {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState('default');
    const handleClose = () => 
    {
        //const getData = () => {
        //    fetch('http://192.168.56.101:5000/test_server2/')
        //    .then(function (response) {
        //        return response.json()
        //    })
        //    //.catch(error => console.error(error))
        //    .then(function (myJson) {
        //        console.log(myJson)
        //        setContent(myJson.message)
        //    })
        //}
        //getData();
        setShow(false);
        
    }
    const handleShow = () => setShow(true);

    //init page
    //useEffect(() => {
    //    fetch('http://192.168.56.101:5000/test_server/')
    //        .then(function (response) {
    //            return response.json()
    //        })
    //        //.catch(error => console.error(error))
    //        .then(function (myJson) {
    //            console.log(myJson)
    //            setContent(myJson.message)
    //        })
    //}, []);

    return (
        <>
            <Button
                variant="warning"
                className= "btn-warning-hover"
                onClick={handleShow}>
                <span className="fw-bold btn-lg">贊助專案</span>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {content}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Button_Donate;