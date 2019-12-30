import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';

// import the default styles for the calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import { events as calendarEvents } from '../db';

//import '../assets/scss/_plugin-react-big-calendar.scss';

const localizer = momentLocalizer(moment);

const CalendarPage: React.FC = () => {
    // add calendar control functions here

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Calendar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <BigCalendar
                    selectable
                    localizer={localizer}
                    events={calendarEvents}
                    defaultView="month"
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date()}
                //onSelectEvent={event = () => selectedEvent(event)}
                //onSelectSlot={slotInfo = () => addNewEventAlert(slotInfo)}
                //eventPropGetter={eventColors}
                />
            </IonContent>
        </IonPage>
    );
};

export default CalendarPage;