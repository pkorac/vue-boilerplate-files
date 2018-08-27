<template>
	<div class="home-screen screen">
		<h1>Hello World</h1>

		<h3>Another View</h3>
		<ViewLink to="settings" transition="slide-left" :params="{ username: 'peterk'}"><div class="button">Settings</div></ViewLink>

		<h3>Modal View</h3>
		<ModalLink to="Modal" transition="fade"><div class="button">Open modal</div></ModalLink>

	</div>
</template>

<script>

export default {
	name: 'home',

	data(){
		return{

		}
	},

	computed: {},
	methods: {},

	activated(){},
	created(){},
	mounted(){},
}

</script>


<style lang="scss" scoped>
	

</style>