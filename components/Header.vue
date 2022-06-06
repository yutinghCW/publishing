<template>
  <header>
    <div class="container px-md-30">
      <button type="button" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 class="sr-only">天下雜誌出版</h1>
      <NuxtLink to="/" class="brand">
        <img src="/images/logo.svg" height="50" alt="天下雜誌出版 Logo">
      </NuxtLink>
      <slot name="menu"></slot>
      <div class="collapse-nav">
        <ul class="keywords">
          <li><a href="#!">大師帶你讀</a></li>
          <li><a href="#!">如何避開地雷股</a></li>
          <li><a href="#!">行銷5.0</a></li>
        </ul>
        <slot name="search"></slot>
      </div>
      <button type="submit" class="open-search px-10 ms-auto">
        <i class="icon icon-search"></i>
      </button>
    </div>
  </header>
</template>
