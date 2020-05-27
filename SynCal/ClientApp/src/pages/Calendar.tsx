import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
	IonIcon
} from '@ionic/react';
import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';

// import the default styles for the calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import { events as calendarEvents } from '../db';

import { cog } from 'ionicons/icons';

//import '../assets/scss/_plugin-react-big-calendar.scss';

//todo: add crud functionality to calendar

const localizer = momentLocalizer(moment);

const CalendarPage: React.FC = () => {
	// add calendar control functions here
	function clickedSettings() {
		console.log('you clicked the settings menu button');
	}
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Calendar</IonTitle>
					<IonButtons slot='end'>
						<IonButton slot='primary' onClick={() => clickedSettings()}>
							<IonIcon slot='icon-only' icon={cog} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<BigCalendar
					selectable
					localizer={localizer}
					events={calendarEvents}
					defaultView='month'
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
