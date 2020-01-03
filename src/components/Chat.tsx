import { IonInput, IonButton, IonFab } from '@ionic/react';
import React from 'react';

//todo: add chat function

const ChatPage: React.FC = () => {
	// add calendar control functions here

	return (
		<div className='chat-input'>
			<IonFab vertical='bottom' horizontal='start'>
				<IonInput placeholder='Chat' type='text'></IonInput>
			</IonFab>

			<IonFab vertical='bottom' horizontal='end' slot='fixed'>
				<IonButton color='primary'>Send</IonButton>
			</IonFab>
		</div>
	);
};

export default ChatPage;
