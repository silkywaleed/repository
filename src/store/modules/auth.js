import axios from 'axios'
import NProgress from "nprogress";

const url = import.meta.env.VITE_APP_API_URL

export default {
  state: {
    adminUser: [],
    newPassword: [],
    errorUser: [],
    forgotPasswordResponse: [],
    checkCodeResponse: [],
    updatePasswordResponse: []
  },
  getters: {
    adminUser: (state) => state.adminUser,
    forgotPasswordResponse: (state) => state.forgotPasswordResponse,
    checkCodeResponse: (state) => state.checkCodeResponse,
    updatePasswordResponse: (state) => state.updatePasswordResponse
  },
  mutations: {
    setError(state, data){
      state.errorUser = data;
    },
    SET_USER_DATA(state, data) {
      state.adminUser = data;
    },
    SET_FORGOT_PASSWORD_RESPONSE(state, data) {
      state.forgotPasswordResponse = data;
    },
    SET_CHECK_CODE_RESPONSE(state, data) {
      state.checkCodeResponse = data;
    },
    SET_UPDATE_PASSWORD_RESPONSE(state, data) {
        state.updatePasswordResponse = data;
    },
  },
  actions: {
    // async login({ commit }, data) {
    //   this.dispatch('updateLoaderStatus', true)
    //   await axios.post("users/login", data).then((response) => {
    //     this.dispatch('updateLoaderStatus', false)
    //     if (response.data.status) {
    //       localStorage.setItem("userInfo", JSON.stringify(response.data.response));
    //     }
    //     commit("SET_USER_DATA", response.data);
    //   });
    // },

    async login({ commit }, data) {
      NProgress.start();
      this.dispatch('updateLoaderStatus', true)
      const response = await axios.post(
        `${url}api/admin/auth/login`,
        data
      );
      if (response.data.status === 200 && response.data.message === "Success") {
        NProgress.done();
        let dataResponse = response.data.data;
        localStorage.setItem("lang", dataResponse.locale);
  
        localStorage.setItem("token", dataResponse.token);
        localStorage.setItem("tenant_id", dataResponse.tenant_id);
      // Dummy response
      const login_response = {
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
            "sub_menus": [],
            "sub_sub": [{ "sub_menus": [ ] }] 
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
            ],
            "sub_sub": [
              { "id": 1, "title": "Dashboard", "link": "/dashboard", "icon_class": "heroicons-outline:home", "sort_order": 1, 
            "permissions": [ 
              { "id": 1, "title": "dashboard", "description": "View Dashboard", "admin_menu_id": 1, "admin_sub_menu_id": null, "is_parent": 1 } 
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
            ] ,
            "sub_sub": [{ "sub_menus": [ ] }] 
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
            ] ,
            "sub_sub": [{ "sub_menus": [ ] }] 
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
            ] ,
            "sub_sub": [{ "sub_menus": [ ] }] 
            
          }
        ],
        test: [
          
        ]
      }
        localStorage.setItem("userInfo", JSON.stringify(login_response))
        window.location.reload()
      } else {
        NProgress.done();
        commit("setError", response.data.message);
        console.log("setError", response.data.status);
      }
      commit("SET_USER_DATA", response.data);
    },

    async logout({ commit }, data) {
      NProgress.start();
      localStorage.removeItem("userInfo");
      localStorage.removeItem("redirection_url")
      localStorage.removeItem("token")
      commit("SET_USER_DATA", []);
      NProgress.done();
      window.location.href = "/";
    },

    async getResetPasswordToken({ commit }, data) {
      NProgress.start();
      await axios.post(`${url}api/admin/password/code/send`, data).then((response) => {
        NProgress.done();
        commit("SET_FORGOT_PASSWORD_RESPONSE", response.data);
      },
        (error) => {
          NProgress.done();
          commit("SET_FORGOT_PASSWORD_RESPONSE", error.response.data);
        }
      );
    },

    async checkCodeToken({ commit }, data) {
      NProgress.start();
      await axios.post(`${url}api/admin/password/code/check`, data).then((response) => {
        NProgress.done();
        commit("SET_CHECK_CODE_RESPONSE", response.data);
      },
        (error) => {
          NProgress.done();
          commit("SET_CHECK_CODE_RESPONSE", error.response.data);
        }
      );
    },

    async checkUpdatePassword({ commit }, data) {
      NProgress.start();
      await axios.post(`${url}api/admin/password/reset`, data).then((response) => {
        NProgress.done();
        commit("SET_UPDATE_PASSWORD_RESPONSE", response.data);
      },
        (error) => {
          NProgress.done();
          localStorage.removeItem("codeUser");
          commit("SET_UPDATE_PASSWORD_RESPONSE", error.response.data);
        }
      );
    },

  },
};
