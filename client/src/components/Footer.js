import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';

const Footer = () => {
    return (
    <footer className='footer' style={{position:"relative",bottom:"0",width:"100%"}}>
        <Container>
            <Row>
                <Col className='text-center py-3 mt-5'>Copyright &copy; Khana Khazana</Col>
            </Row>
        </Container>
    </footer>
    )
}

export default Footer;
//backgroundColor:"#dedede",