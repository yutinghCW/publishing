<template>
  <a :href="announcement.url" class="announcement">
    <span class="container">
      <span>{{ announcement.title }}</span>
      <span class="text-decoration">{{ announcement.button_text }}</span>
    </span>
  </a>
</template>

<script>
  export default {
    data() {
      return {
        announcement: {
          "id": 1,
          "title": "配合政府防疫政策，原訂07/18舉行之讀書會，將改為線上舉行。",
          "button_text": "暸解更多>>",
          "url": "https://books.cw.com.tw/",
          "target": 1
        }
      }
    },
  };
</script>
