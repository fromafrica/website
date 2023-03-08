<script lang="ts">

</script>

<style>
   @media only screen and (max-width: 480px) {
        .wrapper {
          width: 98%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 150px;
          grid-gap: 5px;
          grid-auto-flow: dense;
        }
        .item {
          color: white;
          padding: 0px;
          border-radius: 4px;
        }
        .item:nth-child(even) {
          /* background: #ececec; */
        }
        .hero {
          grid-column: span 2;
          grid-row: span 2;
        }
        .interesting {
          grid-column: span 2;
          grid-row: span 1;
        }
        .vert {
          grid-column: span 1;
          grid-row: span 2;
        }
      }
      @media only screen and (min-width: 481px) {
        .wrapper {
          width: 98%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat( auto-fit, minmax(200px, 3fr) );
          grid-auto-rows: 150px;
          grid-gap: 5px;
          grid-auto-flow: dense;
        }
        .item {
          color: white;
          padding: 0px;
          border-radius: 4px;
        }
        .item:nth-child(even) {
          /* background: #ececec; */
        }
        .hero {
          grid-column: span 2;
          grid-row: span 2;
        }
        .interesting {
          grid-column: span 2;
          grid-row: span 1;
        }
        .vert {
          grid-column: span 1;
          grid-row: span 2;
        }
      }
      @media only screen and (min-width: 630px) {
        .wrapper {
          width: 98%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat( auto-fit, minmax(200px, 3fr) );
          grid-auto-rows: 150px;
          grid-gap: 5px;
          grid-auto-flow: dense;
        }
        .item {
          color: white;
          padding: 0px;
          text-align: center;
          border-radius: 4px;
        }
        .item:nth-child(even) {
          /* background: #ececec; */
        }
        .item:hover {
          cursor: pointer;
        }
        .hero {
          grid-column: span 2;
          grid-row: span 2;
        }
        .interesting {
          grid-column: span 2;
          grid-row: span 1;
        }
        .vert {
          grid-column: span 1;
          grid-row: span 2;
        }
      }
</style>

<div class="wrapper">
    <div class="item"><img src="card-fa.svg" alt="" style="height: 90%; margin: auto; text-align: center; object-fit: cover; overflow: hidden; pointer-events: none; border-radius: 4px;"></div>
    <div class="item"><img src="card-re.svg" alt="" style="height: 100%; margin: auto; object-fit: cover; overflow: hidden; pointer-events: none; border-radius: 4px;"></div>
    <div class="item vert"><img src="card-fd.svg" alt="" style="height: 90%; margin: auto; object-fit: cover; overflow: hidden; pointer-events: none; border-radius: 4px;"></div>
    <div class="item"><img src="card-hr.svg" alt="" style="height: 100%; margin: auto; object-fit: cover; overflow: hidden; pointer-events: none; border-radius: 4px;"></div>
    <div class="item"><img src="card-ko.svg" alt="" style="height: 100%; margin: auto; object-fit: cover; overflow: hidden; pointer-events: none; border-radius: 4px;"></div>
    <div class="item"><img src="card-ln.svg" alt="" style="height: 100%; margin: auto; object-fit: cover; overflow: hidden; pointer-events: none; border-radius: 4px;"></div>
    <!-- <div class="item hero bg-stone-900"><img src="love.jpeg" alt="" style="height: 100%; margin: auto; object-fit: cover; overflow: hidden; pointer-events: none; border-radius: 4px;"></div> -->
    <div class="item"><img src="card-re.svg" alt="" style="height: 100%; margin: auto; object-fit: cover; overflow: hidden; pointer-events: none; border-radius: 4px;"></div>
</div>