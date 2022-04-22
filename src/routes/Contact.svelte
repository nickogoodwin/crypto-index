<script>
	import { fade, slide } from 'svelte/transition';
	let name;
	let email;
	let message;

	let sent = false;

	import emailjs from '@emailjs/browser';

	let sendEmail = () => {
		let serviceID = 'service_63g86zc';
		let templateID = 'template_i0qd5dw';
		let templateParams = {
			name: name,
			email: email,
			message: message,
		};
		let publicKey = '937HPZdRVzM8PS565';

		emailjs.send(serviceID, templateID, templateParams, publicKey).then(
			(response) => {
				console.log(response.status, response.text);
			},
			(error) => {
				console.log(error);
			}
		);

		sent = true;
	};
</script>

<div>
	{#if sent}
		<div transition:fade>
			<h1 class="text-2xl">Thanks for reaching out!</h1>
		</div>
	{:else}
		<div
			transition:fade
			class="flex flex-col gap-2 w-96 bg-zinc-700 rounded-2xl p-4 shadow-xl"
		>
			<h1 class="text-2xl text-white">Contact</h1>

			<label class="text-left" for="name">Name</label>
			<input
				class="appearance-none border-none outline-none w-full py-2 px-4 rounded-full bg-zinc-800 text-white"
				type="text"
				name="name"
				id="name"
				bind:value={name}
			/>

			<label class="text-left" for="email">Email</label>
			<input
				class="appearance-none border-none outline-none w-full py-2 px-4 rounded-full bg-zinc-800 text-white"
				type="email"
				bind:value={email}
			/>

			<label class="text-left" for="Message">Message</label>
			<textarea
				class="appearance-none border-none resize-none outline-none w-full py-2 px-4 rounded-2xl bg-zinc-800 text-white h-36"
				name="message"
				id="message"
				bind:value={message}
			/>
			<div>
				<input
					class="w-24 text-white bg-gradient-to-tr from-cyan-700 to-fuchsia-700 px-8 py-2 rounded-full cursor-pointer hover:from-cyan-600 hover:to-fuchsia-600"
					type="button"
					value="Send"
					on:click={sendEmail}
				/>
			</div>
		</div>
	{/if}
</div>
