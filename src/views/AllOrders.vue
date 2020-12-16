<template>
    <div>
        <Navbar />
        <Spinner size="30" v-if="loading" />
        <Today v-else :data="orders" :key="smoll" @success="smoll++" />
    </div>
</template>

<script>
import Navbar from "@/components/utils/Navbar.vue"
import Spinner from "vue-simple-spinner";
import axios from "axios";
import Today from "@/components/orders/Today.vue"
import { BACKEND_URL } from "@/helpers.js";

export default {
    name: 'AllOrders',
    components: {
        Navbar,
        Spinner,
        Today
    },
    data() {
        return {
            loading: true,
            orders: [],
            smoll: 0,
        };
    },
    async mounted() {
        this.loading = true;
        var scoped = this;
        await axios({
            method: "get",
            url: BACKEND_URL + "/order",
            withCredentials: true,
            headers: { crossDomain: true, "Content-Type": "application/json" },
        })
            .then(function(response) {
                console.log(response);
                scoped.loading = false;
                scoped.orders = response.data;
            })
            .catch(function(error) {
                console.log(error);
                scoped.loading = false;
            });
    },
    watch: {
        smoll: async function(val) {
            console.log(val);
            var scoped = this;
            await axios({
                method: "get",
                url: BACKEND_URL + "/order",
                withCredentials: true,
                headers: {
                    crossDomain: true,
                    "Content-Type": "application/json",
                },
            })
                .then(function(response) {
                    console.log(response);
                    scoped.loading = false;
                    scoped.orders = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                    scoped.loading = false;
                });
        },
    },
}
</script>