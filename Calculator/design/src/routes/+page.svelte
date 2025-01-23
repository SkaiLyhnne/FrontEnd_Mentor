<script lang="ts">
	// @ts-nocheck
	import Fileby from "../routes/Fileby.svelte"
	
	let onScreen:string = $state(""),
		current:number = $state(0);

	function solve():void {
		if(onScreen===""){
			alert("Cannot solve empty expression")
		}else{
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
				theme
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
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="7"}>7</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="8"}>8</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="9"}>9</button>
				<button class={"delete"+(current+1)} onclick={remove}>DEL</button>
			</div>

			<div class="divKeyboard">
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="4"}>4</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="5"}>5</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="6"}>6</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="+"}>+</button>
			</div>

			<div class="divKeyboard">
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="1"}>1</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="2"}>2</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="3"}>3</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="-"}>-</button>
			</div>

			<div class="divKeyboard">
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="."}>.</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="0"}>0</button>
				<button class={"touch"+(current+1)} onclick={()=>onScreen+="/"}>/</button>
				<button class={"touch"+(current+1)} onclick={()=>{onScreen+="*"}}>×</button>
			</div>

			<div class="divKeyboard">
				<button class={"reset"+(current+1)} onclick={()=>{onScreen=""}}>RESET</button>
				<button class={"equals"+(current+1)} onclick={solve}>=</button>
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
		justify-content: center;
		align-items: center;
	}

	/*---------------------------------------CALCULATRICE---------------------------------------*/

	section#calculator{
		display: flex;
		flex-direction: column;
		width: 80%; /* À changer avec le media */
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

	#toggleSpan>button, input#screen, #keyboard, .divKeyboard>button{
		border: none;
		border-radius: 8px;
	}

	.flyingTxt{
		position: relative;
		top: -22px;
	}

	input#screen{
		margin: 8% 0% 5%;
		padding: 8% 1.5%;
		text-align: right;
		font-size: clamp(1rem, calc(2vw + 1rem), 5rem);
	}

	.divKeyboard>button{
		font-size: 32px;
		width: 50px;
	}

	#keyboard{
		display: flex;
		flex-direction: column;
/*		align-items: center;*/
	}

	#keyboard>.divKeyboard{
		display: flex;
/*		flex-direction: row;*/
		justify-content: space-between;
		width: 90%;
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

	/*---------------Bouton changement de thème*/

	.themeActif1{background-color: hsl(6, 63%, 50%);}
	.themeActif2{background-color: hsl(25, 98%, 40%);}
	.themeActif3{background-color: hsl(176, 100%, 44%);}

	/*---------------Bouton égal*/

	.equals1{
		background-color: hsl(6, 63%, 50%);
		color: hsl(0, 0%, 100%);
	}

	.equals2{
		background-color: hsl(25, 98%, 40%);
		color: hsl(0, 0%, 100%);
	}

	.equals3{
		color: hsl(198, 20%, 13%);
		background-color: hsl(176, 100%, 44%);
	}

	.themeActif1:active, .equals1:active{background-color: hsl(30, 25%, 89%);}
	.themeActif2:active, .equals2:active{background-color: hsl(45, 7%, 89%);}
	.themeActif3:active, .equals3:active{background-color: hsl(268, 47%, 21%);}

	/*Bouton Inactif*/
	.themeInactif1{background-color: #252d44;}
	.themeInactif2{background-color: #d3cdcd;}
	.themeInactif3{background-color: #1e0836;}

	/*---------------Clavier*/

	.keyboardColor1, .toggle1{background-color: hsl(223, 31%, 20%);}
	.keyboardColor2, .toggle2{background-color: hsl(0, 5%, 81%);}
	.keyboardColor3, .toggle3{background-color: hsl(268, 71%, 12%);}

	/*---------------Touches*/

	/*normale*/
	.touch1{
		background-color: hsl(30, 25%, 89%);
		color:  hsl(221, 14%, 31%);
	}

	.touch2{
		background-color: hsl(30, 25%, 89%);
		color: hsl(60, 10%, 19%);
	}

	.touch3{
		background-color: hsl(268, 47%, 21%);
		color: hsl(52, 100%, 62%);
	}

	.touch1:active{background-color: white;}
	.touch2:active{background-color: white;}
	.touch3:active{background-color: #6b34ac;}

	/*Delet & reset*/

	.delete1, .reset1{background-color: hsl(225, 21%, 49%);}
	.delete1:active, .reset1:active{background-color: #a2b3e1;}

	.delete3, .reset3{background-color: #56077c;}
	.delete3:active, .reset3:active{background-color: #8432b0;}

	.delete2, .reset2{background-color: #388187;}
	.delete2:active, .reset2:active{background-color: #62b5bd;}
	
	.delete1, .reset1, .delete2, .reset2, .delete3, .reset3{color: hsl(0, 0%, 100%);}
</style>

<!--
TODO: Ajouter une ombre aux touches

Touche normale:
	-theme1: hsl(224, 28%, 35%)

del & restet:
	-theme1: hsl(224, 28%, 35%)

equals & theme:
	-theme1: hsl(6, 70%, 34%)

-->
