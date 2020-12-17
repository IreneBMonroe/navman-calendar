import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Headroom from 'react-headroom';
import './styles.scss';


const Header = () =>{
    return (
        <div className="header">
            <Container fluid>
                <Headroom>
                    <Container className={`headroom-block`}>
                       <Row>
                           <Col className={`text-left`}>
                               Calendar
                           </Col>
                           <Col className={`text-right`}>
                               <img className={`user-thumb`} src={`http://lorempixel.com/400/400/people/`} /><small className={`username`}>Tomasz Z.</small>
                           </Col>
                       </Row>
                    </Container>
                </Headroom>
            </Container>
        </div>
    );
}

export default Header;
