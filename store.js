import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	activeTransition: 'slide-left',
	transitionStack: [],
	viewParams: undefined,
	modalView: undefined,
	modalViewTransition: 'fade',
	modalParams: undefined
  },

  mutations: {
	setTransition(state, transition ){
		state.activeTransition = transition;
		state.transitionStack.push( transition );
	},

	popTransition( state ){
		state.activeTransition = state.transitionStack[state.transitionStack.length - 1] + '-back';
		state.transitionStack.pop();
	},


	setViewParams( state, params ){
		state.viewParams = params;
	},

	setModalView( state, view ){
		state.modalView = view;
	},

	setModalTransition( state, transition ){
		state.modalViewTransition = transition;
	},

	setModalParams( state, params ){
		state.modalParams = params;
	}
  },

  actions: {

  }
})
