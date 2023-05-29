<script lang="ts">
	import Blox from '$lib/Blox.svelte';
  import logo from '$lib/fawl.png';
</script>

<div class="header">
  <img src={logo} alt='from africa with love logo' width='80px' />
  <br/>
  infrastructure for building communities
  <br/><br/>
  <p><a href="https://explain.fromafri.ca">read <strong>our plans</strong></a>, or explore the periodic table of projects:</p>
  <br/>
</div>
<div class="wrapper">
  <Blox type="vertical" tag="105" name="Re" footer="rex.rs" colour="#F78200" />
  <Blox type="small" tag="117" name="Gi" footer="gild.sh" colour="#5EBD3E" />
  <Blox type="hero" tag="201" name="Ch" footer="chinook.app" colour="#009CDF" />
  <Blox type="vertical" tag="201" name="Ko" footer="koco.app" colour="#EF517F" />
</div>


<style>
  .header {
    text-align: center;
    margin: 0 auto;
    width: 98%;
    font-size: 18px;
  }

  .header img {
    margin: 0 auto;
    display: block;
  }

  .header p {
    font-size: 14px;
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