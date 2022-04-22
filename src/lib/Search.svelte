<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let coins;
	export let selectedCoin;

	let dispatchSelectedCoin = () => {
		dispatch('change-selected-coin', {
			coin: selectedCoin,
		});
	};

	let addCoin = () => {
		dispatch('addCoin');
	};
</script>

<div class="flex flex-row relative min-w-fit w-1/2">
	<!-- Coin Selector -->
	<div class="relative w-full">
		<select
			class="appearance-none border-none outline-none w-full py-2 px-4 rounded-l-full bg-zinc-700 text-white"
			name="coin-select"
			id="coin-select"
			bind:value={selectedCoin}
			on:change={dispatchSelectedCoin}
		>
			<option value="" class="text-white">Select a Coin...</option>
			{#each coins as coin}
				<option class="text-white" value={coin.id}>
					{coin.name}
				</option>
			{/each}
		</select>

		<div class="absolute top-0 bottom-0 right-4 w-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				fill="white"
				viewBox="0 0 24 24"
				><path
					d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
				/></svg
			>
		</div>
	</div>

	<!-- Add button -->
	<input
		class="text-white bg-gradient-to-tr from-cyan-700 to-fuchsia-700 px-8 rounded-r-full cursor-pointer hover:from-cyan-600 hover:to-fuchsia-600"
		type="button"
		value="Add"
		on:click={addCoin}
	/>
</div>
