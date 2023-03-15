<script lang="ts">
  import { fly } from 'svelte/transition';
	import MenuIcon from '$lib/MenuIcon.svelte';

  let visible = false;

  function toggle() {
    visible = !visible;
  }
</script>

<style>
.drawerMenu {
  position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: grid;
    color: #fff;
    z-index: 4;
}
</style>

<div class="navbar w-full bg-white p-2">
  <div class="flex-1">
    <div class="leading-[48px] float-left">
      <img alt="" src="favicon-128.png" class="md:w-6 md:mr-2 inline w-8 mx-2" />
      <img alt="" src="logo-b.svg" class="hidden md:inline md:w-44" />
    </div>
  </div>
  <div class="flex-none">
    <!-- hides above sm breakpoint -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="inline md:hidden h-full z-50" on:click={toggle}>
      <MenuIcon />
    </div>

    <!-- md breakpoint and up-->
    <ul class="hidden md:flex menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <a>
          Parent
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-1 shadow-sm bg-zinc-50 border-slate-100">
          <li class="bg-white"><a>Submenu 1</a></li>
          <li class="bg-white"><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</div>

{#if visible}
<div class="drawer drawerMenu bg-zinc-400" in:fly="{{ x: 400, duration: 250 }}" out:fly="{{ x: 800, duration: 250 }}">
test
</div>
{/if}