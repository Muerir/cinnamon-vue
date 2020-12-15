<template>
    <div class="container">
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
Error inesperado                </b-message>
            </section>
            <section class="section">
                <b-field label="Nombre del Producto:">
                    <b-input
                        v-model="product"
                        placeholder="Producto"
                    ></b-input>
                </b-field>
                <b-field label="Precio:">
                    <b-input
                        v-model="price"
                        type="number"
                        placeholder="Precio"
                    ></b-input>
                </b-field>
                <section class="section">
                    <b-button
                        type="is-primary"
                        expanded
                        v-on:click="editProduct"
                    >
                        <Spinner size="30" v-if="loading" />
                        <p v-else>
                            Actualizar
                        </p>
                    </b-button>
                </section>
            </section>
        </div>
        <div class="column"></div>
    </div>
</template>

<script>
import axios from "axios";
import { BACKEND_URL } from "@/helpers.js";
import Spinner from "vue-simple-spinner"

export default {
    name: "EditProduct",
    props: ["id"],
    data() {
        return {
            product: "",
            price: null,
            loading: false,
        };
    },
    components:{
        Spinner
    },
    methods: {
        async editProduct() {
            this.loading = true;
            var scoped = this;
            await axios({
                method: "put",
                url: BACKEND_URL + "/product",
                data: {
                    id: this.id,
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
                    scoped.$router.push({path: '/products'})
                })
                .catch(function(error) {
                    console.log(error);
                    scoped.loading = false;
                });
        },
    },
};
</script>
