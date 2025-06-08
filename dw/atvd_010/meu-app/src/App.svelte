<script>
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
    display = eval(display).toString();
  }
</script>

<main>
  <div class="container">
	
    <div class="display">
      <p>{display || 0}</p>
    </div>

    <div class="keyboard">
      <button on:click={() => appendNumber(1)}>1</button>
      <button on:click={() => appendNumber(2)}>2</button>
      <button on:click={() => appendNumber(3)}>3</button>
      <button on:click={() => appendSymbol("+")}>+</button>

      <button on:click={() => appendNumber(4)}>4</button>
      <button on:click={() => appendNumber(5)}>5</button>
      <button on:click={() => appendNumber(6)}>6</button>
      <button on:click={() => appendSymbol("-")}>-</button>

      <button on:click={() => appendNumber(7)}>7</button>
      <button on:click={() => appendNumber(8)}>8</button>
      <button on:click={() => appendNumber(9)}>9</button>
      <button on:click={() => appendSymbol("*")}>*</button>

      <button on:click={calculate}>=</button>
      <button on:click={() => appendNumber(0)}>0</button>
      <button on:click={clear}>C</button>
      <button on:click={() => appendSymbol("/")}>/</button>
    </div>
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

  .display {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid green;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 70px;
    border-radius: 5px;
	margin-bottom: 20px;
  }

  .display p {
    color: goldenrod;
    font-size: 2em;
	text-align: left;
    margin-left: 20px;
  }

  .keyboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  button {
    padding: 1em;
	  font-size: 1.5em;
    background-color: green;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }

</style>
