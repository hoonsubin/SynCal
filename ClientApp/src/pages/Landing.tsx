import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	IonText
} from '@ionic/react';
import React from 'react';

const LandingPage: React.FC = () => {
	// add calendar control functions here

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Calendar</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonText>Hello World</IonText>
			</IonContent>
		</IonPage>
	);
};

export default LandingPage;
