import axios from 'axios'
import NProgress from "nprogress";

const url = import.meta.env.VITE_APP_API_URL

export default {
    state: {
        areasResponse: {},
        areasToast: {},
    },
    getters: {
        areasResponse: (state) => state.areasResponse,
        areasToast: (state) => state.areasToast,
    },
    mutations: {
        SET_SETTINGS(state, data) {
            state.areasResponse = data;
        },
        SET_HUB(state, data) {
            state.areasResponse = data;
        },
        SET_TOAST(state, data) {
            state.areasToast = data;
        }
    },
    actions: {
        async getSettings({ commit }, data) {
            this.dispatch('updateLoaderStatus', true)
            await axios.get(`${url}api/admin/general/list`, data)
            .then(
                (res) => {
                    // if (res?.data?.code == 401) this.dispatch('logout');
                    if (res?.data) commit("SET_SETTINGS", res.data);
                    console.log(res.data)
                    this.dispatch('updateLoaderStatus', false)
                },
                (error) => {
                    // if (error?.response?.status == 401) this.dispatch('logout');
                    commit("SET_SETTINGS", {});
                    console.log(error)
                    this.dispatch('updateLoaderStatus', false)
                }
            );
        },

        async addSettings({ commit }, data) {
            NProgress.start();
            await axios.post(`${url}api/admin/general/submit`, data)
            .then(
                (res) => {
                    // if (res?.data?.code == 401) this.dispatch('logout');
                    if (res?.data) commit("SET_SETTINGS", res.data);
                    if (res?.data?.message) commit("SET_TOAST", res.data.message);
                    NProgress.done();
                },
                (error) => {

                    // if (error?.response?.status == 401) this.dispatch('logout');
                    commit("SET_SETTINGS", {});
                    commit("SET_TOAST", {}); 
                    NProgress.done();
                }
            );
        },

        async addHub({ commit }, data) {
            NProgress.start();
            await axios.post(`${url}api/admin/hub/create`, data,
            {
                headers: {'X-Tenant': localStorage.getItem('tenant_id'),'Authorization': `Bearer ${localStorage.getItem('token')}`}
            }
            )
            .then(
                (res) => {
                    // if (res?.data?.code == 401) this.dispatch('logout');
                    if (res?.data) commit("SET_HUB", res.data);
                    if (res?.data?.message) commit("SET_TOAST", res.data.message);
                    console.log(res.data.message)
                    NProgress.done();
                },
                (error) => {

                    // if (error?.response?.status == 401) this.dispatch('logout');
                    commit("SET_HUB", {});
                    commit("SET_TOAST", {}); 
                    console.log('error')
                    NProgress.done();
                }
            );
        },

        // async updateArea({ commit }, data) {
        //     NProgress.start();
        //     await axios.put(`areas/${data.id}`, data.form_data)
        //     .then(
        //         (res) => {
        //             // if (res?.data?.code == 401) this.dispatch('logout');
        //             if (res?.data?.response) commit("SET_SETTINGS", res.data.response);
        //             if (res?.data) commit("SET_TOAST", res.data);
        //             NProgress.done();
        //         },
        //         (error) => {
        //             NProgress.done();
        //             // if (error?.response?.status == 401) this.dispatch('logout');
        //             commit("SET_SETTINGS", {});
        //             commit("SET_TOAST", {}); 
        //             NProgress.done();
        //         }
        //     );
        // },

        // async deleteArea({ commit }, id) {
        //     NProgress.start();
        //     await axios.delete(`areas/${id}`)
        //     .then(
        //         (res) => {
        //             // if (res?.data?.code == 401) this.dispatch('logout');
        //             if (res?.data?.response) commit("SET_SETTINGS", res.data.response);
        //             if (res?.data) commit("SET_TOAST", res.data);
        //             NProgress.done();
        //         },
        //         (error) => {
        //             // if (error?.response?.status == 401) this.dispatch('logout');
        //             commit("SET_SETTINGS", {});
        //             commit("SET_TOAST", {}); 
        //             NProgress.done();
        //         }
        //     );
        // }
    }
}