<script lang="ts">
	import Blox from '$lib/Blox.svelte';
	import BloxVert from '$lib/BloxVert.svelte';
	import BloxHero from '$lib/BloxHero.svelte';
</script>

<style>
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
</style>

<div class="wrapper">
  <a href="https://aksum.dev"><Blox tag="117" name="Ak" footer="aksum.dev" colour="#bfa762" /></a>
  <a href="https://fawl.dev"><BloxVert tag="205" name="Fd" footer="fawl.dev" colour="#d1864b" /></a>
  <a href="https://koco.dev"><Blox tag="109" name="Ko" footer="koco.dev" colour="#00a76d" /></a>
  <a href="https://fawl.app"><BloxHero tag="201" name="Fa" footer="fawl.app" colour="#e93a62" /></a>
  <a href="https://loonie.app"><Blox tag="203" name="Ln" footer="loonie.app" colour="#fd4c55" /></a>
  <a href="https://rex.rs"><Blox tag="105" name="Re" footer="rex.rs" colour="#fbae39" /></a>
  <a href="https://linkha.sh"><Blox tag="216" name="Lh" footer="linkha.sh" colour="#7d52ea" /></a>
  <a href="https://harar.io"><Blox tag="101" name="Hr" footer="harar.io" colour="#3986FB" /></a>
</div>