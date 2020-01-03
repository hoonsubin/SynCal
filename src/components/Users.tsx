import {
	IonContent,
	IonList,
	IonItem,
	IonIcon
} from '@ionic/react';
import { person } from 'ionicons/icons';
import React from 'react';

//todo: add chat function

const UsersPage: React.FC = () => {
	// add calendar control functions here

	return (
		<MockUserList></MockUserList>
	);
};

const MockUserList = () => {
	const items = [1, 2, 3, 4, 5, 6].map(x => {
		return (
			<IonItem key={x}>
				<IonIcon icon={person} slot='start' />
				User {x}
				<div className='item-note' slot='end'>
					I am user # {x}
				</div>
			</IonItem>
		);
	});

	return <IonList>{items}</IonList>;
};

export default UsersPage;
