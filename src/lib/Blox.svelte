<script lang="ts">
	 export let tag: string | null;
	 export let name: string | null;
	 export let footer: string | null;
	 export let colour: string | null;
</script>

<style>
	@media only screen and (max-width: 480px) {
		.item {
			position: relative;
			color: white;
			background: #f9f9f9;
			padding: 0px;
			opacity: 0.9;
			text-align: center;
			border-radius: 1px;
  			transition-duration: 0.2s;
		}
	}
	@media only screen and (min-width: 481px) {
		.item {
			position: relative;
			color: white;
			background: #f9f9f9;
			padding: 0px;
			opacity: 0.9;
			text-align: center;
			border-radius: 1px;
  			transition-duration: 0.2s;
		}
	}
	@media only screen and (min-width: 630px) {
		.item {
			position: relative;
			color: white;
			padding: 0px;
			opacity: 0.9;
			text-align: center;
			border-radius: 1px;
  			transition-duration: 0.2s;
		}
	}

	.item:nth-child(even) {
		background: #ececec;
	}

	.item:hover {
		cursor: pointer;
		opacity: 1.0;
		transition-duration: 0.2s;
	}

	.item .tag {
		display: block;
		width: 100%;
		text-align: left;
		color: #ffffff;
		text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
		font-size: 0.8rem;
		height: 1.5rem;
		padding-top: 5px;
		padding-left: 8px;
		opacity: 0.75;
	}

	.item .name {
		display: flex;
		height: calc(100% - 3rem);
		font-family: 'Teko', sans-serif;
		align-items: center;
		justify-content: center;
		text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
	}

	.item .footer {
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		text-align: right;
		color: #fdfdfd;
		text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
		font-size: 0.8rem;
		height: 1.5rem;
		padding-bottom: 15px;
		padding-right: 10px;
		opacity: 0.90;
	}
</style>

<div class="item" style="background: {colour}">
	{#if tag && name && footer}
		<div class="tag">{tag}</div>
		<div class="name" style="font-size: 38px;">{name}</div>
		<div class="footer"><a href="https://{footer}">{footer}</a></div>
	{/if}
</div>