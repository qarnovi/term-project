<template>
  <div class="search-container">
    <div>
        <p>Search for photos from pixels.com (lions, cats, tigers etc.)</p>
      <input
        type="text"
        placeholder="Search for Photos"
        name="search"
        v-model="searchValue"
      />
      <button @click="loadPhotos(searchValue)">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
  <transition name="fade">
    <img class="card" alt="Photo!" :src="currentImgUrl" />
  </transition>
  <button @click="loadPreviousImage" :disabled="isPrevButtonDisabled">
    Prev
  </button>
  <button @click="loadNextImage" :disabled="isNextButtonDisabled">Next</button>
</template>
<script>
import { computed } from "vue";
export default {
  data() {
    return {
      appKey: "563492ad6f91700001000001aa730fbf161b455a8b704a146fb7be16",
      searchValue: "ocean",
      imageURLs: [],
      currentImgUrl: "",
      currentIndex: 0,
    };
  },
  computed: {
    isPrevButtonDisabled() {
      return this.currentIndex == 0;
    },
    isNextButtonDisabled() {
      return this.currentIndex == this.imageURLs.length - 1;
    },
  },
  methods: {
    loadPhotos: async function () {
      this.imageURLs = [];
      this.currentIndex = 0;
      await fetch(
        "https://api.pexels.com/v1/search?" +
          new URLSearchParams({
            query: this.searchValue,
            size: "medium",
            per_page: 50,
          }),
        {
          method: "GET",
          headers: {
            Authorization: this.appKey,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          for (const photo of data.photos) {
            this.imageURLs.push(photo.src.original);
          }
        });
      this.currentImgUrl = this.imageURLs[0];
    },
    loadNextImage() {
      this.currentIndex += 1;
      this.currentImgUrl = this.imageURLs[this.currentIndex];
    },
    loadPreviousImage() {
      this.currentIndex -= 1;
      this.currentImgUrl = this.imageURLs[this.currentIndex];
    },
  },
  created() {
    this.loadPhotos();
  },
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
.search-container {
  float: center;
}
input[type="text"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.search-container button {
  float: center;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
}
.card {
  grid-area: card;
  display: block;
  width: 100%;
  max-width: 400px;
  height: 500px;
  margin: auto;
  border-radius: 10px;
  border: 8px solid white;
  object-fit: cover;
  overflow: hidden;
  background-color: white;
}
</style>
