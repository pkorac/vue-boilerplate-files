<template>
	<div id="navigation" class="main-screen">
		<transition :name="activeTransition">
			<keep-alive>
				<router-view :params="params"></router-view>
			</keep-alive>
		</transition>
		<ModalNavigation></ModalNavigation>
	</div>
</template>

<script>
import ModalNavigation from './components/ModalNavigation';

export default{
	name: 'navigation',

	components: {
		ModalNavigation
	},

	data(){
		return {
		}
	},

	computed: {
		activeTransition(){
			return this.$store.state.activeTransition;
		},

		params(){
			return this.$store.state.viewParams;
		}
	}
}

</script>


<style>


</style>