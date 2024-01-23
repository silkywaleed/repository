<template>
<ArabicLangSwitcher></ArabicLangSwitcher>
  <form @submit.prevent="userLogin()" class="form" id="kt_login_signin_form">
        <div class="container-fluid bg-white p-0 m-0">
            <div class="row m-0 h-screen w-100">
                <div dir="rtl" class="col-5 d-flex flex-column h-screen">
                    <div class="d-flex justify-content-center h-screen">
                        <div class="w-4/6 d-flex align-items-center h-auto" style="max-width: 380px;">
                            <div class="container-fluid p-0 m-0">
                                <div class="flex flex-col justify-center text-center w-100">
                                    <img src="https://res.cloudinary.com/dlh4c743j/image/upload/v1692533967/ss-logo_tpetsd.webp" alt="Logo" 
                                        class="mb-4 self-center"
                                        style="width: 144px;" 
                                        />

                                        <div class="mb-6">
                                          <span class="text-xl font-medium">قم بتسجيل الدخول إلى لوحة تحكم Silky Systems</span>
                                        </div>
                                </div>

                                <div class="form-group mt-3">
                                    <span>البريد الألكتروني <span class="text-red-400">*</span></span>
                                    <input class="form-control height-42 py-5" v-model="user.email" type="email" placeholder="eg. email@gmail.com" name="email" id="email" autofocus autocomplete="off" />
                                    <br/><span class="text-sm text-red-400" v-if="v$.user.email.$error"> {{ v$.user.email.$errors[0].$message }}</span>
                                  </div>

                                <div class="form-group mt-3">
                                  <span>كلمة المرور <span class="text-red-400">*</span></span>
                                    <input class="form-control height-42" v-model="user.password" type="password" placeholder="*********" autocomplete="off" name="password" id="password" />
                                    <br/><span class="text-sm text-red-400" v-if="v$.user.password.$error"> {{ v$.user.password.$errors[0].$message }}</span>
                                  </div>

                                <div class="form-group flex justify-center mb-6">
                                    <div class="checkbox-inline justify-center ml-14">
                                        <label class="checkbox mr-0 ml-1 flex remember_me">
                                            <input type="checkbox" name="remember"/>
                                            <span class="m-0"></span>
                                        </label>
                                        <span class="text-lg">تذكرني ؟</span>
                                    </div>
                                    <div class="forgot-password mr-16">
                                        <router-link to="/ar-forgotPassword"
                                            class="text-primary text-lg ml-1">
                                            هل نسيت كلمة المرور ؟
                                        </router-link>
                                    </div>
                                </div>
                                <div class="form-group mt-3 text-center">
                                    <button type="submit" id="kt_login_signin_submit" class="btn btn-primary btn-primary-login height-42 btn-block text-lg font-weight-bold py-4 mb-3">تسجيل الدخول</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mb-5">
                        <router-link to="t" class="badge text-base badge-primary">الذهاب ألي صفحة دخول العملاء</router-link>
                    </div>
                    <div class="d-flex justify-content-center pb-4">
                        <div class="d-flex align-items-end">
                            <div class="text-center">
                                كل الحقوق محفوظة لدي <a href="https://silkysys.com" target="_blank"
                                    class="text-primary ml-1">Silky Systems</a></div>
                        </div>
                    </div>
                </div>
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
                              <h2 v-for="(titleSlide, index) in titleSlides" :key="index" class="text-primary text-5xl">
                                <div v-show="currentSlide === index + 1">{{ titleSlide }}</div>
                              </h2>
                              <span v-for="(spanSlide, index) in spanSlides" :key="index" class="text-2xl px-1">
                                <div v-show="currentSlide === index + 1">{{ spanSlide }}</div>
                              </span>
                            </div>
                          </Slide>
                        </Carousel>
                      </div>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
import ArabicLangSwitcher from "@/components/ArabicLangSwitcher.vue"
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
       titleSlides : ["إدارة محسنة للسائق والمركبات", "إدارة التسليم من و إلى", "أفضل إدارة شحنة"],
     spanSlides : [
      "إدارة وتتبع كل التفاصيل المحيطة بأسطولك مع تعزيز التواصل بين مديري الأسطول والمالكين والسائقين والفنيين والمسؤولين وغيرهم", 
      "وفر الوقت وقلل التكاليف وتبسيط المهام من خلال أتمتة شاملة وقناة اتصال واحدة بين فريقك وأسطولك وعملائك.", 
      "نحن نقدم 52 نوعًا مختلفًا من نقاط التفتيش التي تساعد في تتبع شحناتك بكفاءة ، وتساعد على زيادة عدد وظائف التوصيل وتحسين عمليات التسليم في الوقت المناسب"
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
        this.login({
          login: this.user.email,
          password: this.user.password
        });
      }
    }
  }
};
</script>

<style scoped>
@import "@/assets/material-icons.min.css";
@import "@/assets/side-menu.css";
@import "@/assets/style.bundle.css";

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
    left: 0;
    width: 100%;
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

</style>