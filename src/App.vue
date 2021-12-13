<template>
  <div id="nav" class="nav-bar">
    <router-link to="/">Home</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/hobbies">Hobbies</router-link> |
    <router-link to="/contact">Contact Me</router-link> |
    <router-link to="/photo-gallery">Photo Gallery</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.2rem;
  line-height: 1.5;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-bar {
  background: #c7e8ed;
  margin: 0 auto;
  display: block;
}
.header-wrap {
  width: 25em;
  margin: 0 auto;
  padding: 60px 0;
}
header {
  background: #2f3061;
  color: #f7fff7;
}
h1,
h2 {
  font-family: "Caveat", cursive;
  text-align: center;
}
h3 {
  padding: 1rem;
  margin: 0.5rem 0.5rem -2rem;
  text-align: left;
}
picture {
  display: inline-block;
  margin-top: 2rem;
}
.footer-section {
  background: #e2e8e9;
  margin-top: -1rem;
}
</style>
