<template>
    <b-navbar shadow>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/orders' }">
                <img src="@/assets/logo-of.png" alt="Nicoleta's logo" />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <router-link :to="{ path: '/orders/today' }">
                    Hoy
                </router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link :to="{ path: '/orders/all' }">
                    Historia
                </router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link :to="{ path: '/products' }">
                    Productos
                </router-link>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" v-on:click="logOutFunction">
                        Log Out
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import axios from "axios";
import { BACKEND_URL } from "@/helpers.js";

export default {
    name: "Navbar",
    methods: {
        async logOutFunction() {
            var scoped = this;
            await axios({
                method: "delete",
                url: BACKEND_URL + "/log-in",
                withCredentials: true,
                headers: {
                    crossDomain: true,
                    "Content-Type": "application/json",
                },
            })
                .then(function(response) {
                    console.log(response);
                    scoped.$router.push({ path: "/login" });
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
};
</script>
