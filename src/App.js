import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import './App.scss';
import Calendar from './components/Calendar';
import ToDoSummary from "./components/ToDoSummary";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Row className="align-items-start">
          <SideBar />
          <Col md={7} sm={12}>
            <Calendar />
            <ToDoSummary/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
