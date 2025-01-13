<script lang="ts">
	// @ts-nocheck
	import Fileby from "../routes/Fileby.svelte" // Import du footer
	
	let onScreen:string = $state("")
	let current:number = $state(0 | 0)

	// Solving (eval() solve string type equation but isn't very safe... but I don't really care)
	function solve():void {onScreen=eval(onScreen).toString(10)}

	// Delete the last input by returning the string size-1
	function remove():void {onScreen=onScreen.slice(0, onScreen.length-1)}
</script>

<div id="body">

	<section id="calculator">

		<div id="header">
			<div>calc</div>
			<div id="themeSection">theme
				<span id="btnPanel">
					{#each [1, 2, 3] as item, index}
					<button
						id={index+1}
						aria-current={current===index}
						onclick={() => current=index}
						class={(index==current)? "themeActif":"themeInactif"}>
							<span class="survol">{index+1}</span>
						</button>
					{/each}
				</span>
			</div>
		</div>

		<input type="text" id="screen" bind:value={onScreen} disabled>

		<section id="keyboard">
			<div class="rowBtn">
				<button onclick={()=>{onScreen+="7"}}>7</button>
				<button onclick={()=>{onScreen+="8"}}>8</button>
				<button onclick={()=>{onScreen+="9"}}>9</button>
				<button class="clearButton" onclick={remove}>DEL</button>
			</div>
			<div class="rowBtn">
				<button onclick={()=>{onScreen+="4"}}>4</button>
				<button onclick={()=>{onScreen+="5"}}>5</button>
				<button onclick={()=>{onScreen+="6"}}>6</button>
				<button onclick={()=>{onScreen+="+"}}>+</button>
			</div>
			<div class="rowBtn">
				<button onclick={()=>{onScreen+="1"}}>1</button>
				<button onclick={()=>{onScreen+="2"}}>2</button>
				<button onclick={()=>{onScreen+="3"}}>3</button>
				<button onclick={()=>{onScreen+="-"}}>-</button>
			</div>
			<div class="rowBtn">
				<button onclick={()=>{onScreen+="."}}>,</button>
				<button onclick={()=>{onScreen+="0"}}>0</button>
				<button onclick={()=>{onScreen+="/"}}>÷</button>
				<button onclick={()=>{onScreen+="*"}}>×</button>
			</div>
			<div class="rowBtn2">
				<button class="clearButton" onclick={()=>{onScreen=""}}>RESET</button><button id="equals" onclick={solve} >=</button>
			</div>
		</section>
	</section>

</div>

<Fileby/>

<style>
	/*--------------------------------------------CORPS--------------------------------------------*/

	*{
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
		font-size: large;
		color: #fcffff;
	}

	#body{
		height: 95vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #3B4664;
	}

	/*-----------------------------------------CALCULATRICE-----------------------------------------*/

	#calculator{
		display: flex;
		flex-direction: column;
		height: 50%;
		width: 25%;
	}

	/*--------------------------------------------EN-TÊTE--------------------------------------------*/

	#header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	#themeSection{
		width: 100%;
		text-align: right;
	}

	#themeSection, .survol{font-size: small;}

	#btnPanel{
		background-color: #181F32;
		border-radius: 100px;
		padding: .5% 2%;
		width: 100%;
	}

	#btnPanel>button{
		border-radius: 20px;
		height: 20px; width: 20px;
	}

	.themeActif, #equals{
		background-color: #D13F30;
		color: #fcffff;
	}

	.themeInactif{background-color: #181F32;}

	#btnPanel>button:active, #equals:active{background-color: #F96C5B;}

	.survol{
		position: relative;
		top: -22.5px;
	}

	/*---------------------------------------------ÉCRAN---------------------------------------------*/

	#screen{
		border: none;
		border-radius: 8px;
		background-color: #181F32;
		font-size: xx-large;
		text-align: right;
		padding: 4% 0%;
		margin: 5% 0%;
	}

	/*--------------------------------------------CLAVIER--------------------------------------------*/

	#keyboard{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: #252D44;
		border-radius: 8px;
		padding: 3% 2%;
		height: 100%;
	}

	/*--------------------------------------------BUTTON--------------------------------------------*/

	button:active{background-color: white;}

	button{
		border: none;
		border-radius: 8px;
		background-color: #EAE2DB;
		cursor: pointer;
		color: #252D44;
		height: 40px;
	}

	.rowBtn, .rowBtn2{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 2% 0%;
	}

	.rowBtn>button{width: 20%;}
	.rowBtn2>button{width: 45%;}

	.clearButton{
		background-color: #647299;
		color: #fcffff;
	}

	.clearButton:active{background-color: #A2B3E1;}
</style>

<!-- THEME 1:
txt: fcffff
champs saisie & txt btn: 252D44
btn: EAE2DB
btn-HOVER : white
= & theme: F96C5B
del & clr: A2B3E1
écran: 181F32
body: 3B4664
-->

<!-- THEME 2:
txt:
champs saisie & txt btn:
btn:
btn-HOVER :
= & theme:
del & clr:
écran: 
body:
-->

<!-- THEME 3:
txt:
champs saisie & txt btn:
btn:
btn-HOVER :
= & theme:
del & clr:
écran: 
body:
-->