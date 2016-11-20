import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import AppRoutes from './router.jsx';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
	<Router
		history={hashHistory}
		onUpdate={() => window.scrollTo(0, 0)}
	>
		{AppRoutes}
	</Router>,
document.getElementById('app'));
