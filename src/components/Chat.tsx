import {
	IonTextarea,
	IonIcon,
	IonContent,
	IonFab,
	IonFabButton
} from '@ionic/react';
import React from 'react';
import { paperPlane } from 'ionicons/icons';
import { ChatFeed } from 'react-bell-chat';
import './chat.css';

//todo: add chat function
export default class Chats extends React.Component {
	state = {
		currentMessage: '',
		thisAuthorId: 2,
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
			<IonContent>
				<ChatFeed
					messages={this.state.messages} // Array: list of message objects
					authors={this.state.authors} // Array: list of authors
					yourAuthorId={this.state.thisAuthorId} // Number: Your author id (corresponds with id from list of authors)
				/>
				<IonFab vertical='bottom' horizontal='start'>
					<IonTextarea className='chat-input'
						placeholder='Chat message'
						onChange={e => this.setState({ message: e })}
					></IonTextarea>

				</IonFab>

				<IonFab vertical='bottom' horizontal='end'>
					<IonFabButton onClick={() => this.sendChat()}>
						<IonIcon icon={paperPlane}></IonIcon>
					</IonFabButton>
				</IonFab>


			</IonContent>

		);
	}
	// local functions goes here
	sendChat() {
		let { currentMessage } = this.state;

		console.log('you have sent ' + currentMessage);

		currentMessage = '';
	}
}
