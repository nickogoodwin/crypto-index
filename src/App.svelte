<script>
	import './app.css';
	import { Router, Link, Route } from 'svelte-routing';

	import Home from './routes/Home.svelte';
	import Contact from './routes/Contact.svelte';
	import About from './routes/About.svelte';
	import Footer from './lib/Footer.svelte';

	export let url = '';
	export let basepath = '/crypto-index';
</script>

<main
	class="min-h-screen min-w-fit text-white flex flex-col justify-center items-center bg-zinc-800 overflow-auto"
>
	<Router {basepath} {url}>
		<nav
			class="bg-zinc-700 font-bold flex gap-8 top-0 text-zinc-100 rounded-full shadow-lg p-4 my-2"
		>
			<Link class="hover:underline" to="/">Home</Link>
			<Link class="hover:underline" to="about">About</Link>
			<Link class="hover:underline" to="contact">Contact</Link>
		</nav>
		<div class="flex flex-grow flex-col justify-center items-center w-full">
			<Route path="contact" component={Contact} />
			<Route path="about" component={About} />
			<Route path="/"><Home /></Route>
		</div>
	</Router>
	<Footer />
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	nav {
		/* box-shadow: 0.2em 0.2em 1em rgb(50, 50, 50),
			-0.2em -0.2em 0.8em rgb(30, 30, 30); */
	}
</style>
