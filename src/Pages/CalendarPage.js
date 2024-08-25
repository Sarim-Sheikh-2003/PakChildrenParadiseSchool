import "../Styles/CalendarPage.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React from "react";
import moment from 'moment'
import {
    Calendar,
    momentLocalizer,
} from 'react-big-calendar'
import events from "../Components/Events.js"
import "../Styles/CalendarPage.css";

const mLocalizer = momentLocalizer(moment)

export default function CalendarPage() {
    return (
        <>
            <div className="main">
                <div className="calendarpageheading">
                    <h1>Calendar</h1>
                </div>
                <div className="calendar">
                    <Calendar
                        localizer={mLocalizer}
                        events={events}
                        style={{ height: '100vh' }}
                        views={['month', 'week', 'day']}
                    />
                </div>
            </div>
        </>
    )
}