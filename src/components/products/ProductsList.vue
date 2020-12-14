<template>
    <div class="container">
        <section class="section">
            <b-button
                class="is-primary"
                expanded
                v-on:click="isComponentModalActive = true"
            >
                Agregar Producto
            </b-button>
            <b-modal
                v-model="isComponentModalActive"
                has-modal-card
                trap-focus
                :destroy-on-hide="true"
                aria-role="dialog"
                aria-modal
            >
                <template #default="props">
                    <new-product-modal
                        v-bind="formProps"
                        @close="props.close"
                        @success="smoll++"
                    ></new-product-modal>
                </template>
            </b-modal>
        </section>
        <Spinner size="30" v-if="loading" />
        <ProductTable v-else :products="products" :key="smoll" @success="smoll++"/>
    </div>
</template>

<script>
import NewProductModal from "../products/NewProductModal.vue";
import ProductTable from "../products/ProductTable.vue";
import Spinner from "vue-simple-spinner";
import axios from "axios";
import { BACKEND_URL } from "@/helpers.js";

export default {
    name: "ProductsList",
    components: {
        ProductTable,
        Spinner,
        NewProductModal,
    },
    methods: {
        cardModal() {
            this.$buefy.modal.open({
                parent: this,
                component: NewProductModal,
                hasModalCard: true,
                customClass: "custom-class custom-class-2",
                trapFocus: true,
                destroyOnHide: false,
            });
        },
    },
    data() {
        return {
            loading: true,
            products: [],
            smoll: 0,
            isComponentModalActive: false,
        };
    },
    method: {
        prueba() {
            this.smoll++;
        },
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
    watch: {
        smoll: async function(val) {
            console.log(val);
            this.loading = true;
            var scoped = this;
            await axios({
                method: "get",
                url: BACKEND_URL + "/product",
                withCredentials: true,
                headers: {
                    crossDomain: true,
                    "Content-Type": "application/json",
                },
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
    },
};
</script>
