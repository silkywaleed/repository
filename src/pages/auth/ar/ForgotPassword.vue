<template>
  <form @submit.prevent="getPasswordResetLink()" class="form" id="kt_login_signin_form" method="POST">
        <div class="container-fluid bg-third p-0 m-0">
            <div class="row h-screen w-100">
                <div class="col d-flex flex-column h-screen">
                    <div dir="rtl" class="d-flex justify-content-center h-screen">
                        <div class="w-5/6 d-flex align-items-center h-auto" style="max-width: 500px;">
                            <div class="container-fluid py-8 px-14 bg-white m-0">
                                <div class="flex flex-col text-center justify-center w-100">
                                    <img src="https://res.cloudinary.com/dlh4c743j/image/upload/v1692623935/Forgot_password-cuate_1_1_1_f0omyp.webp" alt="Logo" class="w-80 self-center"/>
                                        <h2 class="text-primary text-5xl text-responsive">
                                            هل نسيت كلمة السر
                                        </h2>
                                        <span class="text-preresponsive px-1 py-6">
                                            سنرسل رمز التحقق تحقق منه الآن
                                        </span>
                                </div>
                                <div class="form-group mt-3 mb-6">
                                    <span>البريد الإلكتروني <span class="text-red-400">*</span></span>
                                    <input class="form-control height-42 py-5" v-model="admin_email" type="email" name="email" id="email" autofocus autocomplete="off" />
                                    <br/><span class="text-sm text-red-400" v-if="v$.admin_email.$error"> {{ v$.admin_email.$errors[0].$message }}</span>
                                </div>

                                <div class="form-group text-center">
                                    <button type="submit" class="btn btn-primary btn-primary-login height-42 btn-block font-weight-bold mb-3">أرسال</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="text-center mb-5">
                        <router-link :to="Tr.i18nRoute({ name: 'adminLogin' })" class="badge badge-primary text-wrap ml-2">Back to admin login</router-link>
                        <router-link :to="Tr.i18nRoute({ name: 'customerLogin' })" class="badge badge-primary text-wrap ml-2">Back to customer login</router-link>
                    </div> -->
                    <div class="d-flex justify-content-center pb-4">
                        <div class="d-flex align-items-end">
                            <div class="text-center">
                                كل الحقوق محفوظة لدي <a href="https://silkysys.com" target="_blank"
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

export default {
    data() {
        return {
            v$: useValidate(),
            admin_email: ""
        }
    },
    validations() {
        return {
            admin_email: { required: helpers.withMessage(this.$root.getErrorMessage('required', 'البريد الإلكتروني'), required), email: helpers.withMessage(this.$root.getErrorMessage('email', 'Email'), email) }
        };
    },
    computed: {
        ...mapGetters(["forgotPasswordResponse"]),
    },
    methods: {
        ...mapActions(["getResetPasswordToken"]),

        getPasswordResetLink() {
            this.v$.$validate();
            if(!this.v$.$error) {
                this.getResetPasswordToken({
                    email: this.admin_email
                });
            }
        }
    },
    watch: {
        forgotPasswordResponse(data) {
            if(data.status) {
                this.$toast.success(data.message);
                this.$router.push('/ar-checkCode');
            } else {
                this.$toast.error(data.message);
            }
        }
    },
    mounted() {

    },
}
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

.text-preresponsive {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

@media only screen and (max-width: 768px) {
.text-responsive {
    font-size: 1.3rem;
    line-height: 1rem;
}

.text-preresponsive {
    font-size: 1rem;
    line-height: 1rem;
}
}

</style>