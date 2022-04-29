<script>
	import axios from 'axios';
	// import analyze from 'rgbaster';

	import Search from '../lib/Search.svelte';
	import Dashboard from '../lib/Dashboard.svelte';

	let coins = [];
	let selectedCoin = '';
	let dashboardCoins = [
		{
			id: 'bitcoin',
			symbol: 'btc',
			name: 'Bitcoin',
			image:
				'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
			current_price: 41845,
			market_cap: 795518215745,
			market_cap_rank: 1,
			fully_diluted_valuation: 878440118454,
			total_volume: 26209342876,
			high_24h: 42142,
			low_24h: 40959,
			price_change_24h: 419.07,
			price_change_percentage_24h: 1.01161,
			market_cap_change_24h: 8584323733,
			market_cap_change_percentage_24h: 1.09086,
			circulating_supply: 19017668.0,
			total_supply: 21000000.0,
			max_supply: 21000000.0,
			ath: 69045,
			ath_change_percentage: -39.41703,
			ath_date: '2021-11-10T14:24:11.849Z',
			atl: 67.81,
			atl_change_percentage: 61587.05158,
			atl_date: '2013-07-06T00:00:00.000Z',
			roi: null,
			last_updated: '2022-04-21T08:24:49.445Z',
		},
		{
			id: 'ethereum',
			symbol: 'eth',
			name: 'Ethereum',
			image:
				'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
			current_price: 3100.4,
			market_cap: 373521450544,
			market_cap_rank: 2,
			fully_diluted_valuation: null,
			total_volume: 16085598979,
			high_24h: 3160.59,
			low_24h: 3046.01,
			price_change_24h: 0.198128,
			price_change_percentage_24h: 0.00639,
			market_cap_change_24h: 747094130,
			market_cap_change_percentage_24h: 0.20041,
			circulating_supply: 120466304.999,
			total_supply: null,
			max_supply: null,
			ath: 4878.26,
			ath_change_percentage: -36.43492,
			ath_date: '2021-11-10T14:24:19.604Z',
			atl: 0.432979,
			atl_change_percentage: 716071.24584,
			atl_date: '2015-10-20T00:00:00.000Z',
			roi: {
				times: 98.07887255281041,
				currency: 'btc',
				percentage: 9807.88725528104,
			},
			last_updated: '2022-04-21T08:24:58.817Z',
		},
		{
			id: 'dogecoin',
			symbol: 'doge',
			name: 'Dogecoin',
			image:
				'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
			current_price: 0.140344,
			market_cap: 18624105220,
			market_cap_rank: 12,
			fully_diluted_valuation: null,
			total_volume: 819049058,
			high_24h: 0.146332,
			low_24h: 0.139376,
			price_change_24h: -0.004711630646,
			price_change_percentage_24h: -3.24816,
			market_cap_change_24h: -574062263.8864021,
			market_cap_change_percentage_24h: -2.99019,
			circulating_supply: 132670764299.894,
			total_supply: null,
			max_supply: null,
			ath: 0.731578,
			ath_change_percentage: -80.81229,
			ath_date: '2021-05-08T05:08:23.458Z',
			atl: 8.69e-5,
			atl_change_percentage: 161427.04572,
			atl_date: '2015-05-06T00:00:00.000Z',
			roi: null,
			last_updated: '2022-04-21T08:24:33.196Z',
		},
	];

	let addCoin = async () => {
		if (
			dashboardCoins.length > 0 &&
			dashboardCoins.some((coin) => coin.id === selectedCoin)
		)
			return;
		let currentCoin = coins.find((coin) => coin.id === selectedCoin);

		dashboardCoins = [...dashboardCoins, currentCoin];
	};

	let handleCoinSelect = (event) => {
		selectedCoin = event.detail.coin;
	};

	let getCoins = async () => {
		await axios
			.get('https://api.coingecko.com/api/v3/coins/markets', {
				params: {
					vs_currency: 'usd',
				},
			})
			.then((response) => (coins = response.data))
			.catch((e) => console.log(e));
	};

	let coinList = getCoins();
</script>

{#await coinList}
	<div>
		<h1 class="text-2xl text-white">Loading...</h1>
	</div>
{:then}
	<div class="py-4">
		<h1 class="text-2xl text-white">CryptoIndex</h1>
	</div>

	<Search
		{coins}
		{selectedCoin}
		on:addCoin={addCoin}
		on:change-selected-coin={handleCoinSelect}
	/>

	<Dashboard {dashboardCoins} on:addCoin={addCoin} />
{:catch}
	<code class="text-red-500 text-2xl">Could not load CryptoIndex</code>
{/await}
