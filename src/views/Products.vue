<template>
    <div>
        <Navbar />
        <ProductsList />
    </div>
</template>

<script>
import Navbar from '@/components/utils/Navbar.vue'
import ProductsList from '../components/products/ProductsList.vue'

export default {
    name: "Products",
    components:{
        Navbar,
        ProductsList
    }
};
</script>
