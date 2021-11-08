import Vue from 'vue';
import App from './App.vue';
import router from './router/routing';
import store from './store';
import axios from 'axios';
import services from '@/services';
import vuetify from './plugins/vuetify';

const httpClient = axios.create({
	withCredentials: false,
	headers: {
		Authorization: '',
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

// console.log(store.state.user.user.token);
// httpClient.interceptors.request.use(config => {
// 	const token = store.state.user.user.token;

// 	config.headers.Authorization = token;

// 	return config;

// });

// httpClient.interceptors.response.use(res => res, error => {
// 	console.log(error.response.status);

// 	if (error.response.status === 404) {
// 		router.push('/login');
// 	}

// 	throw error;
// });

Vue.config.productionTip = false;
Vue.prototype.$http = httpClient;
Vue.prototype.$services = services;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app');





