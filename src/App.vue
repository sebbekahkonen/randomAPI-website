<template class="teal lighten-1">
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer"
			app
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						<v-btn class="pa-5 mr-2" @click="$router.push('/')">Test-Website</v-btn>
						<v-btn color="dark" @click="changeColor"><v-icon>mdi-moon-waning-crescent</v-icon></v-btn>
					</v-list-item-title>
					<!-- <v-list-item-subtitle>
						best-test-ever
					</v-list-item-subtitle> -->
				</v-list-item-content>
			</v-list-item>

			<v-divider />

			<v-list
				dense
				nav
			>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					:to="item.to"
					link
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar
			app
			dark
			prominent
			fade-img-on-scroll
			scroll-target="#scrolling-techniques-3"
		>
			<!-- <template v-slot:img="{ props }">
				<v-img
					v-bind="props"
					gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
				/>
			</template> -->

			<v-app-bar-nav-icon @click="drawer = !drawer" />

			<v-app-bar-title class="display-1" />


			<v-spacer />

			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import { mdiMoonWaningCrescent } from '@mdi/js';
export default {
	data: () => ({
		icons: {
			mdiMoonWaningCrescent
		},
		drawer: null,
		items: [
			{ title: 'RandomProfile', icon: 'mdi-account', to:'/randomprofile'},
			{ title: 'Random Joke', icon: 'mdi-dice-multiple-outline', to:'/randomjoke'},
			{ title: 'Rick and morty', icon: 'mdi-magnify-expand', to:'/rickandmorty'},
			{ title: 'Geek Joke', icon: 'mdi-dice-multiple-outline', to:'/geekjokes'}
		]
	}),
	methods:{
		changeColor() {
			this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark;
		}
	}
};
</script>