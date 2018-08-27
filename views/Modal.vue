<template>
	<div id="modal-view" class="screen">
		<h2>Modal View</h2>

		{{ params }}

		<div v-if="username">
			<h3>Username</h3>
			{{ username }}
		</div>

		<hr>

		<ModalLink close>Close</ModalLink>

	</div>
</template>


<script>

export default {
	name: 'modal',

	props: {
		params: {
			type: Object
		}
	},

	data(){
		return{
			username: null
		}
	},

	computed: {},
	methods: {},

	activated(){
		if ( this.params && this.params.username ) this.username = this.params.username;
	},
	created(){},
	mounted(){},

}
</script>



<style scoped>	
#modal-view{
	background: rgba(0,0,0,0.9);
	color: #fff;
}
</style>