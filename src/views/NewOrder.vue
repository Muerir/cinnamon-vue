<template>
    <div>
        <Navbar />
        <NewOrderForm />
    </div>
</template>

<script>
import Navbar from '@/components/utils/Navbar.vue'
import NewOrderForm from '@/components/orders/NewOrderForm.vue'

export default {
    name: 'NewOrder',
    components: {
        Navbar,
        NewOrderForm
    }
}
</script>