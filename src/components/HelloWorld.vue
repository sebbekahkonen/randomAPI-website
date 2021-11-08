<template>
	<v-container>
		<router-view />
		<v-card>
			<v-toolbar
				color="dark"
				dark
				flat
			>
				<v-app-bar-nav-icon />

				<v-toolbar-title>My TestGame</v-toolbar-title>

				<v-spacer />

				<v-btn icon>
					<v-icon>mdi-magnify</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>

				<template v-slot:extension>
					<v-tabs
						v-model="tab"
						align-with-title
					>
						<v-tabs-slider color="yellow" />

						<v-tab
							v-for="item in items"
							:key="item"
						>
							{{ item }}
						</v-tab>
						<v-tab>
							<router-link to="/StartGame">
								Start Game		
							</router-link>
						</v-tab>
						<v-tab>
							<router-link to="/NewGame">
								New Game		
							</router-link>
						</v-tab>
						<v-tab>
							<router-link to="/Login">
								Login		
							</router-link>
						</v-tab>
					</v-tabs>
				</template>
			</v-toolbar>

			<!-- <v-tabs-items v-model="tab">
				<v-tab-item
					v-for="item in items"
					:key="item"
				>
					<v-card flat>
						<v-card-text v-text="text" />
					</v-card>
				</v-tab-item>
			</v-tabs-items> -->
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'HelloWorld',

	data: () => ({
		ecosystem: [
			{
				text: 'vuetify-loader',
				href: 'https://github.com/vuetifyjs/vuetify-loader'
			},
			{
				text: 'github',
				href: 'https://github.com/vuetifyjs/vuetify'
			},
			{
				text: 'awesome-vuetify',
				href: 'https://github.com/vuetifyjs/awesome-vuetify'
			}
		],
		importantLinks: [
			{
				text: 'Documentation',
				href: 'https://vuetifyjs.com'
			},
			{
				text: 'Chat',
				href: 'https://community.vuetifyjs.com'
			},
			{
				text: 'Made with Vuetify',
				href: 'https://madewithvuejs.com/vuetify'
			},
			{
				text: 'Twitter',
				href: 'https://twitter.com/vuetifyjs'
			},
			{
				text: 'Articles',
				href: 'https://medium.com/vuetify'
			}
		],
		whatsNext: [
			{
				text: 'Explore components',
				href: 'https://vuetifyjs.com/components/api-explorer'
			},
			{
				text: 'Select a layout',
				href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
			},
			{
				text: 'Frequently Asked Questions',
				href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
			}
		]
	})
};
</script>
