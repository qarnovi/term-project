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
    <section class="message-section">
      <form name="contact_me">
        <fieldset>
          <legend>Your name</legend>
          <input
            type="text"
            v-model="from_name"
            name="from_name"
            placeholder="enter your name"
          />
        </fieldset>
        <fieldset>
          <legend>Your email</legend>
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="enter your email"
          />
        </fieldset>
        <fieldset>
          <legend>Please enter your message:</legend>
          <p>
            <textarea
              contenteditable
              name="message"
              id="message"
              cols="64"
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
            value="Send"
            :disabled="isDisabled"
            @click="sendMessange"
          />
        </p>
      </form>
      <br />
    </section>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      message: "",
      from_name: "",
      email: "",
    };
  },
  methods: {
    //sends the message to my email address via emailjs
    sendMessange() {
      emailjs.init("user_tYw5xIumUYe7TwuclFtuL");
      try {
        emailjs.send(
          "service_a7boqfk",
          "template_ob68rbn",
          {
            from_name: this.from_name,
            email: this.email,
            message: this.message,
          },
          "user_tYw5xIumUYe7TwuclFtuL"
        );
      } catch (error) {
        console.log({ error });
      }
      this.from_name = "";
      this.email = "";
      this.message = "";
      alert("Message sent!");
    },
  },
  computed: {
    isDisabled() {
      return this.message == "";
    },
  },
};
</script>
<style scoped>
h3 {
  text-align: center;
}
form {
  background-color: whitesmoke;
  margin: 1rem 20rem;
  padding: 2rem 3rem;
  align-self: center;
  font-size: large;
}

.message-section {
  background: #c7e8ed;
  margin: auto;
}
fieldset {
  margin: 1rem;
}
.input-button {
  background: rgb(69, 136, 230);
  color: rgb(252, 250, 250);
  font-size: large;
}

</style>
