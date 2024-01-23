<script>
import { ref, onMounted } from 'vue'
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            show_area_form: false,
            search_fields: ["name_en", "name_ar"],
            phone : ref(null),
            areas_list: [],
            countries: [],
            selectedArea: null,
            has_add_permission: false,
            has_edit_permission: false,
            has_delete_permission: false,
        }
    },
    computed:{
        ...mapGetters(["areasResponse"]),
    },
    methods: {
        ...mapActions(["getSettings"]),
    },
    watch: {
    areasResponse(data) {
        if(data != null) {
            this.areas_list = data.data
            console.log(data.data.address)
        }else{
          console.log('error data area')
        }
    }
},
    mounted() {
        this.getSettings({
                headers: {
                'X-Tenant': localStorage.getItem('tenant_id'),
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }})
    },
}
</script>
<template>
    <div class="container">
        <div class="w-4/5 px-10 py-10 bg-white rounded-lg shadow-sm">
                <div class="w-4/5 flex justify-between text-2xl font-semibold">
                    <span>General Data</span>
                    <RouterLink to="/data/edit" class="bg-primary text-sm text-white py-2 px-10 rounded">Edit</RouterLink>
                </div>
                <div class="flex mt-6 w-3/5">
                    <div class="flex flex-row w-1/2">
                      <img src="https://silkysys.com/wp-content/webp-express/webp-images/uploads/2022/11/Silky_Systems_Logo_Original-2048x463.png.webp" alt="">
                    </div>
                </div>
                <div class="flex mt-6 w-3/5">
                    <div class="flex flex-col w-1/2">
                      <span class="text-sm text-gray-400">Name</span>
                      <span class="text-lg font-medium">{{ areas_list.phone }}</span>
                    </div>
                </div>
                <div class="flex mt-6 w-3/5">
                    <div class="flex flex-col w-1/2">
                      <span class="text-sm text-gray-400">Phone Number</span>
                      <span class="text-lg font-medium">{{ areas_list.phone }}</span>
                    </div>
                    <div class="flex flex-col w-1/2">
                      <span class="text-sm text-gray-400">Address</span>
                      <span class="text-lg font-medium">{{ areas_list.address }}</span>
                    </div>
                </div>
                <div class="flex mt-6 w-3/5">
                    <div class="flex flex-col w-1/2">
                      <span class="text-sm text-gray-400">Contact Email</span>
                      <span class="text-lg font-medium">{{ areas_list.email }}</span>
                    </div>
                    <div class="flex flex-col w-1/2">
                      <span class="text-sm text-gray-400">Website</span>
                      <span class="text-lg font-medium">{{ areas_list.website }}</span>
                    </div>
                </div>
                <div class="flex mt-6 mb-8 w-3/5 justify-between">
                    <div class="flex flex-col">
                      <span class="text-sm text-gray-400">CR Number</span>
                      <span class="text-lg font-medium">{{ areas_list.CR_number }}</span>
                    </div>
                </div>
                <hr>
                <div class="flex mt-8 text-2xl font-semibold">
                    Currency
                </div>
                <div class="flex mt-6 w-3/5 justify-between">
                    <div class="flex flex-col">
                      <span class="text-sm text-gray-400">Currency</span>
                      <span class="text-lg font-medium">{{ areas_list.currency }}</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-gray-400">Currency Symbol</span>
                      <span class="text-lg font-medium">{{ areas_list.currency_symbol }}</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-gray-400">Currency Symbol Position</span>
                      <span class="text-lg font-medium">{{ areas_list.currency_symbol_position }}</span>
                    </div>
                </div>
                <div class="flex mt-8 text-2xl font-semibold">
                    Formats
                </div>
                <div class="flex mt-6 w-3/5 justify-between">
                    <div class="flex flex-col">
                      <span class="text-sm text-gray-400">Date Format</span>
                      <span class="text-lg font-medium">{{ areas_list.date_format }}</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-gray-400">Date Type</span>
                      <span class="text-lg font-medium">{{ areas_list.date_type }}</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-gray-400">Time Format</span>
                      <span class="text-lg font-medium">{{ areas_list.time_format }}</span>
                    </div>
                </div>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/material-icons.min.css";
@import "@/assets/side-menu.css";
@import "@/assets/style.bundle.css";
.nice-padding {
    padding: 10rem;
}

</style>