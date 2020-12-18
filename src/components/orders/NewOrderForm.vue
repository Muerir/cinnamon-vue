<template>
    <div class="container">
        <section class="section">
            <h1 class="title is-3">Nueva Venta:</h1>

            <div v-for="(product, index) in products" v-bind:key="index">
                <div class="columns">
                    <div class="column">
                        <b>{{ product.product }}</b>
                        <!-- <input
                            type="checkbox"
                            :value="product.product"
                            @click="getVal(product.id)"
                        />
                        <b>{{ product.product }}</b> -->
                    </div>
                    <div class="column">
                        <div>
                            <number-input
                                :min="0"
                                :max="1000"
                                inline
                                controls
                                value="0"
                                v-model="ord[index]"
                                @click.once="getVal(product.id, product.price)"
                            ></number-input>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <b-field label="Efectivo">
                    <b-input type="number" v-model.number="cash"></b-input>
                </b-field>
            </div>
            <div class="columns">
                <div class="column">
                    <button
                        class="button is-primary"
                        v-on:click="setVal(orde, ord)"
                    >
                        <Spinner size="30" v-if="loading" />
                        <p v-else>
                            Agregar Venta
                        </p>
                    </button>
                </div>
                <div class="column">
                    <button class="button is-primary" v-on:click="removeVal">
                        <Spinner size="30" v-if="loading" />
                        <p v-else>
                            Eliminar Venta
                        </p>
                    </button>
                </div>
                <div class="column">
                    <button class="button is-primary" v-on:click="createOrder">
                        <Spinner size="30" v-if="loading" />
                        <p v-else>
                            Registrar Venta
                        </p>
                    </button>
                    <b-message
                        type="is-success"
                        has-icon
                        size="is-small"
                        v-if="alert"
                        class="alert-login"
                    >
                        Venta Agregada con Éxito!
                    </b-message>
                </div>
            </div>

            <div v-if="value > 0">
                <b>Total: {{ value }} Bs.</b> <br />
                <b>Cambio: {{ cash - value }} Bs.</b>
            </div>

        </section>
    </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { BACKEND_URL } from "@/helpers.js";
import VueNumberInput from "@chenfengyuan/vue-number-input";

Vue.use(VueNumberInput);

export default {
    name: "NewOrderForm",

    data() {
        return {
            products: [],
            loading: false,
            ord: [],
            orde: [],
            order: [],
            prices: [],
            cash: 0,
            value: 0,
            id: 1,
            alert: false,
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
    methods: {
        async createOrder() {
            this.loading = true;
            var scoped = this;
            await axios({
                method: "post",
                url: BACKEND_URL + "/order",
                data: {
                    id: this.id,
                    cash: this.cash,
                    ord: this.order,
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
                    scoped.alert = true;
                    scoped.$emit("success");
                    scoped.$emit("close");
                })
                .catch(function(error) {
                    console.log(error);
                    scoped.loading = false;
                });
        },
        getVal(id, pr) {
            this.orde.push(id);
            this.prices.push(pr);
        },

        setVal(id, qty) {
            var aux = 0;
            id.sort();
            for (let i = 0; i < qty.length; i++) {
                if (qty[i] != null) {
                    this.order.push({ id_product: id[i], quantity: qty[i] });
                    this.value += qty[i] * this.prices[i];
                    if (aux != 0 && i==(qty.length-1)) {
                        for (let j = 0; j < aux; j++) {
                            id.pop();
                            this.prices.pop();
                        }
                        aux=0;
                    }
                } else {
                    id.push(id[i]);
                    this.prices.push(this.prices[i]);
                    aux++;
                }
            }
        },

        removeVal() {
            this.value = 0;
            this.order = [];
        },
    },
};
</script>
