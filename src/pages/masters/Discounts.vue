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
    import ToggleVue from "@/components/ToggleVue.vue";
    import Vuetable from 'vuetable-2'
import { ref, onMounted } from 'vue'
import { mapActions, mapGetters } from "vuex";
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
export default {
    data() {
        return {
            user: {
                    name: '',
                    email: '',
                    state: '',
                    zip_code: '',
                    address: '',
                    city_id: '1',
                    code: '',
                    phone: '+201027789686',
                    country_id: '1',
                    is_active: '1',
                    is_default: '1',
      },
      toggleState : ref(false),
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
//     validations() {
//       return {
//         user: {
//           email: { required: helpers.withMessage(this.$root.getErrorMessage('required', 'Email'), required), email: helpers.withMessage(this.$root.getErrorMessage('email', 'Email'), email) },
//           password: { required: helpers.withMessage(this.$root.getErrorMessage('required', 'Password'), required) }
//         }
//     };
//   },
    computed:{
        ...mapGetters(["areasResponse"]),
    },
    methods: {
        ...mapActions(["addHub"]),

        addNewArea() {
            this.v$.$validate()
            if(!this.v$.$error) {
                this.addHub(this.user)
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
    <form @submit.prevent="addNewArea()" class="form" id="kt_login_signin_form">
        <div class="container-fluid m-0">
            <div class="w-11/12 px-10 py-10 row h-auto rounded-lg">
                <div class="col d-flex flex-column h-auto">
                    <div class="d-flex h-auto">
                        <div class="md:w-full d-flex align-items-center h-auto">
                            <div class="container-fluid p-0 m-0">
                                
                                <div class="form-group mt-6">
                                    <div class="w-full">
                                        <span class="pl-1">Hub Or Micro Hub </span>
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
                                </div>

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-14">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Name <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" v-model="user.name" type="text" placeholder="Client Name" name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Code <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" v-model="user.code" type="text" placeholder="2544" name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                </div>

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-14">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Email <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" v-model="user.email" type="text" placeholder="e.g Ahmed@gmail.com" name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Phone Number <span class="text-red-600">*</span> </span>
                                        <vue-tel-input v-model="user.phone" mode="international"></vue-tel-input>
                                    </div>
                                </div>

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-14">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Country <span class="text-red-600">*</span> </span>
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
                                        <span class="pl-1">City <span class="text-red-600">*</span> </span>
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

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-14">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Province / State <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" v-model="user.state" type="text" placeholder="e.g Ahmed.line@gmail.com" name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Zip Code <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" v-model="user.zip_code" type="text" placeholder="12544" name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                </div>

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-14">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Address <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" v-model="user.address" type="text" placeholder="street 6 egypt etc..." name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Description <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" type="text" placeholder="...." name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                </div>

                                <!-- <div class="form-group mt-6 flex md:flex-row flex-col gap-14">
                                    <div class="md:w-2/4 w-full">
                                        <span class="pl-1">Address <span class="text-red-600">*</span> </span>
                                        <input class="form-control height-42 py-5" type="text" placeholder="e.g Ahmed.line@gmail.com" name="email" id="email" autofocus autocomplete="off" />
                                    </div>
                                    <div class="md:w-2/4 w-full">
                                        <ToggleVue v-model="this.toggleState" />
                                    </div>
                                </div>

                                <div class="form-group mt-6 flex md:flex-row flex-col gap-14">
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

                                <div class="form-group mt-3 flex md:flex-row flex-col gap-14">
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
                                </div> -->

                                <div class="form-group flex justify-end text-center">
                                    <button id="kt_login_signin_submit" type="submit" class="btn btn-primary btn-primary-login height-42 font-weight-bold py-2 px-16 my-3">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>


</template>
<style scoped>
@import "@/assets/material-icons.min.css";
@import "@/assets/side-menu.css";
@import "@/assets/style.bundle.css";
.nice-padding {
    padding: 10rem;
}

</style>