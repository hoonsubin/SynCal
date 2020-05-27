import {
	IonTextarea,
	IonIcon,
	IonContent,
	IonFab,
	IonFabButton
} from '@ionic/react';
import React from 'react';
import { paperPlane } from 'ionicons/icons';
import { ChatFeed, Message, Author, ChatFeedApi } from 'react-bell-chat';
import './chat.css';

interface ChatState {
	authors: Author[];
	messages: Message[];
	useCustomBubble: boolean;
	currentUser: number;
	messageText: string;
	simulateTyping: boolean;
	showAvatar: boolean;
	showLastSeen: boolean;
	showDateRow: boolean;
	showIsTyping: boolean;
	showLoadingMessages: boolean;
	hasOldMessages: boolean;
}

interface ChatProps {

}

//todo: add chat function
export default class Chats extends React.Component<ChatState, ChatProps> {

	state = {
		authors: [
			{
				id: 0,
				name: 'You',
			},
			{
				id: 1,
				name: 'Mark',
				isTyping: true,
				lastSeenMessageId: 7,
			},
			{
				id: 2,
				name: 'Evan',
				isTyping: true,
				lastSeenMessageId: 7,
			}
		],
		messages: [
			{
				id: 0,
				authorId: 1,
				message: 'Hey guys!!',
				createdOn: new Date(2018, 2, 27, 18, 32, 24),
				isSend: true
			},
			{
				id: 1,
				authorId: 2,
				message: 'Hey! Evan here. react-bell-chat is pretty dooope.',
				createdOn: new Date(2018, 2, 28, 18, 12, 24),
				isSend: true
			},
			{
				id: 2,
				authorId: 2,
				message: 'Rly is.',
				createdOn: new Date(2018, 2, 28, 18, 13, 24),
				isSend: true
			},
			{
				id: 3,
				authorId: 2,
				message: 'Long group.',
				createdOn: new Date(2018, 2, 28, 18, 13, 24),
				isSend: true
			},
			{
				id: 4,
				authorId: 0,
				message: 'My message.',
				createdOn: new Date(2018, 2, 29, 19, 32, 24),
				isSend: true
			},
			{
				id: 5,
				authorId: 0,
				message: 'One more.',
				createdOn: new Date(2018, 2, 29, 19, 33, 24),
				isSend: true
			},
			{
				id: 6,
				authorId: 2,
				message: 'One more group to see the scroll.',
				createdOn: new Date(2018, 2, 29, 19, 35, 24),
				isSend: true
			},
			{
				id: 7,
				authorId: 2,
				message: 'I said group.',
				createdOn: new Date(2018, 2, 29, 19, 35, 24),
				isSend: true
			}
		],
		useCustomBubble: false,
		currentUser: 0,
		messageText: '',
		simulateTyping: false,
		showAvatar: true,
		showDateRow: true,
		showLastSeen: true,
		showIsTyping: true,
		showLoadingMessages: false,
		hasOldMessages: true
	} as ChatState;;

	render() {
		return (
			<IonContent>
				<ChatFeed
					yourAuthorId={0}
					authors={this.state.authors}
					// chatBubbleStyles={bubbleStyles}
					maxHeight={400}
					// minHeight={600}
					messages={this.state.messages}
					showRecipientAvatar={this.state.showAvatar}
					showIsTyping={this.state.showIsTyping}
					showRecipientLastSeenMessage={this.state.showLastSeen}
					showDateRow={this.state.showDateRow}
					showLoadingMessages={this.state.showLoadingMessages}
					hasOldMessages={this.state.hasOldMessages}
				/>
				<IonFab vertical='bottom' horizontal='start'>
					<form>
						<input className='chat-input'
							placeholder='Chat message'
							onChange={e => this.setState({ messageText: e.target.value })}
						></input>
					</form>
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
		let { messageText, currentUser, messages } = this.state;

		if (messageText) {
			let currentChat = messages;

			// create new message object
			currentChat.push({
				id: messages.length + 1,
				authorId: currentUser,
				message: messageText,
				createdOn: new Date(),
				isSend: true
			});

			// debug message
			console.log('you have sent ' + messageText);

			this.setState({ messages: currentChat });

			// reset the message to an empty string
			messageText = '';
		}
		else {
			console.log('chat message has no content');
		}

	}
}
