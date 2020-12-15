<template>
    <div>
        <EditProduct :id="id"/>
    </div>
</template>

<script>
import EditProduct from '@/components/products/EditProduct.vue'

export default {
    name: 'EditProducts',
    components:{
        EditProduct
    },
    data(){
        return {
            id: this.$route.params.id
        }
    }
}
</script>