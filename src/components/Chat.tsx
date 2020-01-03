import { IonButton, IonGrid, IonRow, IonCol, IonTextarea } from '@ionic/react';
import React from 'react';

//todo: add chat function

const ChatPage: React.FC = () => {

	function updateMsg(e: any){
		console.log(e);
	}

	function sendChat(message: string) {
		if (message) {
			console.log('sending ' + message);
		}
	}

	return (
		<IonGrid>
			<IonRow>

			</IonRow>
			<IonRow className='ion-align-items-end'>
				<IonCol>
					<IonTextarea placeholder='Chat message'
					className='input'
					onChange={(e) => updateMsg(e)}></IonTextarea>
				</IonCol>
				<IonCol size='3'>
					<IonButton color='primary'
						type='submit'
						expand='block'
						size='large'
						onClick={() => sendChat('test')}>Send</IonButton>
				</IonCol>
			</IonRow>


		</IonGrid>
	);
};

export default ChatPage;
