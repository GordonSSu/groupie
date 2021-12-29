import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import listPlugin from '@fullcalendar/list';

class Calendar extends React.Component {
    calendarComponentRef = React.createRef();
    state = {
        calendarWeekends: true,
        calendarEvents: [ // initial event data
            {title: 'Event Now', start: new Date()}
        ],
        events: [
                { title: 'event 1', start: '2021-12-13' },
                { title: 'event 2', start: '2020-12-15' },
                { title: 'event 2', start: '2020-08-15' },
                { title: 'event 2', date: '2020-08-15' },
                { title: 'event 2', date: '2020-08-15' },
                { title: 'event 2', date: '2020-08-15' },
                { title: 'event 2', date: '2020-08-15' }
        ]
    };

    render() {
        return (
            <div className='demo-app'>
                <div className='demo-app-calendar'>
                    <FullCalendar
                        defaultView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,listWeek'
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        ref={this.calendarComponentRef}
                        weekends={this.state.calendarWeekends}
                        //events={this.state.calendarEvents}
                        events={[
                            { title: 'event 1', date: '2021-12-01' },
                            { title: 'event 2', date: '2021-12-02' }
                        ]}
                    />
                </div>
            </div>
        )
    }

}

export default Calendar;