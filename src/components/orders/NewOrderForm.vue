<template>
    <div>
        Hola
    </div>
</template>

<script>
import axios from "axios";
import { BACKEND_URL } from "@/helpers.js";

export default {
    name: "NewOrderForm",
    data() {
        return {
            products: []
        };
    },
    async mounted() {
        this.loading = true;
        var scoped = this;
        await axios({
            method: "get",
            url: BACKEND_URL + "/product",
            withCredentials: true,
            headers: { crossDomain: true, "Content-Type": "application/json" },
        })
            .then(function(response) {
                console.log(response);
                scoped.loading = false;
                scoped.products = response.data;
            })
            .catch(function(error) {
                console.log(error);
                scoped.loading = false;
            });
    },
};
</script>
