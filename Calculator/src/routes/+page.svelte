<script lang="ts">
	// @ts-nocheck
	import Fileby from "../routes/Fileby.svelte"
	
	let onScreen:string = $state("")
	let current:number = $state(0)

	function solve():void {
		onScreen=eval(onScreen).toString(10)
	}

	function remove():void {
		onScreen=onScreen.slice(0, onScreen.length-1)
	}

</script>

<div id="body">
	<!-- TODO -->
</div>

<Fileby/>

<style>
</style>

<!--
-----------------------------------------DOCUMENTATION-----------------------------------------
	
	//---------------Component(s)

	“Fileby” is a file used as a footer that contains redirects and the footer's css style. The @ts-nocheck 	comment ignores a warning raised by Svelte when importing the component.
	
	
	
	//---------------Variable(s)

	onScreen: String variable representing the mathematical expression displayed on the calculator screen. Initialized to an empty string.
	
	current: Number variable representing the current calculator theme. Initialized to zero.
	
	
	
	//---------------Focntion(s)

	solve(): This function evaluates the mathematical expression contained in “onScreen” using the eval() 	function and updates “onScreen” with the result converted to string. NB: (eval() isn't very safe... but I 	don't really care)
	
	remove(): This function removes the last character from the onScreen string using the slice() method. It 	updates onScreen with the new truncated string. NB: slice(stringStart, stringLenght-1) 
	
	
	//---------------Classe(s)
-->