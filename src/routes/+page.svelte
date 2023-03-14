<script lang="ts">
	import Blox from '$lib/Blox.svelte';
	import BloxVert from '$lib/BloxVert.svelte';
	import BloxHero from '$lib/BloxHero.svelte';
	import MenuIcon from '$lib/MenuIcon.svelte';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap');

  @media only screen and (max-width: 480px) {
    .wrapper {
      width: 98%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 150px;
      grid-gap: 4px;
      grid-auto-flow: dense;
    }
  }
  @media only screen and (min-width: 481px) {
    .wrapper {
      width: 98%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(200px, 3fr) );
      grid-auto-rows: 150px;
      grid-gap: 4px;
      grid-auto-flow: dense;
    }
  }
  @media only screen and (min-width: 630px) {
    .wrapper {
      width: 98%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(200px, 3fr) );
      grid-auto-rows: 150px;
      grid-gap: 4px;
      grid-auto-flow: dense;
    }
  }

  a {
    display: contents;
  }

  .menu {
    font-family: 'Lovers Quarrel', cursive;
  }
</style>

<div class="menu w-90 h-12 mx-4 mb-1">
  <div class="w-1/3 leading-[48px] float-left">
    <img alt="" src="favicon-128.png" class="md:w-6 md:mr-2 inline w-8 mx-2" />
    <img alt="" src="logo-b.svg" class="hidden md:inline md:w-44" />
  </div>

  <div class="relative w-1/3 h-full leading-[48px] text-right pr-5 float-right">
    <!-- hides above sm breakpoint -->
    <div class="inline md:hidden h-full">
      <MenuIcon />
      
    </div>

    <!-- md breakpoint and up-->
    <div class="hidden md:inline">
      <a href="/about">about</a>
      <a href="/products">products</a>
      <a href="/tools">tools</a>
      <a href="/ideas">ideas</a>
    </div>
  </div>
</div>

<div class="wrapper">
  <a href="/aksum"><Blox tag="117" name="Ak" footer="aksum" colour="#bfa762" /></a>
  <a href="/developers"><BloxVert tag="205" name="Fd" footer="dev" colour="#d1864b" /></a>
  <a href="/koco"><Blox tag="109" name="Ko" footer="koco" colour="#00a76d" /></a>
  <a href="/app"><BloxHero tag="201" name="Fa" footer="app" colour="#e93a62" /></a>
  <a href="/loonieapp"><Blox tag="203" name="Ln" footer="loonieapp" colour="#fd4c55" /></a>
  <a href="/rex"><Blox tag="105" name="Re" footer="rex" colour="#fbae39" /></a>
  <a href="/linkhash"><Blox tag="216" name="Lh" footer="linkhash" colour="#7d52ea" /></a>
  <a href="/harar"><Blox tag="101" name="Hr" footer="harar" colour="#3986FB" /></a>
</div>