<script lang="ts">
  import { writable } from 'svelte/store';
  import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import MenuIcon from '$lib/MenuIcon.svelte';

  // Create a store and update it when necessary...
  let visible = writable(false);
</script>

<style>
.drawerMenu {
  position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    z-index: 4;
    overflow: hidden;
}
</style>

<div class="navbar w-full bg-slate-400">
  <div class="flex-1">
    <div class="leading-[48px] float-left">
      <img alt="" src="favicon-128.png" class="md:w-6 md:mr-2 inline w-8 mx-2" />
      <img alt="" src="logo-b.svg" class="hidden md:inline md:w-44" />
    </div>
  </div>
  <div class="flex-none justify-end">
    <!-- hides above sm breakpoint -->
    <div class="inline md:hidden h-full z-50" on:click={() => $visible = !$visible } on:keypress={() => $visible = !$visible }>
      <MenuIcon />
    </div>

    <!-- md breakpoint and up-->
    <ul class="hidden md:flex menu menu-horizontal px-1">
      <li>
        <a href="/">
          Bots
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-1 shadow-sm bg-zinc-50 border-slate-100">
          <li class="bg-white"><a href="/andromida">Andromida</a></li>
          <li class="bg-white"><a href="/koco">Koco</a></li>
        </ul>
      </li>
      <li>
        <a href="/">
          Apps
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-1 shadow-sm bg-zinc-50 border-slate-100">
          <li class="bg-white"><a href="/loonieapp">loonie.app</a></li>
          <li class="bg-white"><a href="/fawldev">fawl.dev</a></li>
        </ul>
      </li>
      <li><a href="/tools">Tools</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/donate">Donate</a></li>
    </ul>
  </div>
</div>

{#if $visible}
<div class="drawerMenu bg-slate-500 h-screen w-screen" transition:slide="{{delay: 150, duration: 450, easing: quintOut}}">
test
</div>
{/if}

