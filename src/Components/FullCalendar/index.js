import React from 'react';
 
import moment from 'moment'
import FullCalendar from 'fullcalendar-reactwrapper-with-scheduler';
import "fullcalendar/dist/fullcalendar.min.css"
import "fullcalendar-scheduler/dist/scheduler.min.css"
import './style.css'
 
class FullCalendarEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events:[
      {
          title: 'All Day Event',
          start: '2019-03-01',
          end: '2019-03-04',
          color: '#ace69d'
      },
      {
          title: 'Long Event',
          start: '2019-03-01',
          end: '2019-03-04',
          color: '#e29fa8'
      },
      {
          id: 999,
          title: 'Repeating Event',
          start: '2019-03-03',
          end: '2019-03-04',
          color: '#8aa0f2'
      },
      {
          id: 999,
          title: 'Repeating Event',
          start: '2017-05-16T16:00:00',
          color: '#ace69d'
      },
      {
          title: 'Conference',
          start: '2017-05-11',
          end: '2017-05-13',
          color: '#8aa0f2'
      },
      {
          title: 'Meeting',
          start: '2017-05-12T10:30:00',
          end: '2017-05-12T12:30:00',
          color: '#8aa0f2'
      },
      {
          title: 'Birthday Party',
          start: '2017-05-13T07:00:00',
          color: '#8aa0f2'
      },
      {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2017-05-28',
          color: '#8aa0f2'
      }
      ],    
    }
  }

  add(){
    let {events} = this.state;
    let data = {title: 'test event', start: '2019-03-05', color: 'orange'}
    events.push(data)
    this.setState({events})
  }
 
  render() {
    return (
      <div id="example-component" className="calCon">
        <button className="btn add-event">Add event</button>
        <FullCalendar
          id = "your-custom-ID"
          header = {{
            left: 'month,basicWeek today',
            center: 'prev title next',
            right: ''
          }}
          titleFormat={'MMM YYYY'}
          defaultDate={moment()}
          navLinks= {true}
          editable= {true}
          eventLimit= {true}
          events = {this.state.events}
        />
      </div>
    );
  }
}

export default FullCalendarEvents;