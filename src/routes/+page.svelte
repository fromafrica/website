<script lang="ts">
	import Blox from '$lib/Blox.svelte';
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
</style>

<div class="wrapper">
    <Blox type="small" tag="117" name="Ak" footer="aksum.dev" colour="#bfa762" />
    <Blox type="vertical" tag="205" name="Fd" footer="fawl.dev" colour="#d1864b" />
    <Blox type="small" tag="209" name="Ko" footer="koco.dev" colour="#00a76d" />
    <Blox type="hero" tag="201" name="Fa" footer="fawl.app" colour="#e93a62" />
    <Blox type="small" tag="203" name="Ln" footer="loonie.app" colour="#fd4c55" />
    <Blox type="vertical" tag="105" name="Re" footer="rex.rs" colour="#fbae39" />
    <Blox type="small" tag="216" name="Lh" footer="linkha.sh" colour="#7d52ea" />
    <Blox type="small" tag="101" name="Hr" footer="harar.io" colour="#3986FB" />
</div>