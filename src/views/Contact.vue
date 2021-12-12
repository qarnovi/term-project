<template>
  <header>
    <div class="header-wrap">
      <h1>Contact Me</h1>
    </div>
  </header>
  <div class="nav-bar">
    <address class="email">
      <a href="mailto:surhon@bu.edu">Email me: surhon@bu.edu</a>
    </address>
    <h3>Call me: <a href="tel:617-899-9765">617-899-9765</a></h3>
    <br />
    <section class="phone-section">
      <form name="contact-me" action="" method="POST" @submit="submitMessange">
        <fieldset>
          <legend>Please enter your message:</legend>
          <p>
            <textarea
              name="message"
              id="message"
              cols="85"
              rows="15"
              v-model="message"
              placeholder="Enter your message here"
            ></textarea>
          </p>
        </fieldset>
        <p>
          <input
            class="input-button"
            type="submit"
            name="submitButton"
            value="Submit"
          />
        </p>
      </form>
      <br />
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
      submitMessange() {

      }
  }
};
</script>
<style scoped>
h3 {
  text-align: center;
}
form {
  background-color: whitesmoke;
  margin: 1rem 30rem;
  padding: 2rem 3rem;
  align-self: center;
  font-size: large;
}

.phone-section {
  background: #c7e8ed;
  margin: auto;
}
fieldset {
  margin: 1rem;
}
.input-button {
  background: rgb(69, 136, 230);
  color: rgb(252, 250, 250);
}
</style>
