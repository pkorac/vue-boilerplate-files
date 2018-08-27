<template>
	<div class="show-modal-view-button-component">
		<div @click="showModal()" class="show-modal-view-button">
			<a href="" @click="preventDefault($event)"><slot></slot></a>
		</div>
	</div>
</template>


<script>

export default {
	name: 'ModalLink',

	props:{
		to: {
			type: String
		},
		transition: {
			type: String
		},
		close:{
			type: Boolean
		},
		params: {
			type: Object
		}
	},

	data(){
		return{
		}
	},

	computed: {},
	methods: {
		showModal(){

			if ( this.close ){

				var transition = this.$store.state.modalViewTransition += '-back';
				this.$store.commit('setModalTransition', transition);
				this.$store.commit('setModalParams', {});

				this.$nextTick(()=>{
					this.$store.commit('setModalView', null);
				});

			} else {
				this.$store.commit('setModalTransition', this.transition);
				if ( this.params) this.$store.commit('setModalParams', this.params);
				this.$nextTick(()=>{
					//$store.modalView = this.modalToView;
					this.$store.commit('setModalView', this.to);
				});
			}
			
		},

		preventDefault(e){
			e.preventDefault();
		}
	},

	created(){},
	mounted(){},

}
</script>



<style scoped>	
#sample-view{
	background: #eedd55;
}
</style>