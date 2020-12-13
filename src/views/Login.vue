<template>
  <div>
    <figure class="img is-square" style="text-align:center; padding-top: 10%">
        <img src="@/assets/cinnamon-roll.svg"  width="200" height="200" alt="Logo">
    </figure>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>
