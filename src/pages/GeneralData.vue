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
import { ref, onMounted } from 'vue'
import { mapActions, mapGetters } from "vuex";
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
export default {
    data() {
        return {
            headers: [
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "indicator.height"},
  { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
],
items:[
  { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
  { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
  { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
  { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
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
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
            user: {
        email: "",
        password: ""
      },
      v$: useValidate(),
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
    validations() {
      return {
        user: {
          email: { required: helpers.withMessage(this.$root.getErrorMessage('required', 'Email'), required), email: helpers.withMessage(this.$root.getErrorMessage('email', 'Email'), email) },
          password: { required: helpers.withMessage(this.$root.getErrorMessage('required', 'Password'), required) }
        }
    };
  },
    computed:{
        ...mapGetters(["areasResponse"]),
    },
    methods: {
        ...mapActions(["addSettings"]),

        addNewArea() {
            this.v$.$validate()
            if(!this.v$.$error) {
                this.addSettings({
                    website: this.user.email,
                    headers: {'X-Tenant': localStorage.getItem('tenant_id'),'Authorization': `Bearer ${localStorage.getItem('token')}`}
                })
            }
        },

        pickFile() {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            radioCheck = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      }
    },
    mounted() {
        // this.addSettings({
        //         headers: {
        //         'X-Tenant': localStorage.getItem('tenant_id'),
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`
        //       }})
    },
}
</script>
<template>
    <form @submit.prevent="addNewArea()" class="form bg-[#F9F9F9]" id="kt_login_signin_form">
        <div class="container-fluid m-0">
            <div class="w-4/5 px-10 py-10 row h-auto bg-white rounded-lg shadow-sm">
                <div class="col d-flex flex-column h-auto">
                    <div class="d-flex h-auto">
                        <div class="md:w-full d-flex align-items-center h-auto">
                            <div class="container-fluid p-0 m-0">
                                
                                <div class="flex">
                                    <div class="">
      <label for="formFile" class="form-label">Upload Image:</label>
      
      <input class="form-control" ref="fileInput" type="file" @input="pickFile">
      </div>
                                </div>
                                <div class="form-group mt-6">
                                    <span class="pl-1">Name <span class="text-red-600">*</span> </span>
                                    <input class="form-control height-42 py-5" v-model="user.email" placeholder="eg. email@gmail.com" type="text" name="email" id="email" autofocus autocomplete="off" />
                                </div>

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-2">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Phone Number <span class="text-red-600">*</span> </span>
                                        <vue-tel-input v-model="phone" mode="international"></vue-tel-input>
                                    </div>
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Address <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" type="text" placeholder="e.g ST" name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                </div>

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-2">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Contact Email <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" type="text" placeholder="e.g Ahmed.line@gmail.com" name="email" id="email" autofocus autocomplete="off" />
                                        <span class="text-sm text-red-400" v-if="v$.user.email.$error"> {{ v$.user.email.$errors[0].$message }}</span>
                                    </div>
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Address <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" type="text" placeholder="e.g ahmed.com" name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                </div>

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-2">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">CR Number<span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" type="text" placeholder="e.g 2246" name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                    <div class="md:w-1/4 w-full">
                                        <span class="pl-1">Currency <span class="text-red-600">*</span> </span>
                                        <div class="text-center">
                                            <div class="relative inline-flex self-center w-full">
                                                <svg class="text-white absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="25px" viewBox="0 0 38 22" version="1.1">
                                                        <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                                                        <g id="ZahnhelferDE—Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g id="ZahnhelferDE–Icon&amp;Asset-Download" transform="translate(-539.000000, -199.000000)" fill="#021DA5" fill-rule="nonzero">
                                                                <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
                                                                    <polygon id="Path-Copy" transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) " points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"/>
                                                                </g>
                                                            </g>
                                                        </g>
                                                </svg>
                                                <select class="text-lg font-bold rounded border-2 border-[#b6b8bf] text-gray-600 h-10 w-full pl-5 pr-10 bg-[#D3D3D3] hover:border-gray-400 focus:outline-none appearance-none">
                                                        <option>
                                                            USD $
                                                        </option>
                                                        <option>
                                                            USD $
                                                        </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="md:w-1/4 w-full">
                                        <span class="pl-1">Symbol Position <span class="text-red-600">*</span> </span>
                                        <div class="text-center">
                                            <div class="relative inline-flex self-center w-full">
                                                <svg class="text-white absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="25px" viewBox="0 0 38 22" version="1.1">
                                                        <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                                                        <g id="ZahnhelferDE—Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g id="ZahnhelferDE–Icon&amp;Asset-Download" transform="translate(-539.000000, -199.000000)" fill="#021DA5" fill-rule="nonzero">
                                                                <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
                                                                    <polygon id="Path-Copy" transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) " points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"/>
                                                                </g>
                                                            </g>
                                                        </g>
                                                </svg>
                                                <select class="text-lg font-bold rounded border-2 border-[#b6b8bf] text-gray-600 h-10 w-full pl-5 pr-10 bg-[#D3D3D3] hover:border-gray-400 focus:outline-none appearance-none">
                                                        <option>
                                                            Pre
                                                        </option>
                                                        <option>
                                                            Post
                                                        </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-2">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Date Format <span class="text-red-600">*</span> </span>
                                        <div class="text-center">
                                            <div class="relative inline-flex self-center w-full">
                                                <svg class="text-white absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="25px" viewBox="0 0 38 22" version="1.1">
                                                        <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                                                        <g id="ZahnhelferDE—Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g id="ZahnhelferDE–Icon&amp;Asset-Download" transform="translate(-539.000000, -199.000000)" fill="#021DA5" fill-rule="nonzero">
                                                                <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
                                                                    <polygon id="Path-Copy" transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) " points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"/>
                                                                </g>
                                                            </g>
                                                        </g>
                                                </svg>
                                                <select class="text-lg font-bold rounded border-2 border-[#b6b8bf] text-gray-600 h-10 w-full pl-5 pr-10 bg-[#D3D3D3] hover:border-gray-400 focus:outline-none appearance-none">
                                                        <option>
                                                            day/month/year → ex: 24/12/2022
                                                        </option>
                                                        <option>
                                                            month/day/year → ex: 12/24/2022
                                                        </option>
                                                        <option>
                                                            year/month/day → ex: 2022/12/24
                                                        </option>
                                                        <option>
                                                            30-June 2008
                                                        </option>
                                                        <option>
                                                            8 Mon, 2021
                                                        </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Time Format <span class="text-red-600">*</span> </span>
                                        <div class="text-center">
                                            <div class="relative inline-flex self-center w-full">
                                                <svg class="text-white  absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="25px" viewBox="0 0 38 22" version="1.1">
                                                        <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                                                        <g id="ZahnhelferDE—Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g id="ZahnhelferDE–Icon&amp;Asset-Download" transform="translate(-539.000000, -199.000000)" fill="#021DA5" fill-rule="nonzero">
                                                                <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
                                                                    <polygon id="Path-Copy" transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) " points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"/>
                                                                </g>
                                                            </g>
                                                        </g>
                                                </svg>
                                                <select class="text-lg font-bold rounded border-2 border-[#b6b8bf] text-gray-600 h-10 w-full pl-5 pr-10 bg-[#D3D3D3] hover:border-gray-400 focus:outline-none appearance-none">
                                                        <option>
                                                            24 hour
                                                        </option>
                                                        <option>
                                                            12 hour
                                                        </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group flex justify-center text-center">
                                    <button id="kt_login_signin_submit" type="submit" class="btn btn-primary btn-primary-login height-42 btn-block font-weight-bold w-1/4 py-4 mb-3">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <EasyDataTable
    :headers="headers"
    :items="items"
  />
</template>
<style scoped>
@import "@/assets/material-icons.min.css";
@import "@/assets/side-menu.css";
@import "@/assets/style.bundle.css";
.nice-padding {
    padding: 10rem;
}

</style>