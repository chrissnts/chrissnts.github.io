<script>
	import Display from "./Display.svelte";
	import Keyboard from "./Keyboard.svelte";

	let display = "";

	function appendNumber(num) {
		display += num;
	}

	function appendSymbol(symbol) {
		display += symbol;
	}

	function clear() {
		display = "";
	}

	function calculate() {
		try {
			display = eval(display).toString();
		} catch {
			display = "Erro";
		}
	}
</script>

<main>
	<div class="container">
		<Display {display} />
		<Keyboard
			on:appendNumber={(e) => appendNumber(e.detail)}
			on:appendSymbol={(e) => appendSymbol(e.detail)}
			on:clear={clear}
			on:calculate={calculate}
		/>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 100px;
	}

	.container {
		width: 100%;
		max-width: 300px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
