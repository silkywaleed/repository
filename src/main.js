import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import '@/styles/app.css'
import '@purge-icons/generated'
import '@vueform/multiselect/themes/default.css'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import CustomDataTable from './components/CustomDataTable.vue';
import store from './store'
import Toaster from '@meforma/vue-toaster'
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import VueHtmlToPaper from './utils/vue-html-to-paper'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import JsonCSV from 'vue-json-csv'
import 'tw-elements';
import VueTelInput from 'vue3-tel-input'
import 'pusher-js'
// import { i18n } from "vue-i18n";
import Multiselect from '@vueform/multiselect'

const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['EG', 'SA', "AF", "AL", "AS"]
  }

const app = createApp(App)

app.component('date-picker', Datepicker);
app.component('downloadCsv', JsonCSV)
app.component('Multiselect', Multiselect)
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(Toaster, {position: 'top-right'})
app.use('custom-data-table', CustomDataTable)
app.use(VueSweetalert2)
app.use(VueHtmlToPaper)
app.use(VueTelInput, VueTelInputOptions);
app.use(store)
app.use(router)
// app.use(i18n);
app.mount('#app')