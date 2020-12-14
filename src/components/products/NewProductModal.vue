<template>
    <div class="container">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Crear Producto</p>
                <button type="button" class="delete" @click="$emit('close')" />
            </header>
            <section class="modal-card-body">
                <b-field label="Producto">
                    <b-input
                        type="text"
                        v-model="product"
                        placeholder="Tu producto"
                        required
                    >
                    </b-input>
                </b-field>

                <b-field label="Precio">
                    <b-input
                        type="number"
                        v-model="price"
                        placeholder="Precio"
                        required
                    >
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$emit('close')">
                    Close
                </button>
                <button class="button is-primary" v-on:click="createProduct">
                    <Spinner size="30" v-if="loading" />
                    <p v-else>
                        Crear
                    </p>
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { BACKEND_URL } from "@/helpers.js";
import Spinner from "vue-simple-spinner";

export default {
    name: "NewProductModal",
    data() {
        return {
            product: "",
            price: null,
            loading: false,
        };
    },
    components: {
        Spinner,
    },
    methods: {
        async createProduct() {
            console.log("Hola");
            this.loading = true;
            var scoped = this;
            await axios({
                method: "post",
                url: BACKEND_URL + "/product",
                data: {
                    product: this.product,
                    price: this.price,
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
                    scoped.$emit("close");
                })
                .catch(function(error) {
                    console.log(error);
                    scoped.loading = false;
                });
        },
    },
};
</script>
