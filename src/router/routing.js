import Vue from 'vue';
import VueRouter from 'vue-router';
import randomprofile from '../views/RandomProfile/routes';
import randomjoke from '../views/RandomJoke/routes';
import rickandmorty from '../views/RickAndMorty/routes';
import geekjokes from '../views/GeekJokes/routes';
import startpage from '../views/Startpage/routes';
// import Exit from '../views/Exit/routes';
// import Login from '../views/Login/routes';

Vue.use(VueRouter);

const routes = [
	...randomprofile,
	...randomjoke,
	...rickandmorty,
	...geekjokes,
	...startpage
];
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
