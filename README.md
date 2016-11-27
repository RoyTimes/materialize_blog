### A React.js & Material UI based Blog system

#### I am currently rework most parts of this project. I have been busy the past few months and Material-UI API changed significantly. 

#### Not work perfectly on mobile devices (especially those with small screen). Trying to fix that right now.

#### Feature
This is a single page application completely built using React.js & React Router. My personal [blog](http://ziorix.com) is hosted by Github Pages. All the `.md` files(as post content) is also loading using Ajax from Github. For detailed info, go to my [blog](http://ziorix.com) and check out the `How did I creat a blog System` series. 

#### How to install 
1. git clone this project<br/>
2. cd into the folder<br/>
3. run `npm i` (may require `sudo`)<br/>
4. run `npm start` & the program would run @`localhost:3000`<br/>
5. run `npm run build` to compile and generate the static webpage @`build` folder<br/>
6. You may upload the content in `build` to Github Pages<br/>

#### How to manage Posts
1. Index of all posts is stored in `/src/app/components/content/posts/posts.json` (as a simple database)<br/>
2. posts would be loaded using `Markdown` compiler using Ajax according to the path info provided in `posts.json`<br/>
