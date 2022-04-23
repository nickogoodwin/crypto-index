<script>
	import { Link } from 'svelte-routing';
	import { fade } from 'svelte/transition';
</script>

<div transition:fade class="flex flex-col justify-center items-center gap-4">
	<h1 class="text-2xl text-white">About</h1>
	<div
		class="min-w-fit w-1/4 flex flex-col justify-center items-center gap-4 bg-zinc-700 p-4 rounded-xl"
	>
		<span
			>CryptoIndex is project created by Nicko Goodwin for the Systems Analysis
			and Design course at College of Western Idaho.</span
		>
		<span>
			The project consisted of pitching a prototype of an app and then
			implementing it.
		</span>

		<span> CryptoIndex is that app. </span>

		<span>
			CryptoIndex is designed to be a research tool that allows users to get
			up-to-date information about their favorite cryptocurrencies in order to
			make well-informed purchase decisions.
		</span>

		<span> I hope you like it! </span>

		<span>
			Please feel free to <Link
				class="text-zinc-400 hover:underline"
				to="contact">Contact</Link
			> me and leave a message!
		</span>
	</div>
</div>
