<script lang="ts">
	// @ts-nocheck
	import Fileby from "../routes/Fileby.svelte"
	
	let onScreen:string = $state(""),
		current:number = $state(0);

	function solve():void {
		if(onScreen===""){
			alert("Cannot solve empty expression")
		}else{
			onScreen=onScreen.replace("×", "*")
			onScreen=eval(onScreen).toString(10)			
		}
	}

	function remove():void {
		onScreen=onScreen.slice(0, onScreen.length-1)
	}
</script>

<div id="body" class={"colorBody"+(current+1)}>

	<section id="calculator">

		<section id="header">
			<div>calc</div>
			<div id="themePannel">
				<span id="spanFontSize">THEME</span>
				<span id="toggleSpan" class={"toggle"+(current+1)}>
					{#each [1, 2, 3] as item, index}
					<button
						class={(index==current)? "themeActif"+(current+1):"themeInactif"+(current+1)}
						onclick={() => current=index}
						aria-current={current===index}>
							<span class="flyingTxt">{item}</span>
					</button>
					{/each}
				</span>
			</div>
		</section>

		<input type="text" id="screen" class={"colorScreen"+(current+1)} bind:value={onScreen} disabled>

		<section id="keyboard" class={"keyboardColor"+(current+1)}>
			<div class="divKeyboard">
				{#each [7, 8, 9] as item}
					<button class={`tnum touch${(current+1)}`} onclick={()=>onScreen+=item}>{item}</button>
				{/each}
				<button class={"tdel delete"+(current+1)} onclick={remove}>DEL</button>
			</div>

			<div class="divKeyboard">
				{#each [4, 5, 6, "+"] as item}
					<button class={`tnum touch${(current+1)}`} onclick={()=>onScreen+=item}>{item}</button>
				{/each}
			</div>

			<div class="divKeyboard">
				{#each [1, 2, 3, "-"] as item}
					<button class={`tnum touch${(current+1)}`} onclick={()=>onScreen+=item}>{item}</button>
				{/each}
			</div>

			<div class="divKeyboard">
				{#each [".", 0, "/", "×"] as item}
					<button class={`tnum touch${(current+1)}`} onclick={()=>onScreen+=item}>{item}</button>
				{/each}
			</div>

			<div class="divKeyboard">
				<button class={`tfonc reset${(current+1)}`} onclick={()=>{onScreen=""}}>RESET</button>
				<button class={`tfonc equals${(current+1)}`} onclick={solve}>=</button>
			</div>
		</section>
	</section>

</div>

<Fileby/>

<style>
	/*---------------------------------------CORPS---------------------------------------*/

	*{
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
	}

	#body{
		height: 95vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button:hover{cursor: pointer;}

	/*---------------------------------------CALCULATRICE---------------------------------------*/

	section#calculator{
		display: flex;
		flex-direction: column;
	}

	section#header{
		display: flex;
		flex-direction: row;
		justify-content: end;
	}

	#themePannel{
		width: 100%;
		text-align: right;
	}

	#toggleSpan{
		padding: 1%;
		border-radius: 100px;
	}

	#toggleSpan>button, input#screen, section#keyboard{
		border: none;
		border-radius: 10px;
	}

	#spanFontSize, .flyingTxt{font-size: x-small;}

	.flyingTxt{
		position: relative;
		top: -20px;
	}

	input#screen{
		margin: 8% 0% 5%;
		padding: 8% 1.5%;
		text-align: right;
		font-size: clamp(1rem, calc(2vw + 1rem), 5rem);
	}

	#keyboard{
		display: flex;
		flex-direction: column;
		padding: 5% 2%;
	}

	.divKeyboard{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 2%;
	}

	.divKeyboard>button{
		transition: background-color 0.1s;
		border-radius: 8px;
		border: none;
		height: 60px;
	}

	button.tnum, button.tdel{width: 60px;}
	button.tdel{font-size: larger;}
	button.tnum{font-size: 32px;}


	@media (min-width: 375px) and (max-width: 579px) {
		button.tfonc{
			font-size: larger;
			width: 120px;
		}
	}

	@media (min-width: 580px) and (max-width: 1023px) {
		button.tfonc{
			font-size: larger;
			width: 40%;
		}
	}

	@media (min-width: 1024px) {

		#calculator{width: 30%;}
		
		button.tnum, button.tdel{
			min-width: 20%;
			max-width: 50%;
		}

		button.tfonc{
			font-size: larger;
			width: 45%;
		}
	}

	/*---------------------------------------COULEUR---------------------------------------*/

	/*---------------Fond principal*/

	.colorBody1{background-color:  hsl(222, 26%, 31%);}
	.colorBody2{background-color: hsl(0, 0%, 90%);}
	.colorBody3{background-color: hsl(268, 75%, 9%);}

	/*---------------Couleur de texte principal*/

	.colorBody1, .themeActif1, .themeInactif1, .colorScreen1{color: hsl(0, 0%, 100%);}
	.colorBody2, .themeActif2, .themeInactif2, .colorScreen2{color: hsl(60, 10%, 19%);}
	.colorBody3, .themeActif3, .themeInactif3, .colorScreen3{color: hsl(52, 100%, 62%);}

	/*---------------Écran*/

	.colorScreen1{background-color: hsl(224, 36%, 15%);}
	.colorScreen2{background-color: hsl(0, 0%, 93%);}
	.colorScreen3{background-color: hsl(268, 71%, 12%);}

	/*--------------- Bouton de thème & égal*/

	.themeActif1{background-color: hsl(6, 63%, 50%);}
	.themeActif2{background-color: hsl(25, 98%, 40%);}
	.themeActif3{background-color: hsl(176, 100%, 44%);}

	.equals1{
		background-color: hsl(6, 63%, 50%);
		box-shadow: 0px 5px 0px hsl(6, 70%, 34%);
		color: hsl(0, 0%, 100%);
	}

	.equals2{
		background-color: hsl(25, 98%, 40%);
		box-shadow: 0px 5px 0px hsl(24, 100%, 28%);
		color: hsl(0, 0%, 100%);
	}

	.equals3{
		color: hsl(198, 20%, 13%);
		box-shadow: 0px 5px 0px hsl(176, 91%, 70%);
		background-color: hsl(176, 100%, 44%);
	}

	/*Actif*/
	.themeActif1:active, .equals1:active, .themeInactif1:active{background-color: hsl(6, 93%, 67%);}
	.themeActif2:active, .equals2:active, .themeInactif2:active{background-color: hsl(25, 100%, 61%);}
	.themeActif3:active, .equals3:active, .themeInactif3:active{background-color: hsl(177, 100%, 79%);}

	/*Inactif*/
	.themeInactif1{background-color: hsl(225, 30%, 21%);}
	.themeInactif2{background-color: hsl(0, 6%, 82%);}
	.themeInactif3{background-color: hsl(269, 74%, 12%);}

	/*---------------Clavier & Toggle*/

	.keyboardColor1, .toggle1{background-color: hsl(223, 31%, 20%);}
	.keyboardColor2, .toggle2{background-color: hsl(0, 5%, 81%);}
	.keyboardColor3, .toggle3{background-color: hsl(268, 71%, 12%);}

	/*---------------Touches*/

	.touch1{
		background-color: hsl(30, 25%, 89%);
		box-shadow: 0px 5px 0px hsl(26, 14%, 65%);
		color:  hsl(221, 14%, 31%);
	}

	.touch2{
		background-color: hsl(30, 25%, 89%);
		box-shadow: 0px 5px 0px hsl(44, 11%, 60%);
		color: hsl(60, 10%, 19%);
	}

	.touch3{
		background-color: hsl(268, 47%, 21%);
		box-shadow: 0px 5px 0px hsl(289, 70%, 36%);
		color: hsl(52, 100%, 62%);
	}

	/*Actif*/
	.touch1:active{background-color: white;}
	.touch2:active{background-color: white;}
	.touch3:active{background-color: hsl(267, 54%, 44%);}

	/*---------------Delete & reset*/

	.delete1, .reset1{
		background-color: hsl(225, 21%, 49%);
		box-shadow: 0px 5px 0px hsl(224, 28%, 35%);
	}

	.delete2, .reset2{
		background-color: #388187;
		box-shadow: 0px 5px 0px hsl(184, 60%, 24%);
	}

	.delete3, .reset3{
		background-color: hsl(281, 89%, 26%);
		box-shadow: 0px 5px 0px hsl(285, 92%, 52%);
	}

	/*Couleur police*/
	.delete1, .reset1, .delete2, .reset2, .delete3, .reset3{color: hsl(0, 0%, 100%);}

	/*Actif*/
	.delete1:active, .reset1:active{background-color: hsl(224, 51%, 76%);}
	.delete2:active, .reset2:active{background-color: hsl(185, 41%, 56%);}
	.delete3:active, .reset3:active{background-color: hsl(279, 56%, 44%);}
</style>