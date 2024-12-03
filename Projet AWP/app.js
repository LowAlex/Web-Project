import { items } from './data/data.js';

const app = Vue.createApp({
  data() {
    return {
      items: items,
      currentIndex: 0,
      showTitle: true
    };
  },
  computed: {
    currentItem() {
      return this.items[this.currentIndex];
    }
  },
  methods: {
    toggleView() {
      this.showTitle = !this.showTitle;
    },
    nextItem() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevItem() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }
});

app.mount("#app");

  