<template>
	<div class="settings-screen screen">
		<h1>Here be settings</h1>
		<p>Route params printout: {{ params }}</p>
		<p>Parameters stored: {{ username }}</p>

		<ViewLink back>Back</ViewLink>
	</div>
</template>

<script>

export default {
	name: 'settings',

	data(){
		return{
			username: 'peter'
		}
	},

	props: {
		params: {
			type: Object
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


<style lang="scss" scoped>
.settings-screen{
	background: #6381A3;
}
</style>