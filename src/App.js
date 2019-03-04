import React, { Component } from 'react';
import FullCalendarEvents from './Components/FullCalendar/';
import {Container, Row, Col} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Container>
      	<Row>
      		<Col md={{span: 10, offset: 1}}>
        		<FullCalendarEvents />
        	</Col>
        </Row>
      </Container>
    );
  }
}

export default App;




