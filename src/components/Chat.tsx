import {
	IonButton,
	IonGrid,
	IonRow,
	IonCol,
	IonTextarea,
	IonIcon
} from '@ionic/react';
import React from 'react';
import { paperPlane } from 'ionicons/icons';
import { ChatFeed } from 'react-bell-chat';

//todo: add chat function
export default class Chats extends React.Component {
	state = {
		message: '',
		messages: [
			{
				id: 1,
				authorId: 1,
				message: 'Sample message',
				createdOn: new Date(),
				isSend: true
			},
			{
				id: 2,
				authorId: 2,
				message: 'Second sample message',
				createdOn: new Date(),
				isSend: false
			}
		],
		authors: [
			{
				id: 1,
				name: 'Mark',
				isTyping: true,
				lastSeenMessageId: 1,
				bgImageUrl: undefined
			},
			{
				id: 2,
				name: 'Peter',
				isTyping: false,
				lastSeenMessageId: 2,
				bgImageUrl: undefined
			}
		]
	};

	styles = {
		position: 'absolute'
	};

	render() {
		return (
			<IonGrid>
				<IonRow>
					{/*todo: add a message list component*/}
					<ChatFeed
						messages={this.state.messages} // Array: list of message objects
						authors={this.state.authors} // Array: list of authors
						yourAuthorId={2} // Number: Your author id (corresponds with id from list of authors)
					/>
				</IonRow>
				<IonRow className='ion-align-items-end'>
					<IonCol>
						<IonTextarea
							placeholder='Chat message'
							onChange={e => this.setState({ message: e })}
						></IonTextarea>
					</IonCol>
					<IonCol size='3'>
						<IonButton
							color='primary'
							type='submit'
							expand='block'
							size='large'
							onClick={() => this.sendChat()}
						>
							<IonIcon slot='icon-only' icon={paperPlane}></IonIcon>
						</IonButton>
					</IonCol>
				</IonRow>
			</IonGrid>
		);
	}
	// local functions goes here
	sendChat() {
		let { message } = this.state;

		console.log('you have sent ' + message);

		message = '';
	}
}
