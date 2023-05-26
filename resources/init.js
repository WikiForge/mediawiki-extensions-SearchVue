'use strict';

$( function () {

	const Vue = require( 'vue' ),
		App = require( './components/App.vue' ),
		Tutorial = require( './components/Tutorial.vue' ),
		store = require( './store/index.js' ),
		/* eslint-disable no-jquery/no-global-selector */
		$vueContainer = $( '<div>' ).addClass( 'sdsv-container' ),
		$tutorialPopupContainer = $( '<div>' ).addClass( 'tutorial-popup' );
	$( '.mw-search-results-container > ul.mw-search-results > li:first-child' ).prepend( $tutorialPopupContainer );

	const Pinia = require( 'pinia' );
	const pinia = Pinia.createPinia();

	$( '.searchresults' ).append( $vueContainer );

	const searchPreviewApp = Vue.createMwApp( App )
		.use( store )
		.use( pinia );

	const tutorialVueApp = Vue.createMwApp( Tutorial )
		.use( store );
	// we define the whitespace option, which default have been deprecated in Vue 3
	searchPreviewApp.config.compilerOptions.whitespace = 'preserve';
	tutorialVueApp.config.compilerOptions.whitespace = 'preserve';

	searchPreviewApp.mount( $vueContainer.get( 0 ) );
	tutorialVueApp.mount( $tutorialPopupContainer.get( 0 ) );
} );
