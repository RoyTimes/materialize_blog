import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';
import _ from 'lodash';

import Master from './components/partial/master';
import Home from './components/partial/home';

import About from './components/content/pages/about';
import Posts from './components/content/posts/posts.json';
import PostList from './components/content/posts/postlist';
import Post from './components/content/posts/post';

const PostCount = Posts.posts_count;
const CategoryCount = Posts.category_count;

function getRangeArray (count) {
    var RangeArr = [];
    for (let i = 0; i < count/5; i ++)
        RangeArr[i] = i + 1;
    return RangeArr;
}

const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />

    <Route path="pages">
        <Route path="about" component={()=>(<About/>)} />
    </Route>


    {Posts.content.map(function(cate) {
        let From = "posts/" + cate.name;
        let To = "posts/" + cate.name + "/recent/1";
        return <Redirect from={From} to={To} />
    })}
    <Redirect from="posts" to="posts/recent/1" />
    <Route path="posts">
        <Route path="recent">
            {getRangeArray(PostCount).map(function(sub_route) {
                return <Route path={sub_route + ""} component={()=>(
                    <PostList range="all" page={sub_route} total_page={_.ceil(PostCount/5)}/>
                )}/>
            })}
        </Route>
        {Posts.content.map(function (cate) {
            return (
                <Route path={cate.name}>
                    <Route path="recent">
                        {getRangeArray(Posts.content[cate.index].posts.length).map (function (sub_route) {
                            return (<Route path={sub_route+""} component={()=>(
                                <PostList range={Posts.content[cate.index].name}page={sub_route}total_page={_.ceil(Posts.content[cate.index].posts.length/5)} />
                            )}/>)
                        })}
                    </Route>
                    {Posts.content[cate.index].posts.map(function (post){
                        return (
                            <Route path={post.category_url} component={()=>(
                                <Post post={post} />
                            )} />
                        );
                    })}
                </Route>
            )})}
    </Route>
  </Route>
);
export default AppRoutes;
