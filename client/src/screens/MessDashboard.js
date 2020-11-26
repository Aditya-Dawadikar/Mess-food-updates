import React from 'react';
import MessInfo from '../components/MessInfo';
import MenuCards from '../components/MenuCards';
import {Container} from 'react-bootstrap';


const MessDashboard = () => {
    return (
        <Container style={{marginTop:"2rem"}}>  
            <MessInfo />
            <MenuCards />
        </Container>
    )
}

export default MessDashboard;
