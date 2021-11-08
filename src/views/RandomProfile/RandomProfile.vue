<template>
	<div>
		<h1 align="center" class="mt-8">{{ apiValue.name.first +" "+ apiValue.name.last }}</h1>
		<v-container align="center">
			<v-row align="center" justify="center">
				<v-avatar class="mt-8" size="178">
					<img
						:src="apiValue.picture.large"
						alt="random"
					>
				</v-avatar>
			</v-row>
		</v-container>
		<h2 align="center" class="mt-8">Age: {{ apiValue.dob.age }}</h2>
		<h2 align="center" class="mt-8">{{ apiValue.email }}</h2>
		<h2 align="center" class="mt-8">Cell: {{ apiValue.cell }}</h2>
	</div>
</template>
<script>
export default {
	data: () => ({
		api: 'https://randomuser.me/api/',
		apiValue: [],
		errorMessage: ''
	}),
	async created() {
		await this.getRandomUser();
	},
	methods: {
		async getRandomUser() {
			this.errorMessage = '';
			try {
				const response = await this.$http.get(this.api);

				this.apiValue = response.data.results[0];
			} catch (err) {
				this.errorMessage = 'something went wrong';
			}
		},
		test() {
			console.log(this.apiValue);
		}
	}
};
</script>
<style>
	
</style>