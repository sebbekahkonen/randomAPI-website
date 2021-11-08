<template>
	<div>
		<h1 align="center" class="mt-5">{{ apiValue }}</h1>
		<v-row align="center" justify="space-around" class="mt-10">
			<v-icon size="128"
				@click="getRandomJoke"
			>
				mdi-dice-multiple-outline
			</v-icon>
		</v-row>
	</div>
</template>
<script>
export default {
	data: () => ({
		api: 'https://geek-jokes.sameerkumar.website/api',
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
<style scoped>
/* v-icon:hover{
	background-color: rgb(231, 3, 3);
} */
button:hover{
	background-color: transparent;
	transform: rotate(360deg);
}
</style>