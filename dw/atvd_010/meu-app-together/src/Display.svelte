<script>
	export let display;
</script>

<div class="display">
	<p>{display || 0}</p>
</div>

<style>
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
</style>