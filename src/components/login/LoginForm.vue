<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <section>
          <b-message
            type="is-danger"
            has-icon
            size="is-small"
            v-if="alert"
            class="alert-login"
          >
            Usuario o contraseña incorrecta
          </b-message>
        </section>
        <section class="section">
          <b-field label="Nombre de Usuario:">
            <b-input
              v-model="username"
              icon="account"
              placeholder="Username"
            ></b-input>
          </b-field>
          <b-field label="Contraseña:">
            <b-input
              v-model="password"
              type="password"
              password-reveal
              icon="lock"
              placeholder="Password"
            ></b-input>
          </b-field>
          <section class="section">
            <b-button
              type="is-primary"
              expanded
              :icon-left="icon"
              v-on:click="submitLogin"
            >
              <Spinner size=30 v-if="loading" />
              <p v-else>
                Login
              </p>
            </b-button>
          </section>
        </section>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BACKEND_URL } from "@/helpers.js";
import Spinner from "vue-simple-spinner";

export default {
  components: {
    Spinner,
  },
  name: "LoginForm.vue",
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      alert: false,
      icon: "login"
    };
  },
  methods: {
    async submitLogin() {
      this.loading = true;
      this.icon = '';
      var scoped = this;
      await axios({
        method: "post",
        url: BACKEND_URL + "/log-in",
        data: {
          username: this.username,
          password: this.password,
        },
        withCredentials: true,
        headers: { crossDomain: true, "Content-Type": "application/json" },
      })
        .then(function(response) {
          console.log(response);
          scoped.loading = false;
          scoped.alert = false;
          scoped.$router.push({path: '/orders'})
        })
        .catch(function(error) {
          console.log(error);
          scoped.alert = true;
          scoped.loading = false;
          this.icon = "login";
        });
    },
  },
};
</script>

<style scoped>
.alert-login {
  margin-top: 5%;
}
.columns {
  margin: 0;
}
body{
  background: #502430;
}
</style>
