<template>
  <nav v-if="category" class="breadcrumb" aria-label="breadcrumb">
    <ol>
      <li>
        <NuxtLink :to="`/${category.link}`" class="btn btn-text btn-decoration">
          {{ category.name }}
        </NuxtLink>
      </li>
      <li v-if="emitCategory === 'author'" v-show="emitBreadcrumb">
        <NuxtLink :to="{path: `/${category.link}`, hash: `#${breadcrumb.hash}`}" class="btn btn-text btn-decoration">
          {{ breadcrumb.title }}
        </NuxtLink>
      </li>
      <li v-else-if="(emitCategory === 'books' || emitCategory === 'articles') && emitBreadcrumb === '所有主題'">
        <NuxtLink :to="`/${category.link}`" class="btn btn-text btn-decoration">
          所有主題
        </NuxtLink>
      </li>
      <li v-else-if="!(emitCategory === 'books' || emitCategory === 'articles')">
        <NuxtLink :to="`/${category.link}/${emitBreadcrumb.id}`" class="btn btn-text btn-decoration">
          {{ emitBreadcrumb.title }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        category: {
          link: '',
          name: ''
        },
        channel: {
          id: '',
          link: '',
          name: ''
        },
        breadcrumb: {
          hash: '',
          title: '',
        },
      }
    },
    props: ['emit-breadcrumb', 'emit-category'],
    mounted () {
      switch (this.emitCategory) {
        case 'books':
          this.category = {
            link: 'books',
            name: '書籍'
          };
          break;
        case 'article':
          this.category = {
            link: 'articles',
            name: '書摘'
          };
          break;
        case 'articles':
          this.category = {
            link: 'articles',
            name: '閱讀'
          };
          break;
        case 'author':
          this.category = {
            link: 'authors',
            name: '作者'
          };
          switch (this.emitBreadcrumb) {
            case 1:
              this.breadcrumb = {
                hash: 'chinese',
                title: '華文作者',
              }
              break;
            case 2:
              this.breadcrumb = {
                hash: 'foreign',
                title: '外文作者',
              }
              break;
            default:
              this.breadcrumb = {
                hash: '',
                title: '',
              }
              break;
          }
          break;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .breadcrumb {
    @include media-breakpoint-up(md) {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    @include media-breakpoint-down(md) {
      margin-top: 20px;
      margin-bottom: 15px;
    }
    ol {
      @include list(0, 0, none);
      display: flex;
      align-items: center;
      li {
        display: flex;
        align-items: center;
        color: $gray-300;
        @include media-breakpoint-up(md) {
          font-size: $h5;
        }
        @include media-breakpoint-down(md) {
          font-size: $h6;
        }
        &::after {
          @include beforeafter('>', block);
          width: 1rem;
          text-align: center;
        }
        a {
          color: $gray-300;
          &:hover {
            color: $gray-400;
          }
        }
      }
    }
  }
</style>