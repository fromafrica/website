<script lang="ts">
  import { writable } from 'svelte/store';
  import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import MenuIcon from '$lib/MenuIcon.svelte';
  import MobileMenu from '$lib/MobileMenu.svelte';

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
      padding-top: 80px;
      text-align: center;
    }
  </style>

<div class="navbar w-full bg-gray-800 ">
  <div class="flex-1">
    <div class="leading-[48px] float-left z-50">
      <img alt="" src="favicon-128.png" class="md:w-8 md:mr-3 inline w-8 ml-2" />
    </div>
  </div>
  <div class="flex-none justify-end">
    <!-- hides above sm breakpoint -->
    <div class="inline md:hidden h-full z-50" on:click={() => $visible = !$visible } on:keypress={() => $visible = !$visible }>
      <MenuIcon />
    </div>

    <!-- md breakpoint and up-->
    <ul class="hidden md:flex text-gray-100 menu menu-horizontal px-1">
      <li><a href="/platform">Platform</a></li>
      <li><a href="/andromida">Andromida</a></li>
      <li><a href="/payments">Payments</a></li>
      <li>
        <a href="/">
          Community
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-1 shadow-sm bg-slate-700 border-slate-100">
          <li class="bg-slate-600"><a href="/discord">Discord</a></li>
          <li class="bg-slate-600"><a href="/github">Github</a></li>
          <li class="bg-slate-600"><a href="/twitter">Twitter</a></li>
          <li class="bg-slate-600"><a href="/instagram">Instagram</a></li>
          <li class="bg-slate-600"><a href="/blog">Blog</a></li>
          <li class="bg-slate-600"><a href="/tutorials">Tutorials</a></li>
        </ul>
      </li>
      <li><a href="/donate">Donate</a></li>
    </ul>
  </div>
</div>

{#if $visible}
<div class="drawerMenu bg-gray-800 h-screen w-screen" transition:slide="{{delay: 150, duration: 450, easing: quintOut}}">
  <MobileMenu />
</div>
{/if}

<div class="wrapper">
  <Blox type="vertical" tag="105" name="Re" footer="rex.rs" colour="#fbae39" />
  <Blox type="small" tag="216" name="Lh" footer="linkha.sh" colour="#7d52ea" />
  <Blox type="hero" tag="201" name="Ch" footer="chinook.app" colour="#3880a1" />
  <Blox type="small" tag="203" name="Ln" footer="loonie.app" colour="#fd4c55" />
</div>
