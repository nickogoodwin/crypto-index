<script>
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Chart from './Chart.svelte';
	const dispatch = createEventDispatcher();

	export let dashboardCoins;

	let formatPrice = (price) => {
		let options = {
			style: 'currency',
			currency: 'usd',
		};

		if (price < 1) {
			options.minimumFractionDigits = 4;
		}

		return price.toLocaleString('en-us', options);
	};

	let removeCoin = (index) => {
		dashboardCoins.splice(index, 1);
		dashboardCoins = dashboardCoins;
	};

	let addCoin = () => {
		dispatch('addCoin');
	};
</script>

<div
	class="flex flex-row gap-4 flex-wrap justify-center items-center py-4 text-white"
>
	{#each dashboardCoins as coin, index}
		<div
			transition:fade
			class="bg-zinc-700 shadow-2xl flex flex-col justify-center items-center gap-2 rounded-2xl p-4"
		>
			<div>
				<span class="text-white text-xl">{coin.name}</span>
			</div>

			<div class="w-full flex flex-row justify-center items-center gap-2">
				<div class="flex flex-col justify-center items-center">
					<img class="w-36" src={coin.image} alt={coin.name} />
				</div>
				<div class="flex flex-col flex-grow justify-center items-center">
					<div>
						<p>Current Price:</p>
						{#if coin.price_change_24h >= 0}
							<span class="text-green-500 text-xl"
								>{formatPrice(coin.current_price)}</span
							>
						{:else}
							<span class="text-red-500 text-xl"
								>{formatPrice(coin.current_price)}</span
							>
						{/if}
					</div>

					<div>
						<p>24h change:</p>
						{#if coin.price_change_24h >= 0}
							<span class="text-green-500">
								{formatPrice(coin.price_change_24h)}
								(+{coin.price_change_percentage_24h.toFixed(2)}%)
							</span>
						{:else}
							<span class="text-red-500">
								{formatPrice(coin.price_change_24h)}
								({coin.price_change_percentage_24h.toFixed(2)}%)
							</span>
						{/if}
					</div>
				</div>
			</div>

			<Chart {coin} {index} {formatPrice} />

			<!-- Remove Button -->
			<input
				class="w-24 bg-rose-600 hover:bg-rose-500 cursor-pointer rounded-full text-white px-4 py-2"
				type="button"
				value="Remove"
				on:click={() => removeCoin(index)}
			/>
		</div>
	{/each}

	<input
		class="text-2xl rounded-2xl cursor-pointer p-8 bg-zinc-700 hover:bg-zinc-600"
		type="button"
		value="+"
		on:click={addCoin}
	/>
</div>
