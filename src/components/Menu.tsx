import { IonContent, IonMenu } from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';

import UsersPage from './Users';
import ChatPage from './Chat';

interface MenuProps extends RouteComponentProps {
	appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
	<IonMenu contentId='main' type='overlay'>
		<IonContent>
			<UsersPage></UsersPage>
		</IonContent>
		<IonContent>
			<ChatPage></ChatPage>
		</IonContent>
	</IonMenu>
);

export default withRouter(Menu);
