<template>
	<div>
		<h1 align="center" class="mt-5">{{ apiValue.setup }}</h1>
		<h2 align="center" class="mt-10">{{ apiValue.delivery }}</h2>
		<v-row align="center" justify="space-around" class="mt-10">
			<v-btn @click="getRandomJoke">New Joke</v-btn>
		</v-row>
	</div>
</template>
<script>
export default {
	data: () => ({
		api: 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist',
		apiValue: [],
		errorMessage: ''
	}),
	async created() {
		await this.getRandomJoke();
	},
	methods: {
		async getRandomJoke() {
			this.errorMessage = '';
			try {
				const response = await this.$http.get(this.api);

				this.apiValue = response.data;
				console.log(response.data);
			} catch (err) {
				this.errorMessage = 'something went wrong';
			}
		}
	}
};
</script>
<style>
	
</style>