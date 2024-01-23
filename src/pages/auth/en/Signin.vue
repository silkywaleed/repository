<template>
  <div class="text-center absolute top-3 right-1/4 sm:right-4 z-10">
    <div class="relative inline-flex self-center">
      <!-- <img class="h-8 pl-1 w-9 absolute top-4 right-0 pointer-events-none" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/008-saudi-arabia_jiycoz.webp" alt=""> -->
        <!-- <svg class="text-white bg-primary absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 38 22" version="1.1">
          <img class="h-5 pl-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/008-saudi-arabia_jiycoz.webp" alt="">
        </svg>  -->
      <!-- <select class="text-2xl font-bold rounded text-gray-600 h-14 w-36 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            <option
                selected="true"
            >
                <span>العربية</span> <img class="h-5 pl-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/008-saudi-arabia_jiycoz.webp" alt="">
            </option>
            <option
                selected=""
            >
                <span>الأنجليزية</span> <img class="h-5 pl-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/008-saudi-arabia_jiycoz.webp" alt="">
            </option>
    </select> -->
    <!-- <router-link to="/ar-adminLogin" class="flex justify-center border-2 border-primary pl-4 pr-5 py-1">
      <span class="text-lg">اللغة العربية</span>
      <img class="h-5 pl-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/008-saudi-arabia_jiycoz.webp" alt="">
    </router-link> 
           <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"background: #021DA50D;
          class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
          :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg> 
  
  -->
    <div class=" text-lg w-36">
      <div
        class="flex items-center justify-center px-3 py-2 bg-white hover-bg w-full rounded-lg"
        @click="isOptionsExpanded = !isOptionsExpanded"
      >
        <span class="flex items-center justify-center"><img class="h-5 pr-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/226-united-states_z54uak.webp" alt=""> English</span>
      </div>
      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="isOptionsExpanded"
          class="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden"
        >
          <li
            class="px-3 py-2 transition-colors duration-300 hover-bg"
          >
          <router-link to="/ar-adminLogin"><span class="flex items-center justify-center"><img class="h-5 pr-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/008-saudi-arabia_jiycoz.webp" alt=""> Arabic</span></router-link>
          </li>
          <li
            class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
          >
          <a class="cursor-pointer"><span class="flex items-center justify-center"><img class="h-5 pr-1" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1693582957/226-united-states_z54uak.webp" alt=""> English</span></a>
          </li>
        </ul>
      </transition>
    </div>
    </div>
