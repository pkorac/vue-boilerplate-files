<template>
	<div @click="changeScreen()">
		<router-link :to="toParams" v-if="to"><slot></slot></router-link>
		<div v-if="back"><a href="https://www.google.com" @click="goBack($event)"><slot></slot></a></div>
	</div>
</template>

<script>
export default {
	name: 'ViewLink',

	props: {
		to: {
			type: String
		},
		back: {
			type: Boolean,
			default: false
		},
		transition: {
			type: String,
			default: ''
		},
		params: {
			type: Object
		},
	},

	data(){
		return {
			
		}
	},

	computed: {
		toParams(){
			var params = Object.assign( {name: this.to} );
			return params;
		}
	},

	methods:{
		changeScreen(){
			if ( !this.back ){
				this.$store.commit('setViewParams', this.params);
				this.$store.commit('setTransition', this.transition);
			}
			
			if ( this.$store.state.modalView ){
				var transition = this.$store.state.modalViewTransition += '-back';
				this.$store.commit('setModalTransition', transition);
				this.$store.commit('setModalParams', {});

				this.$nextTick(()=>{
					this.$store.commit('setModalView', null);
				});
			}
		},

		goBack(e){
			e.preventDefault();
			this.$store.commit('popTransition');
			this.$store.commit('setViewParams', {});
			this.$router.go(-1);


			if ( this.$store.state.modalView ){
				var transition = this.$store.state.modalViewTransition += '-back';
				this.$store.commit('setModalTransition', transition);
				this.$store.commit('setModalParams', {});

				this.$nextTick(()=>{
					this.$store.commit('setModalView', null);
				});
			}
		}
	}
}

</script>

<style>
</style>