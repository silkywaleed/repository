<template>
    <div>
        <div class="flex items-center pb-3">
            <span class="text-3xl font-bold">Hubs</span>
            <span class="pl-5">All</span>
        </div>
        <div class="flex w-11/12 justify-between mb-3">
            <div class="flex items-center p-4 text-center justify-between rounded-lg bg-white">
                <div class="flex items-center">
                    <img src="https://res.cloudinary.com/drcfigqqr/image/upload/v1695237303/Frame_724_jtaokb.png" alt="">
                    <span class="pl-2">All Hubs</span>
                </div>
                <div class="pl-36 text-2xl font-bold">
                    240
                </div>
            </div>
            <div class="flex items-center p-4 text-center justify-between rounded-lg bg-white">
                <div class="flex items-center">
                    <img src="https://res.cloudinary.com/drcfigqqr/image/upload/v1695237303/Frame_724_jtaokb.png" alt="">
                    <span class="pl-2">All Hubs</span>
                </div>
                <div class="pl-36 text-2xl font-bold">
                    240
                </div>
            </div>
            <div class="flex items-center p-4 text-center justify-between rounded-lg bg-white">
                <div class="flex items-center">
                    <img src="https://res.cloudinary.com/drcfigqqr/image/upload/v1695237303/Frame_724_jtaokb.png" alt="">
                    <span class="pl-2">All Hubs</span>
                </div>
                <div class="pl-36 text-2xl font-bold">
                    240
                </div>
            </div>
        </div>
        <div class="flex w-11/12 justify-between mb-3">
            <div class="flex items-center p-4 text-center justify-between rounded-lg">
                Search
            </div>
            <div class="flex items-center p-4 text-center justify-between rounded-lg">
                <RouterLink to="/hub/create" class="py-2 px-5 text-blue-800 font-semibold text-center flex">
                    <img class="pr-2" src="https://res.cloudinary.com/drcfigqqr/image/upload/v1695244739/Icon_bni0hr.png" alt="">
                    New Hub
                </RouterLink>
                <span class="py-2 px-7 text-white text-center flex font-semibold rounded-md bg-blue-800">
                    <img class="pr-2" src="https://res.cloudinary.com/drcfigqqr/image/upload/v1695244739/Frame_548_qgdbcv.png" alt="">
                    Filter
                </span>
            </div>
        </div>
        <table class="w-11/12">
            <thead class="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Code</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Phone</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">City</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Created At</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">STATUS</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left"></th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b-2 border-gray-200" v-for="(students, index) in this.students" :key="index">
                    <td class="p-3 text-sm text-gray-700">{{ students.name }}</td>
                    <td class="p-3 text-sm text-gray-700">{{ students.code }}</td>
                    <td class="p-3 text-sm text-gray-700">{{ students.email }}</td>
                    <td class="p-3 text-sm text-gray-700">{{ students.phone }}</td>
                    <td class="p-3 text-sm text-gray-700">Riyadh</td>
                    <td class="p-3 text-sm text-gray-700">{{ students.created_at }}</td>
                    <td v-if="students.is_active" class="p-3 text-sm text-gray-700"><span class="py-2 px-7 text-green-600 text-center inline-block rounded-2xl bg-green-100 font-medium">Active</span></td>
                    <td>
                        <button type="button" class="btn outline-none border-none mr-2 hover:bg-red-200 bg-red-100"><img src="https://res.cloudinary.com/drcfigqqr/image/upload/v1695234077/trash-2_hmgmhx.svg" alt=""></button>
                        <RouterLink :to="{ path: '/hub/' + students.id + '/edit' }" class="btn outline-none border-none hover:bg-blue-200 bg-blue-100"><img  src="https://res.cloudinary.com/drcfigqqr/image/upload/v1695233884/Icon_1_pzup1p.svg" alt=""></RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    // import { ref, onMounted } from 'vue'
    // const phone = ref(null);

    // const selectImage = function () {
    //       this.$refs.fileInput.click()
    //   }

    // const pickFile = function () {
    //     let input = this.$refs.fileInput
    //     let file = input.files
    //     if (file && file[0]) {
    //       let reader = new FileReader
    //       reader.onload = e => {
    //         radioCheck = e.target.result
    //       }
    //       reader.readAsDataURL(file[0])
    //       this.$emit('input', file[0])
    //     }
    //   }
    import Vuetable from 'vuetable-2'
    import axios from 'axios'
import { ref, onMounted } from 'vue'
import { mapActions, mapGetters } from "vuex";
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            students: [],
            headers: [
                { text: "PLAYER", value: "player" },
                { text: "TEAM", value: "team" },
                { text: "NUMBER", value: "number" },
                { text: "POSITION", value: "position" },
                { text: "HEIGHT", value: "indicator.height" },
                { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true },
                { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
                { text: "COUNTRY", value: "country" },
            ],
            items: [
                { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: { "height": '6-2', "weight": 185 }, lastAttended: "Davidson", country: "USA" },
                { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: { "height": '6-9', "weight": 250 }, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA" },
                { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: { "height": '6-10', "weight": 240 }, lastAttended: "Texas-Austin", country: "USA" },
                { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: { "height": '6-11', "weight": 242 }, lastAttended: "Filathlitikos", country: "Greece" },
            ],
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                },
                {
                    label: 'Age',
                    field: 'age',
                    type: 'number',
                },
                {
                    label: 'Created On',
                    field: 'createdAt',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'MMM do yy',
                },
                {
                    label: 'Percent',
                    field: 'score',
                    type: 'percentage',
                },
            ],
            rows: [
                { id: 1, name: "John", age: 20, createdAt: '', score: 0.03343 },
                { id: 2, name: "Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
                { id: 3, name: "Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
                { id: 4, name: "Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
                { id: 5, name: "Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
                { id: 6, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
            ],
            user: {
                email: "",
                password: ""
            },
            v$: useValidate(),
            show_area_form: false,
            search_fields: ["name_en", "name_ar"],
            phone: ref(null),
            areas_list: [],
            countries: [],
            selectedArea: null,
            has_add_permission: false,
            has_edit_permission: false,
            has_delete_permission: false,
        };
    },
    //     validations() {
    //       return {
    //         user: {
    //           email: { required: helpers.withMessage(this.$root.getErrorMessage('required', 'Email'), required), email: helpers.withMessage(this.$root.getErrorMessage('email', 'Email'), email) },
    //           password: { required: helpers.withMessage(this.$root.getErrorMessage('required', 'Password'), required) }
    //         }
    //     };
    //   },
    computed: {
        ...mapGetters(["areasResponse"]),
    },
    methods: {
        ...mapActions(["addSettings"]),
        addNewArea() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.addSettings({
                    website: this.user.email,
                    headers: { 'X-tenant': localStorage.getItem('tenant_id'), 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
            }
        },
        getStudents() {
            axios.get('https://logistics.sandbox.silkysystems.com/api/admin/hub/list?page=1', {
                headers: {
                    'X-Tenant': localStorage.getItem('tenant_id'),
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                this.students = res.data.data.items.all_hubs;
                console.log(this.students);
            });
        },
        pickFile() {
            let input = this.$refs.fileInput;
            let file = input.files;
            if (file && file[0]) {
                let reader = new FileReader;
                reader.onload = e => {
                    radioCheck = e.target.result;
                };
                reader.readAsDataURL(file[0]);
                this.$emit('input', file[0]);
            }
        }
    },
    mounted() {
        this.getStudents();
        // this.addSettings({
        //         headers: {
        //         'X-Tenant': localStorage.getItem('tenant_id'),
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`
        //       }})
    },
    components: { RouterLink }
}
</script>