<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/orders' }">
        <img
          src="@assets/logo-of.png"
          alt="Nicoleta's logo"
        />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
