<script lang="ts">
	import Blox from '$lib/Blox.svelte';
  import logo from '$lib/fawl.png';
</script>

<div class="header">
  <img src={logo} alt='from africa with love logo' width='100px' />
  <br/>
  we build open source infrastructure &amp; services
  <br/><br/>
  <p><a href="https://explain.fromafri.ca">read about <strong>our plans</strong></a>, or explore the periodic table of projects below</p>
  <br/>
</div>
<div class="wrapper">
  <Blox type="vertical" tag="105" name="Re" footer="rex.rs" colour="#fbae39" />
  <Blox type="small" tag="216" name="Lh" footer="linkha.sh" colour="#7d52ea" />
  <Blox type="small" tag="117" name="Gi" footer="gild.sh" colour="#62b522" />
  <Blox type="hero" tag="201" name="Ch" footer="chinook.app" colour="#3880a1" />
  <Blox type="small" tag="203" name="Ln" footer="loonie.app" colour="#fd4c55" />
</div>


<style>
  .header {
    text-align: center;
    margin: 0 auto;
    width: 98%;
  }

  .header img {
    margin: 0 auto;
    display: block;
  }

  .header p {
    font-size: 0.8rem;
  }

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