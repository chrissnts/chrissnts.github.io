<script>
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	function sendNumber(num) {
		dispatch("appendNumber", num);
	}

	function sendSymbol(symbol) {
		dispatch("appendSymbol", symbol);
	}

	function clear() {
		dispatch("clear");
	}

	function calculate() {
		dispatch("calculate");
	}
</script>

<div class="keyboard">
	<button on:click={() => sendNumber(1)}>1</button>
	<button on:click={() => sendNumber(2)}>2</button>
	<button on:click={() => sendNumber(3)}>3</button>
	<button on:click={() => sendSymbol("+")}>+</button>

	<button on:click={() => sendNumber(4)}>4</button>
	<button on:click={() => sendNumber(5)}>5</button>
	<button on:click={() => sendNumber(6)}>6</button>
	<button on:click={() => sendSymbol("-")}>-</button>

	<button on:click={() => sendNumber(7)}>7</button>
	<button on:click={() => sendNumber(8)}>8</button>
	<button on:click={() => sendNumber(9)}>9</button>
	<button on:click={() => sendSymbol("*")}>*</button>

	<button on:click={calculate}>=</button>
	<button on:click={() => sendNumber(0)}>0</button>
	<button on:click={clear}>C</button>
	<button on:click={() => sendSymbol("/")}>/</button>
</div>

<style>
	button {
		padding: 1em;
		font-size: 1.5em;
		background-color: green;
		color: white;
		border-radius: 10px;
		cursor: pointer;
	}

	.keyboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
</style>