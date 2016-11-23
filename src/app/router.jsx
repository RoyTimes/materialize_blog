import React from 'react';
import {Route,Redirect,IndexRoute,DefaultRoute} from 'react-router';
import _ from 'lodash';

import Master from './partial/router/master';
import PostList from './partial/router/post_list';
import Post from './partial/router/post';
import About from './partial/router/about';

import AdminHome from './partial/router/admin/admin_home';
import PostAdmin from './partial/router/admin/post_admin';
import EditPost from './partial/router/admin/edit_post';
import PageAdmin from './partial/router/admin/page_admin';
import EditPage from './partial/router/admin/edit_page';
import CategoryAdmin from './partial/router/admin/category_admin';
import AuthorAdmin from './partial/router/admin/author_admin';


const AppRoutes = (
	<Route path="/" component={Master}>

		<Redirect from="posts" to="posts/1" />
		<Route path="posts">
			<Route path=":id" component={PostList} />
			<Route path=":category/:id" component={PostList} />
		</Route>
		<Route path="post/:id" component={Post} />

		<Route path="pages">
			<IndexRoute component={About} />
			<Route path="about" component={About} />
		</Route>

		<Route path="admin">
			<IndexRoute component={AdminHome} />

			<Route path="posts">
				<IndexRoute component={PostAdmin} />
				<Route path="edit/:id" component={EditPost} />
			</Route>
			<Route path="pages">
				<IndexRoute component={PageAdmin} />
				<Route path="edit/:id" component={EditPage}/>
			</Route>

			<Route path="categories" component={CategoryAdmin}/>
			<Route path="authors" component={AuthorAdmin} />
		</Route>

	</Route>
);

export default AppRoutes;
