<script lang="ts">
	 export let type: string | null;
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
			border-radius: 1px;
		}
		.item:nth-child(even) {
			background: #ececec;
		}
		.hero {
			grid-column: span 2;
			grid-row: span 2;
		}
		.vert {
			grid-column: span 1;
			grid-row: span 2;
		}
	}
	@media only screen and (min-width: 481px) {
		.item {
			position: relative;
			color: white;
			background: #f9f9f9;
			padding: 0px;
			border-radius: 1px;
		}
		.item:nth-child(even) {
			background: #ececec;
		}
		.hero {
			grid-column: span 2;
			grid-row: span 2;
		}
		.vert {
			grid-column: span 1;
			grid-row: span 2;
		}
	}
	@media only screen and (min-width: 630px) {
		.item {
			position: relative;
			color: white;
			padding: 0px;
			scale: 1.0;
			text-align: center;
			border-radius: 1px;
  			transition-duration: 0.2s;
		}
		.item .name {
			text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
		}
		.item:hover {
			cursor: pointer;
			scale: 0.99;
  			transition-duration: 0.2s;
		}
		.item:hover .tag {
			padding-top: 8px;
			padding-left: 11px;
  			transition-duration: 0.3s;
		}
		.item:hover .footer {
			padding-bottom: 24px;
			padding-right: 13px;
  			transition-duration: 0.3s;
		}
		.hero {
			grid-column: span 2;
			grid-row: span 2;
		}
		.vert {
			grid-column: span 1;
			grid-row: span 2;
		}
	}

	.tag {
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

	.name {
		display: flex;
		height: calc(100% - 3rem);
		font-family: 'Teko', sans-serif;
		align-items: center;
		justify-content: center;
	}

	.footer {
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		text-align: right;
		color: #fdfdfd;
		text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
		font-size: 0.7rem;
		height: 1.5rem;
		padding-bottom: 15px;
		padding-right: 10px;
		opacity: 0.90;
	}
</style>


{#if type === 'small'}
	<div class="item" style="background: {colour}">
		{#if tag && name && footer}
			<div class="tag">{tag}</div>
			<div class="name" style="font-size: 38px;">{name}</div>
			<div class="footer"><a href="https://{footer}">{footer}</a></div>
		{/if}
	</div>
{/if}

{#if type === 'vertical'}
	<div class="item vert" style="background: {colour}">
		{#if tag && name && footer}
			<div class="tag">{tag}</div>
			<div class="name" style="font-size: 52px;">{name}</div>
			<div class="footer"><a href="https://{footer}">{footer}</a></div>
		{/if}
	</div>
{/if}

{#if type === 'hero'}
	<div class="item hero" style="background: {colour}">
		{#if tag && name && footer}
			<div class="tag">{tag}</div>
			<div class="name" style="font-size: 96px;">{name}</div>
			<div class="footer"><a href="https://{footer}">{footer}</a></div>
		{/if}
	</div>
{/if}