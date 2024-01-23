import authenticateUser from '../auth/authenticateUser'
import checkUserSession from '@/auth/checkUserSession'
// Import En Login Routes
import EN_Signin from '@/pages/auth/en/Signin.vue'
import EN_ForgotPassword from '@/pages/auth/en/ForgotPassword.vue'
import EN_CheckCode from "@/pages/auth/en/CheckCode.vue"
import EN_ChangePassword from '@/pages/auth/en/ChangePassword.vue'
// Import Ar Login Routes
import Test from '@/pages/auth/ar/test.vue'
import AR_Signin from '@/pages/auth/ar/Signin.vue'
import AR_ForgotPassword from '@/pages/auth/ar/ForgotPassword.vue'
import AR_CheckCode from "@/pages/auth/ar/CheckCode.vue"
import AR_ChangePassword from '@/pages/auth/ar/ChangePassword.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Dashboard from '@/pages/dashboard/Home.vue'
import Branches from '@/pages/masters/Branches.vue'
import Discounts from '@/pages/masters/Discounts.vue'
import DiscountsEdit from '@/pages/masters/DiscountsEdit.vue'
import Reports from '@/pages/reports/Reports.vue'
import Settings from '@/pages/settings/Settings.vue'
import Transactions from '@/pages/transactions/Transactions.vue'
import GeneralData from '@/pages/GeneralData.vue'
import Error403 from '@/pages/error/403.vue'
import Error404 from '@/pages/error/NotFound.vue'
const ar = localStorage.getItem("lang") == "ar"
const routes = [
  // English Login Routes
  {
    path: '/',
    component: ar ? AR_Signin : EN_Signin,
    beforeEnter: checkUserSession,
    redirect: ar ? "ar-adminLogin" : "en-adminLogin",
    children: [
      {
        path: ar ? "ar-adminLogin" : "en-adminLogin",
        component: ar ? AR_Signin : EN_Signin,
      }
    ],
  },
  {
    path: '/en-adminLogin',
    beforeEnter: checkUserSession,
    name: 'en-adminLogin',
    component: EN_Signin,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/en-forgotPassword',
    beforeEnter: checkUserSession,
    name: 'en-forgotPassword',
    component: EN_ForgotPassword,
  },
  {
    path: '/en-checkCode',
    component: EN_CheckCode
  },
  {
    path: '/en-updatePassword',
    component: EN_ChangePassword
  },
  // Arabic Login Routes
  {
    path: '/ar-adminLogin',
    beforeEnter: checkUserSession,
    name: 'ar-adminLogin',
    component: AR_Signin,
  },
  {
    path: '/ar-forgotPassword',
    beforeEnter: checkUserSession,
    name: 'ar-forgotPassword',
    component: AR_ForgotPassword,
  },
  {
    path: '/ar-checkCode',
    component: AR_CheckCode
  },
  {
    path: '/ar-updatePassword',
    component: AR_ChangePassword
  },
  {
    path: '/',
    redirect: '/dashboard',
    beforeEnter: authenticateUser,
    component: DefaultLayout,
    children: [
      {
        path: 'dashboard',
        alias: '',
        name: 'dashboard',
        meta: {
          screen: "Dashboard",
          permission: "dashboard"
        },
        component: Dashboard
      },
      {
        path: 'branches',
        alias: '',
        name: 'branches',
        meta: {
          screen: "Branches",
          permission: "branches"
        },
        component: Branches
      },
      {
        path: 'hub/create',
        alias: '',
        name: 'discounts',
        meta: {
          screen: "Discounts",
          permission: "discounts"
        },
        component: Discounts
      },
      {
        path: 'hub/:id/edit',
        alias: '',
        name: 'discountsEdit',
        meta: {
          screen: "Discounts",
          permission: "discounts"
        },
        component: DiscountsEdit
      },
      {
        path: 'hub',
        alias: '',
        name: 'reports',
        meta: {
          screen: "Reports",
          permission: "reports"
        },
        component: Reports
      },
      {
        path: 'settings',
        alias: '',
        name: 'settings',
        meta: {
          screen: "Settings",
          permission: "settings"
        },
        component: Settings
      },
      {
        path: 'data',
        alias: '',
        name: 'transactions',
        meta: {
          screen: "Transactions",
          permission: "transactions"
        },
        component: Transactions
      },
      {
        path: 'data/edit',
        alias: '',
        name: 'generaldata',
        component: GeneralData
      }
    ]
  },
  {
    path: '/access-forbidden',
    name: 'access-forbidden',
    component: Error403,
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error404,
  },
]

export default routes