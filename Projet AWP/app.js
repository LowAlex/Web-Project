const app = Vue.createApp({
  data() {
    return {
      items: [],
      currentIndex: 0,
      showTitle: true
    };
  },
  async mounted() {
    const response = await fetch('http://127.0.0.1:8000/api/planets/');
    const data = await response.json();
    this.items = data.map(p => ({
      title: p.title,
      desc: p.desc,
      img: 'http://127.0.0.1:8000/media/' + p.img
    }));
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

  