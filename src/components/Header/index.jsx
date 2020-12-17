import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Headroom from 'react-headroom';
import './styles.scss';
import {useSelector} from "react-redux";

const Header = () =>{
    let users = useSelector(state => state.users);
   
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
                               <img className={`user-thumb`} src={users[0].photo} alt={`photo`} /><small className={`username`}>{users[0].name}</small>
                           </Col>
                       </Row>
                    </Container>
                </Headroom>
            </Container>
        </div>
    );
}

export default Header;
