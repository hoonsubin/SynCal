import {
	IonContent,
	IonMenu,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonTitle,
	IonButton,
	IonIcon,
	IonBadge
} from '@ionic/react';
import React from 'react';
import { withRouter } from 'react-router-dom';

import Chat from './Chat';
import { person } from 'ionicons/icons';

import './menu.css';

function clickedUserList() {
	console.log('you clicked view users');
}

let userNo = 5;

const Menu: React.FunctionComponent = () => (
	<IonMenu contentId='main' type='overlay'>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot='end'>
					<IonButton onClick={() => clickedUserList()} className='users-button'>
						<IonBadge color='primary' className='users-badge'>
							{userNo}
						</IonBadge>
						<IonIcon slot='icon-only' icon={person} />
					</IonButton>
				</IonButtons>
				<IonTitle>Chat</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent>
			<Chat></Chat>
		</IonContent>
	</IonMenu>
);

export default withRouter(Menu);
