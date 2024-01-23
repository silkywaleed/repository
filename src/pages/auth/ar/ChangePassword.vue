<template>
    <form @submit.prevent="onUpdatePassword()" class="form" id="kt_login_signin_form" method="POST">
        <div class="container-fluid bg-third p-0 m-0">
            <div class="row h-screen w-100">
                <div class="col d-flex flex-column h-screen">
                    <div class="d-flex justify-content-center h-screen">
                        <div class="w-4/6 d-flex align-items-center h-auto" style="max-width: 500px;">
                            <div dir="rtl" class="container-fluid py-8 px-14 bg-white">
                                <div class="flex flex-col text-center justify-center w-100">
                                    <img src="https://res.cloudinary.com/drcfigqqr/image/upload/v1693829638/Security_On-pana_1_ikaias.webp" alt="Logo" class="w-80 self-center"/>
                                    <h2 class="text-primary text-responsive">
                                      اعد ضبط كلمه السر
                                        </h2>
                                  </div>
                                  <div class="form-group mt-3">
                                    <span>كلمة المرور الجديدة <span class="text-red-400">*</span></span>
                                    <input class="form-control height-42 py-5" type="Password" v-model="password" name="oldpass" placeholder="Password" />
                                    <br/><span class="text-sm text-red-400" v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }}</span>
                                </div>
                                <div class="form-group mt-3">
                                    <span>أعد ادخال كلمة المرور الجديدة <span class="text-red-400">*</span></span>
                                    <input class="form-control height-42 py-5" type="Password" v-model="confirm_password" name="newpass" placeholder="Password Confirmed" />
                                    <br/> <span class="text-sm text-red-400" v-if="v$.confirm_password.$error"> {{ v$.confirm_password.$errors[0].$message }}</span>
                                </div>

                                <div class="form-group mt-3 text-center">
                                    <button type="submit" class="btn btn-primary btn-primary-login height-42 btn-block text-lg font-weight-bold mb-3">تحديث كلمة المرور</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center pb-4">
                        <div class="d-flex align-items-end">
                            <div class="text-center">
                                All Right Too <a href="https://silkysys.com" target="_blank"
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
import { required, helpers } from "@vuelidate/validators";

console.log(parseFloat(JSON.parse(localStorage.getItem('codeUser'))))

export default {
  name: "UpdatePassword",
  data() {
    return {
      v$: useValidate(),
      password: "",
      confirm_password: "",
      code: parseFloat(JSON.stringify(localStorage.getItem('codeUser')))
    }
  },
  validations() {
    return {
      password: { required: helpers.withMessage(this.$root.getErrorMessage('required', 'password'), required) },
      confirm_password: { required: helpers.withMessage(this.$root.getErrorMessage('required', 'password Confirmed'), required) }
    }
  },
  computed: {
        ...mapGetters(["updatePasswordResponse"]),
    },
  methods: {
    ...mapActions(["checkUpdatePassword"]),

    onUpdatePassword() {
      this.v$.$validate()
      if(!this.v$.$error) {
        this.checkUpdatePassword({
                    code: this.code,
                    password: this.password,
                    password_confirmation: this.confirm_password,
                });
      }
    }
  },
  watch: {
    updatePasswordResponse(data) {
            if(data.status) {
                this.$toast.success(data.message);
                this.$router.push('/');
            } else {
                console.log(this.code)
                this.$toast.error(data.message);
                this.$router.push('/ar-checkCode');
            }
        }
    },
    mounted() {

    },
};
</script>

<style scoped>
@import "@/assets/material-icons.min.css";
@import "@/assets/side-menu.css";
@import "@/assets/style.bundle.css";

.bg-third {
    background: #e9f0f8;
}

.text-responsive {
    font-size: 2.25rem;
    line-height: 2.5rem;
}


@media only screen and (max-width: 768px) {
.text-responsive {
    font-size: 1.3rem;
    line-height: 1rem;
}

}

</style>