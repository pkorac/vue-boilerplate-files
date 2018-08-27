<template>
	<div id="modal-navigation">
		
		<transition :name="modalTransition">
			<component :is="modalView" :params="params"></component>
		</transition>

	</div>
</template>


<script>

export default {
	name: 'ModalNavigation',

	data(){
		return{
			
		}
	},

	computed: {
		modalTransition(){
			return this.$store.state.modalViewTransition;
		},
		modalView(){
			return this.$store.state.modalView;
		},
		params(){
			return this.$store.state.modalParams;
		}
	},
	methods: {},

	created(){},
	mounted(){},

}
</script>



<style scoped>
</style>