</div>
  <form @submit.prevent="userLogin()" class="form" id="kt_login_signin_form">
        <div class="container-fluid bg-white p-0 m-0">
            <div class="row h-screen w-100">
                <div class="col-7 bg-blue-100 bg-image d-none d-lg-block">
                    <div class="home">
                        <Carousel
                          :navigation="true"
                          :pagination="true"
                          :startAutoPlay="false"
                          :timeout="5000"
                          class="carousel"
                          v-slot="{ currentSlide }"
                        >
                          <Slide v-for="(slide, index) in carouselSlides" :key="index">
                            <div v-show="currentSlide === index + 1" class="slide-info">
                              <img :src="slide" alt="" />
                              <h2 v-for="(titleSlide, index) in titleSlides" :key="index" class="text-primary text-3xl">
                                <div v-show="currentSlide === index + 1">{{ titleSlide }}</div>
                              </h2>
                              <span v-for="(spanSlide, index) in spanSlides" :key="index" class="text-lg text-gray-800 px-1">
                                <div v-show="currentSlide === index + 1">{{ spanSlide }}</div>
                              </span>
                            </div>
                          </Slide>
                        </Carousel>
                      </div>
                    <!-- <div class="d-flex justify-content-center h-screen">
                        <div class="w-4/6 flex flex-col justify-center align-items-center">
                                <img style="width: 100%;" src="https://res.cloudinary.com/dlh4c743j/image/upload/v1692533386/admin_login_vdqqcn.svg" alt="">
                                <h2>("home.header")</h2>
                            </div>
                    </div> -->
                </div>
                <div class="col_line5 d-flex flex-column h-screen">
                    <div class="d-flex justify-content-center h-screen">
                        <div class="w-4/6 d-flex align-items-center h-auto" >
                            <div class="container-fluid p-0 m-0">
                                    <!-- 
                                        @error('email') is-invalid @enderror  
                                        <span class="invalid-feedback" role="alert">
                                            <strong>dfd</strong>
                                        </span>
                                    -->
                                <div class="flex flex-col justify-center text-center w-100">
                                    <img src="https://res.cloudinary.com/dlh4c743j/image/upload/v1692533967/ss-logo_tpetsd.webp" alt="Logo" 
                                        class="mb-4 self-center"
                                        style="width: 144px;" 
                                        />

                                        <div class="mb-6">
                                          <span class="text-xl text-gray-800">Login To Silky Systems Dashboard</span>
                                        </div>
                                </div>

                                <div class="form-group mt-3 mb-6">
                                    <span class="text-lg">Email <span class="text-red-400">*</span></span>
                                    <input class="form-control height-42 py-5" v-model="user.email" placeholder="eg. email@gmail.com" type="email" name="email" id="email" autofocus autocomplete="off" />
                                    <span class="text-sm text-red-400" v-if="v$.user.email.$error"> {{ v$.user.email.$errors[0].$message }}</span>
                                  </div>

                                <div class="form-group mt-3 mb-6">
                                  <span class="text-lg">Password <span class="text-red-400">*</span></span>
                                    <input class="form-control height-42" v-model="user.password" placeholder="*********" type="password" autocomplete="off" name="password" id="password" />
                                    <span class="text-sm text-red-400" v-if="v$.user.password.$error"> {{ v$.user.password.$errors[0].$message }}</span>
                                  </div>

                                <div class="form-group flex justify-center mb-6">
                                    <div class="checkbox-inline justify-center mr-8">
                                        <label class="checkbox m-0 flex remember_me">
                                            <input type="checkbox" name="remember"/>
                                            <span></span>
                                        </label>
                                        <span class="text-base">Rememper Me ?</span>
                                    </div>
                                    <div class="forgot-password ml-8">
                                        <router-link to="/en-forgotPassword"
                                            class="text-primary text-base ml-1">
                                            Forgot Password ?
                                        </router-link>
                                    </div>
                                </div>
                                <div class="form-group mt-3 text-center">
                                    <button type="submit" id="kt_login_signin_submit" class="btn btn-primary btn-primary-login height-42 btn-block font-semibold py-4 mb-3">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mb-5">
                        <router-link to="t" class="badge badge-primary text-wrap">Go To Costumer Web</router-link>
                    </div>
                    <div class="d-flex justify-content-center pb-4">
                        <div class="d-flex align-items-end">
                            <div class="text-center">
                              All rights reserved <a href="https://silkysys.com" target="_blank"
                                    class="text-primary ml-1">Silky Systems</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";

