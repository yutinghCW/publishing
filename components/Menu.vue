<template>
  <nav class="menu">
    <ul class="master">
      <li>
        <NuxtLink :to="{path: '/', hash: '#latest'}">最新動態</NuxtLink>
      </li>
      <li>
        <span>書籍</span>
        <button type="button" class="open-block">
          <i class="icon icon-arrow-down"></i>
        </button>
        <div class="block">
          <div class="container py-30">
            <div class="anchor">
              <NuxtLink :to="{path: '/', hash: '#latest'}" class="btn btn-outlined btn-primary">最新出版</NuxtLink>
            </div>
            <div class="recommend">
              <ul>
                <li>
                  <NuxtLink to="/books/id" class="btn btn-contained btn-white">財經管理</NuxtLink>
                </li>
              </ul>
              <div class="spec-button mt-md-auto mt-20">
                <NuxtLink to="/books" class="btn btn-text btn-black btn-decoration mx-auto">瀏覽所有主題</NuxtLink>
              </div>
            </div>
            <div class="banner">
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-1.jpg" alt="banner">
              </a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <span>作者</span>
        <button type="button" class="open-block">
          <i class="icon icon-arrow-down"></i>
        </button>
        <div class="block">
          <div class="container py-30">
            <div class="anchor">
              <NuxtLink :to="{path: '/authors', hash: '#chinese'}" class="btn btn-outlined btn-primary">華文作者</NuxtLink>
              <NuxtLink :to="{path: '/authors', hash: '#foreign'}" class="btn btn-outlined btn-primary">外文作者</NuxtLink>
            </div>
            <div class="recommend">
              <ul>
                <li>
                  <NuxtLink to="/author/id" class="btn btn-contained btn-white">賽門・西奈克</NuxtLink>
                </li>
              </ul>
              <div class="spec-button mt-md-auto mt-20">
                <NuxtLink to="/authors" class="btn btn-text btn-black btn-decoration mx-auto">瀏覽所有作者</NuxtLink>
              </div>
            </div>
            <div class="banner">
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-2.jpg" alt="banner">
              </a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <span>閱讀</span>
        <button type="button" class="open-block">
          <i class="icon icon-arrow-down"></i>
        </button>
        <div class="block">
          <div class="container py-30">
            <div class="anchor">
              <NuxtLink :to="{path: '/', hash: '#reading'}" class="btn btn-outlined btn-primary">精選閱讀</NuxtLink>
            </div>
            <div class="recommend">
              <ul>
                <li>
                  <NuxtLink to="/articles/id" class="btn btn-contained btn-white">經營管理</NuxtLink>
                </li>
              </ul>
              <div class="spec-button mt-md-auto mt-20">
                <NuxtLink to="/articles" class="btn btn-text btn-black btn-decoration mx-auto">瀏覽所有閱讀</NuxtLink>
              </div>
            </div>
            <div class="banner">
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-3.jpg" alt="banner">
              </a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <NuxtLink to="/about">關於我們</NuxtLink>
      </li>
      <li>
        <span>追蹤我們</span>
        <button type="button" class="open-block">
          <i class="icon icon-arrow-down"></i>
        </button>
        <div class="block">
          <div class="container py-30">
            <div class="anchor">
              <a class="btn btn-outlined btn-primary" href="https://www.cwbook.com.tw/member/mcntr/EditEprEdm!redirect.shtml">訂閱電子報</a>
              <a class="btn btn-outlined btn-primary" href="https://www.facebook.com/cwbookec/">加入讀者俱樂部</a>
              <a class="btn btn-outlined btn-primary" href="https://www.instagram.com/bookcw1/">追蹤 Instagram</a>
            </div>
            <div class="banner">
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-4.jpg" alt="banner">
              </a>
              <a href="#!">
                <img src="https://yutinghcw.github.io/publishing/assets/images/index/ad-5.jpg" alt="banner">
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>