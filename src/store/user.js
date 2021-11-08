import services from '@/services';
import router from '../router/routing';


const initialState = () => ({
	id: null,
	username: '',
	email: '',
	phonenumber: null,
	token: ''
});

export default {
	namespaced: true,

	state: {
		user: initialState()
	},
	mutations: {
		setUser(state, data) {
			console.log(data);
			state.user = data;
		}
	},
	actions: {
		async login({ commit }, data) {
			const userData = await services.user.login(data.username, data.password);

			commit('setUser', userData);

		},

		logout({ commit }) {
			commit('setUser', initialState());
			router.push('/login');
		}
	},
	getters: {
		getUser(state) {
			return state.user;
		}
	}
};