export default {
  name: "Signin",
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = [ "https://res.cloudinary.com/dlh4c743j/image/upload/v1692533386/admin_login_vdqqcn.svg", "https://res.cloudinary.com/dlh4c743j/image/upload/v1692533386/admin_login_vdqqcn.svg", "https://res.cloudinary.com/dlh4c743j/image/upload/v1692533386/admin_login_vdqqcn.svg"];
    return { carouselSlides };
  },
  data() {
    return {
      isOptionsExpanded: false,
      v$: useValidate(),
       titleSlides : ["Enhanced Driver and Vehicles Management", "End-to-End Delivery Management", "Best Shipment Management"],
       spanSlides : [
      "Manage and keep track of every detail surrounding your fleet while strengthening communication between fleet managers, owners, drivers, technicians, admins and more", 
      "Save time, reduce costs and simplify tasks with end-to-end automation and a single channel of communication between your dispatch, fleet and customers.", 
      "We provide 52 different types of checkpoints that help tracking your shipments efficiently, help increase in the number of delivery jobs and improvement in timely deliveries"
    ],
      user: {
        email: "",
        password: ""
      },
      // Dummy response
      login_response: {
        default_url: "/dashboard",
        token: "524|Th4ppK4hgKSz77fxHybUx7oGsw0uI5qxFKf9ulkz",
        user: {
          admin_group_id: 1,
          admin_group: { "id": 1, "title": "Master Admin", "is_active": 1, "created_at": null, "updated_at": null }
        },
        admin_menu: [
          { "id": 1, "title": "Dashboard", "link": "/dashboard", "icon_class": "heroicons-outline:home", "sort_order": 1, 
            "permissions": [ 
              { "id": 1, "title": "dashboard", "description": "View Dashboard", "admin_menu_id": 1, "admin_sub_menu_id": null, "is_parent": 1 } 
            ], 
            "sub_menus": [] 
          },
          {
            "id": 2, "title": "Masters", "link": "", "icon_class": "heroicons-outline:view-list", "sort_order": 6, "created_at": null, "updated_at": null, 
            "permissions": [ 
              { "id": 28, "title": "branches", "description": "View Branches", "admin_menu_id": 5, "admin_sub_menu_id": 6, "is_parent": 1 },
            ],
            "sub_menus": [ 
              { "id": 6, "admin_menu_id": 5, "title": "Branch", "link": "/branches", "created_at": null, "updated_at": null, 
                "permissions": [ 
                  { "id": 28, "title": "discountbranches_coupons", "description": "View Branches", "admin_menu_id": 5, "admin_sub_menu_id": 6, "is_parent": 1, "created_at": null, "updated_at": null }, 
                ] 
              }, 
              { "id": 7, "admin_menu_id": 5, "title": "Discounts", "link": "/discounts", "created_at": null, "updated_at": null, 
                "permissions": [ 
                  { "id": 33, "title": "discounts", "description": "View Discounts", "admin_menu_id": 5, "admin_sub_menu_id": 7, "is_parent": 1, "created_at": null, "updated_at": null },
                ] 
              } 
            ] 
          },
          {
            "id": 2, "title": "Transactions", "link": "", "icon_class": "heroicons-outline:pencil-alt", "sort_order": 6,
            "permissions": [ 
              { "id": 28, "title": "transactions", "description": "View Transactions", "admin_menu_id": 5, "admin_sub_menu_id": 6, "is_parent": 1 }
            ],
            "sub_menus": [ 
              { "id": 6, "admin_menu_id": 5, "title": "Transactions", "link": "/transactions",
                "permissions": [ 
                  { "id": 28, "title": "transactions", "description": "View Transactions", "admin_menu_id": 5, "admin_sub_menu_id": 6, "is_parent": 1 }, 
                ] 
              }
            ] 
          },
          {
            "id": 2, "title": "Reports", "link": "", "icon_class": "heroicons-outline:chart-square-bar", "sort_order": 6,
            "permissions": [ 
              { "id": 28, "title": "reports", "description": "View Reports", "admin_menu_id": 5, "admin_sub_menu_id": 6, "is_parent": 1 }
            ],
            "sub_menus": [ 
              { "id": 6, "admin_menu_id": 5, "title": "Reports", "link": "/reports",
                "permissions": [ 
                  { "id": 28, "title": "reports", "description": "View Reports", "admin_menu_id": 5, "admin_sub_menu_id": 6, "is_parent": 1 }, 
                ] 
              }
            ] 
          },
          {
            "id": 2, "title": "Settings", "link": "", "icon_class": "heroicons-outline:cog", "sort_order": 6,
            "permissions": [ 
              { "id": 28, "title": "settings", "description": "View Settings", "admin_menu_id": 5, "admin_sub_menu_id": 6, "is_parent": 1 }
            ],
            "sub_menus": [ 
              { "id": 6, "admin_menu_id": 5, "title": "Settings", "link": "/settings",
                "permissions": [ 
                  { "id": 28, "title": "settings", "description": "View Settings", "admin_menu_id": 5, "admin_sub_menu_id": 6, "is_parent": 1 }, 
                ] 
              }
            ] 
          }
        ]
      }
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
  computed: {
    ...mapGetters(["adminUser"]),
  },
  watch: {
    adminUser(data) {
      this.adminUser = data;
      if(this.adminUser.status) {
        this.$toast.success(data.message);
        window.location.reload()
      } else {
        this.$toast.error(data.message);
      }
    }
  },
  methods: {
    ...mapActions(["login"]),

    userLogin() {
      this.v$.$validate();
      if(!this.v$.$error) {
        // localStorage.setItem("userInfo", JSON.stringify(this.login_response))
        // window.location.reload()
        this.login({
          login: this.user.email,
          password: this.user.password
        });
      }
    },

  }
};
</script>

<style scoped>
@import "@/assets/material-icons.min.css";
@import "@/assets/side-menu.css";
@import "@/assets/style.bundle.css";

.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}

.hover-bg:hover {
  background: #021DA50D !important;
  cursor: pointer;
}

.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
}

.carousel .slide-info {
    position: absolute;
    text-align: center;
    top: 0;
    left: 10%;
    width: 80%;
    max-height: 100%;
    height: 100%;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .carousel .slide-info img {
    width: 35rem;
    height: 25rem;
      object-fit: cover;
    }

    /* On screens that are 992px wide or less, go from four columns to two columns */
    @media (min-width: 768px) {
  .col_line5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
  }
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media (min-width: 640px) {
  .col_line5 {
      width: 100%;
  }
}

</style>