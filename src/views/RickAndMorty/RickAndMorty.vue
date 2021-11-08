<template>
	<div>
		<form class="pa-5" align="center" justify="center">
			<v-text-field v-model="search"
				align="center"
				label="Search"
				required
			/>
			<v-btn
				class="mr-4"
				@click="getPokemon"
			>
				submit
			</v-btn>
			<v-btn @click="clear">
				clear
			</v-btn>
		</form>
		{{ errorMessage }}
		<div v-if="showDiv" class="mt-15" align="center">
			<v-avatar size="148">
				<img
					:src="apiValue.image"
					alt="not found"
				>
			</v-avatar>
			<p class="pt-5 display-1"><strong>Name: </strong>{{ apiValue.name }}</p>
			<p class="display-1"><strong>Species: </strong>{{ apiValue.species }}</p>
			<p class="display-1"><strong>Gender: </strong>{{ apiValue.gender }}</p>
			<p class="display-1"><strong>Status: </strong>{{ apiValue.status }}</p>
		<!-- image, name, species, gender, status  -->
		</div>
	</div>
</template>
<script>
export default {
	data: () =>({
		api: 'https://rickandmortyapi.com/api/character/?name=',
		apiValue: [],
		search: '',
		showDiv: false,
		errorMessage: ''
	}),
	methods: {
		async getPokemon() {
			this.errorMessage = '';
			try {
				const response = await this.$http.get(this.api + this.search.toLowerCase());

				this.showDiv = true;

				this.apiValue = response.data.results[0];
				console.log(response.data.results[0]);
			} catch (err) {
				this.showDiv = false;
				this.errorMessage = 'There is no pokemon with that name';
			}
		},

		submit() {
			this.$v.$touch();
		},

		clear() {
			this.search = '';
		}
	}
};
</script>
<style scoped>

</style>