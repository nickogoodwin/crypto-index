<script>
	import axios from 'axios';
	// import analyze from 'rgbaster';

	import { fade } from 'svelte/transition';

	import Line from 'svelte-chartjs/src/Line.svelte';

	export let coin;
	export let formatPrice;

	coin.market_chart = {
		labels: [],
		datasets: [
			{
				label: '',
				fill: false,
				lineTension: 0.3,
				color: 'rgb(255,255,255)',
				backgroundColor: 'rgba(204, 153, 0, 0.3)',
				borderColor: '#0e7490',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(205, 130,158)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 1,
				pointHoverRadius: 2,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 1,
				pointRadius: 0,
				pointHitRadius: 10,
				data: [],
			},
		],
	};

	let options = {
		responsive: true,
		maintainAspectRation: false,
		plugins: {
			tooltip: {
				callbacks: {
					label: function (context) {
						let label = context.dataset.label || '';

						if (label) {
							label += ': ';
						}
						if (context.parsed.y !== null) {
							label += formatPrice(context.parsed.y);
						}
						return label;
					},
				},
			},
		},
		scales: {
			x: {
				ticks: {
					color: 'white',
				},
			},
			y: {
				ticks: {
					color: 'white',
					callback: function (value, index, ticks) {
						return formatPrice(value);
					},
				},
			},
		},
	};

	let getChartData = async () => {
		await axios
			.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart`, {
				params: {
					vs_currency: 'usd',
					days: 1,
				},
			})
			.then((response) => {
				let prices = response.data.prices;

				coin.market_chart.datasets[0].label = coin.name;

				prices.forEach((item) => {
					let unix_time = item[0];
					let price = item[1];

					// convert UTC to datetime
					let date = new Date(unix_time).toLocaleTimeString();

					coin.market_chart.labels = [...coin.market_chart.labels, date];
					coin.market_chart.datasets[0].data = [
						...coin.market_chart.datasets[0].data,
						price,
					];
				});
			})
			.catch((e) => console.log(e));

		if (coin.price_change_24h < 0) {
			coin.market_chart.datasets[0].borderColor = 'rgb(239, 68, 68)';
			coin.market_chart.datasets[0].backgroundColor = 'rgb(239, 68, 68)';
		} else {
			coin.market_chart.datasets[0].borderColor = 'rgb(34,197,94)';
			coin.market_chart.datasets[0].backgroundColor = 'rgb(34,197,94)';
		}

		// IMAGE ANALYZER TO SET THE CHART COLOR TO THE COLOR OF THE COIN LOGO
		// However it's running into a CORS issue and idk how to fix it :/

		// let imageColors = await analyze(coin.image);

		// let primaryColor = imageColors[0].color;

		// coin.market_chart.datasets[0].borderColor = primaryColor;
		// coin.market_chart.datasets[0].backgroundColor = primaryColor;
		// coin.market_chart.datasets[0].pointBorderColor = primaryColor;
		// coin.market_chart.datasets[0].pointBackgroundColor = primaryColor;
	};

	let coinChartData = getChartData();
</script>

<div
	transition:fade
	id="chart"
	class="flex flex-col justify-center items-center p-2 my-2 rounded-2xl bg-zinc-800"
>
	{#await coinChartData}
		<h1>loading chart...</h1>
	{:then}
		<!-- 
		--CHART RANGE SELECTOR--
		
		Option A:
		**Pass a 'to' and 'from' value to api call

		function getChartData(to, from) {	
			axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart/range`, {
				params: {
					vs_currency: 'usd',
					from: from,
					to: to,
				},
			})
		}
	 -->
		<!-- <div
			class="bg-zinc-600 rounded-full flex justify-center items-center gap-4 px-2"
		>
			<input
				class="cursor-pointer hover:bg-zinc-700"
				type="button"
				value="1D"
			/>
			<input
				class="cursor-pointer hover:bg-zinc-700"
				type="button"
				value="1W"
			/>
			<input
				class="cursor-pointer hover:bg-zinc-700"
				type="button"
				value="1M"
			/>
			<input
				class="cursor-pointer hover:bg-zinc-700"
				type="button"
				value="1Y"
			/>
		</div> -->
		<Line data={coin.market_chart} {options} height={250} width={400} />
	{:catch}
		<h1>could not load chart data</h1>
	{/await}
</div>

<style>
	#chart {
		box-shadow: 0.5rem 0.5rem 1rem rgb(50, 50, 50),
			-0.5rem -0.5rem 1rem rgb(70, 70, 70);
	}
</style>
