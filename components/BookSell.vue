<template>
  <div class="online-block px-md-30">
    <ul>
      <li v-if="$is_not_empty_array(emitSales)">
        <div class="title">
          <span class="dot"></span>
          <span class="text">紙本書</span>
        </div>
        <ul>
          <li v-for="sales in emitSales" :key="sales.id">
            <a
              :href="sales.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-contained btn-dark"
            >
              {{ sales.channel_name }}
            </a>
          </li>
        </ul>
      </li>
      <li v-if="$is_not_empty_array(emitEbooks)">
        <div class="title">
          <span class="dot"></span>
          <span class="text">電子書</span>
        </div>
        <ul>
          <li v-for="sales in emitEbooks" :key="sales.id">
            <a
              :href="sales.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-contained btn-dark"
            >
              {{ sales.channel_name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ['emit-sales', 'emit-ebooks'],
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/sass/import";
  .online-block {
    margin-bottom: 50px;
    ul {
      @include list(0, 0, none);
      display: flex;
      flex-wrap: wrap;
      grid-gap: 20px;
    }
    > ul {
      flex-direction: column;
      > li {
        + li {
          margin-top: 10px;
        }
        > .title {
          display: flex;
          align-items: center;
          span {
            &.dot {
              width: 10px;
              height: 10px;
              margin-left: 15px;
              margin-right: 10px;
              border-radius: 50%;
              background-color: $orange-200;
            }
            &.txt {
              color: $gray-400;
            }
          }
        }
        > ul {
          margin-top: 10px;
        }
      }
    }
  }
</style>
