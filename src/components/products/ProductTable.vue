<template>
    <section class="section">
        <hr />
        <div v-for="(item, index) in products" v-bind:key="index">
            <div class="level is-mobile">
                <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle">
                            <strong> Producto: </strong>{{ item.product }}
                        </p>
                    </div>
                    <div class="level-item">
                        <p class="subtitle">
                            <strong> Precio: </strong>{{ item.price }}
                            <strong> Bs. </strong>
                        </p>
                    </div>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <b-button type="is-danger" expanded v-on:click="deleteProduct(item.id)">
                        Eliminar
                    </b-button>
                </div>
                <div class="level-item">
                    <b-button type="is-warning" expanded>
                        Editar
                    </b-button>
                </div>
            </div>
            <hr />
        </div>

        <b-pagination
            :total="products.length"
            v-model="current"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
        ></b-pagination>
    </section>
</template>

<script>
import axios from "axios";
import { BACKEND_URL } from "@/helpers.js";

export default {
    name: "ProductTable",
    props: ["products"],
    data() {
        return {
            showDetailIcon: true,
            current: 1,
            perPage: 10,
        };
    },
    methods: {
        deleteProduct: async function(id) {
            var scoped = this;
            await axios({
            method: "delete",
            url: BACKEND_URL + "/product",
            withCredentials: true,
            data: {
                id: id
            },
            headers: { crossDomain: true, "Content-Type": "application/json" },
        })
            .then(function(response) {
                console.log(response);
                scoped.$emit("success");
                this.$forceUpdate();
            })
            .catch(function(error) {
                console.log(error);
            });
        },
    },
    computed: {
        total() {
            return this.products.length;
        },
        paginatedItems() {
            let page_number = this.current - 1;

            return this.products.slice(
                page_number * this.perPage,
                (page_number + 1) * this.perPage
            );
        },
    },
};
</script>

<style scoped>
.section {
    padding-top: 0;
}
</style>
