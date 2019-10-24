import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Signup from './components/user/Signup';
import Signin from './components/user/Signin';
import UserProfile from './components/profile/UserProfile';
import Profile from './components/profile/Profile';
import Experience from './components/profile/Experience';
import Education from './components/profile/Education';
import CreatePost from './components/post/CreatePost';
import ViewComments from './components/post/ViewComments';
import DashBoard from './components/profile/DashBoard';
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faUser,
	faBars,
	faCheck,
	faHardHat,
	faGraduationCap,
	faThumbsDown,
	faThumbsUp
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars, faCheck, faThumbsDown, faHardHat, faGraduationCap, faThumbsUp, faUser);

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route path="/user/signup" component={Signup} />
				<Route path="/user/signin" component={Signin} />
				<Route path="/profile/all" component={Profile} />
				<Route path="/profile/handle/:handle" component={UserProfile} />
				<Route path="/profile/experience" component={Experience} />
				<Route path="/profile/education" component={Education} />
				<Route path="/post/create" component={CreatePost} />
				<Route path="/post/comment" component={ViewComments} />
				<Route path="/dashboard/:userId" component={DashBoard} />
				<Route path="/profile/create" component={CreateProfile} />
				<Route path="/profile/edit/:handle" component={EditProfile} />
			</div>
		</Router>
	);
}

export default App;
