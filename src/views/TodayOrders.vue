<template>
    <div>
        <Navbar />
        <b-field label="Seleccionar Fecha">
            <b-datepicker
                v-model="selected"
                :show-week-number=true
                placeholder="Click to select..."
                icon="calendar-today"
                @change="reset"
                trap-focus>
            </b-datepicker>
        </b-field>
        <Spinner size="30" v-if="loading" />
        <Today v-else :data="orders" :key="smoll" @success="smoll++" />
        <pre>{{selected}}</pre>
    </div>
</template>

<script>
import Navbar from "@/components/utils/Navbar.vue";
import Today from "@/components/orders/Today.vue";
import Spinner from "vue-simple-spinner";
import axios from "axios";
import { BACKEND_URL } from "@/helpers.js";
import dayjs from "dayjs";

export default {
    name: "TodayOrders",
    components: {
        Navbar,
        Today,
        Spinner,
    },
    data() {
        return {
            loading: true,
            orders: [],
            smoll: 0,
            selected: new Date(),
        };
    },
    async mounted() {
        this.loading = true;
        var scoped = this;
        var now = dayjs(this.selected);
        var hoy = now.format("YYYY-MM-DD");
        var manana = now.add(1, "day").format("YYYY-MM-DD");
        await axios({
            method: "get",
            url: BACKEND_URL + "/order/by-date",
            params: {
                today: hoy,
                tomorrow: manana,
            },
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
                console.log(now.format("YYYY-MM-DD"));
                console.log(now.add(1, "day").format("YYYY-MM-DD"));
            });
    },
    watch: {
        smoll: async function(val) {
            console.log(val);
            var scoped = this;
            var now = dayjs();
            var hoy = now.format("YYYY-MM-DD");
            var manana = now.add(1, "day").format("YYYY-MM-DD");
            await axios({
                method: "get",
                url: BACKEND_URL + "/order/by-date",
                params: {
                    today: hoy,
                    tomorrow: manana,
                },
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
                    console.log(now.format("YYYY-MM-DD"));
                    console.log(now.add(1, "day").format("YYYY-MM-DD"));
                });
        },
    },
    methods:{
        reset(){
            
        },
    },
};
</script>
