<template>
	<div>
		<v-carousel
			cycle
			height="1000"
			class="pa-10"
			hide-delimiter-background
			show-arrows-on-hover
		>
			<template v-slot:prev="{ on, attrs }">
				<v-btn
					color="dark"
					v-bind="attrs"
					v-on="on"
				>
					Previous slide
				</v-btn>
			</template>
			<template v-slot:next="{ on, attrs }">
				<v-btn
					color="dark"
					v-bind="attrs"
					v-on="on"
				>
					Next slide
				</v-btn>
			</template>
			<v-carousel-item
				v-for="(image, i) in images"
				:key="i"
			>
				<v-sheet
					:src="images[i].src"
					height="100%"
				>
					<v-row
						class="fill-height"
						align="center"
						justify="center"
					>
						<div class="text-h2">
							<v-img :src="images[i].src" />
							<!-- {{ slide }} Slide -->
						</div>
					</v-row>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>
<script>
export default {
	data: () => ({
		images: [
				
			{src: 'https://picsum.photos/1910/1080'},
			{src: 'https://picsum.photos/1920/1080'},
			{src: 'https://picsum.photos/1930/1080'},
			{src: 'https://picsum.photos/1940/1080'},
			{src: 'https://picsum.photos/1950/1080'}
		],
		// slides: [
		// 	'First',
		// 	'Second',
		// 	'Third',
		// 	'Fourth',
		// 	'Fifth'
		// ],
		interval: null
	}),
	mounted() {
		// this.interval = setInterval(() => this.randomPictures(), 10000);
	},
	methods: {
		randomPictures() {
			console.log(this.images[0].src);
			// https://picsum.photos/1920/1080
			// this.images.src = 'https://picsum.photos/1920/1080';

		},
		testthis(i) {
			console.log(this.images[i].src);
		}
	}
};
</script>
<style>
	
</style>