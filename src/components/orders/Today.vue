<template>
    <div class="container">
        <section class="section">
            <router-link :to="{path: '/orders/new'}">
                <b-button class="is-primary" expanded>
                    Nueva orden
                </b-button>
            </router-link>
        </section>
        <section class="section">
            <b-table :data="data"
            ref="table"
            paginated
            per-page="5"
            detailed
            detail-key="id"
            :show-detail-icon="true"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
                <b-table-column field="id" :label="'Número de Orden'" centered v-slot="props">
                    {{ props.row.id }}
                </b-table-column>
                <b-table-column field="date" :label="'Fecha y Hora'" sortable centered v-slot="props">
                    {{ dayjs(props.row.date).format('DD/MM/YYYY - hh:mm') }}
                </b-table-column>
                <b-table-column field="total" :label="'Monto total'" sortable centered v-slot="props">
                    {{ props.row.total }} <strong>Bs. </strong>
                </b-table-column>
                <template slot="detail" slot-scope="props">
                    <div class="container">
                        <section class="section">
                            <div v-for="(item, index) in props.row.order" v-bind:key="index">
                                <h1 class="title is-3" >Producto: <p>{{item.product}}</p></h1>
                                <h1 class="title is-3">   Cantidad: <p>{{item.quantity}}</p></h1>
                                <hr>
                            </div>
                            <b-button type="is-danger" @click="deleteOrder(props.row.id)" expanded>
                                    Eliminar
                                </b-button>
                        </section>
                    </div>
                </template>
            </b-table>
        </section>

    </div>
</template>

<script>
import dayjs from 'dayjs'
import axios from "axios";
import { BACKEND_URL } from "@/helpers.js";

export default {
    name: "Today",
    props: ["data"],
    data(){
        return {
            dayjs: dayjs,
        }
    },
    methods: {
        deleteOrder: async function(id) {
            var scoped = this;
            await axios({
                method: "delete",
                url: BACKEND_URL + "/order",
                withCredentials: true,
                data: {
                    id: id,
                },
                headers: {
                    crossDomain: true,
                    "Content-Type": "application/json",
                },
            })
                .then(function(response) {
                    console.log(response);
                    scoped.$emit("success");
                    this.$forceUpdate();
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
};
</script>

<style scoped>
h1{
    display: inline;
}
p{
    display: inline;
    font-weight: 400;
    font-size: 1.8rem;
}
.section {
    padding-bottom: 0;
}
</style>