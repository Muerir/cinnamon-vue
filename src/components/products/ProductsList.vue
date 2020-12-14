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
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal>
            <template #default="props">
                <new-product-modal  @close="props.close"></new-product-modal>
            </template>
        </b-modal>
        </section>
    </div>
</template>

<script>
import NewProductModal from "../products/NewProductModal.vue";

export default {
    name: "ProductsList",
    data() {
        return {
            isComponentModalActive: false,
        };
    },
    components:{
        NewProductModal
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
};
</script>
