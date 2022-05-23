<template>
  <header>
    <div class="container pt-md-40 pb-md-15 py-10 px-md-30 ps-10">
      <button type="button" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 class="sr-only">天下雜誌出版</h1>
      <NuxtLink to="/" class="brand">
        <img src="/images/logo.svg" height="50" alt="天下雜誌出版 Logo">
      </NuxtLink>
      <div class="collapse-nav ms-auto">
        <ul class="keywords">
          <li><a href="#!">大師帶你讀</a></li>
          <li><a href="#!">如何避開地雷股</a></li>
          <li><a href="#!">行銷5.0</a></li>
        </ul>
        <form class="search-group">
          <input type="text" class="px-15 py-md-10 py-15" placeholder="請輸入關鍵字">
          <button type="submit" class="px-15 py-md-10 py-15">
            <i class="icon icon-search"></i>
          </button>
        </form>
      </div>
      <button type="submit" class="open-search px-10 ms-auto">
        <i class="icon icon-search"></i>
      </button>
    </div>
  </header>
</template>
