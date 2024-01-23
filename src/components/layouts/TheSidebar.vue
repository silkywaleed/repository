<template>
  <!-- Toggle sidebar button -->
  <button 
    class="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 lg:hidden"
    @click="toggleSidebar">
    <tw-icon 
      name="heroicons-solid:menu-alt-4" 
      class="btn-toggle w-6 h-6 text-white" 
      :class="{'opacity-0': showSidebar}" />
    <tw-icon 
      name="heroicons-solid:x" 
      class="btn-toggle w-6 h-6 text-white"
      :class="{'opacity-0': !showSidebar}" />
  </button>

  <!-- Sidebar Overlay -->
  <!-- <div 
    class="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden" 
    :class="{'hidden': !showSidebar}" 
    @click="showSidebar = false" /> -->
    
    <!-- Header -->
    <div class="flex flex-row overflow-hidden border-gray-200 bg-white z-10 min-h-screen"
    :class="[isOpen == true ? 'lg:w-1/5 ' : 'lg:w-1/12 ', {'hidden': allowSidebarHide && !showSidebar}]"
    >
        <div class="bg-blue-800 h-screen py-8 text-center text-white"
        :class="[isOpen == true ? 'lg:w-1/5 ' : 'lg:w-2/5 ']"
        >
          <span>Profile</span>
          <div class="w-full flex mt-3 justify-content-center justify-center">
            <img @click="signout()" src="@/assets/profile_pic.png" alt="Avatar" class="w-8 h-8 rounded-full cursor-pointer">
          </div>
        </div>

        <div class="relative min-h-screen"
        :class="[isOpen == true ? 'w-full ' : 'w-4/5 ']"
        >
        
        <header class="text-center py-4 px-5 duration-300" 
      :class="isOpen == true ? 'lg:w-64 ' : 'lg:w-20 '"
      >
      <svg v-on:click='isOpen = !isOpen' :class="{'hidden': showSidebar}" class="icon border
        cursor-pointer 
        w-9 h-9 z-10 bg-white
          text-black text-4xl rounded-full 
          absolute right-0 top-9
          group-hover:text-gray-900"  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
<path d="M24 44C35.02 44 44 35.02 44 24C44 12.98 35.02 4 24 4C12.98 4 4 12.98 4 24C4 35.02 12.98 44 24 44ZM18.42 22.94L25.48 15.88C25.78 15.58 26.16 15.44 26.54 15.44C26.92 15.44 27.3 15.58 27.6 15.88C28.18 16.46 28.18 17.42 27.6 18L21.6 24L27.6 30C28.18 30.58 28.18 31.54 27.6 32.12C27.02 32.7 26.06 32.7 25.48 32.12L18.42 25.06C17.82 24.48 17.82 23.52 18.42 22.94Z" fill="#021DA5"/>
</svg>
      </header>
      <!-- Menu -->
      <div class="mt-2">

        <menu-item
          icon="heroicons-outline:home" 
          :text="isOpen == false ? '' : 'Dashboard'" 
          route="/dashboard">
        </menu-item>

        <menu-item
          icon="heroicons-outline:home" 
          :text="isOpen == false ? '' : 'General Data'" 
          route="/general-data">
        </menu-item>

        <menu-item
          icon="heroicons-outline:home" 
          :text="isOpen == false ? '' : 'Activity'" 
          route="/dashboard">
        </menu-item>

        <menu-item
          icon="heroicons-outline:home" 
          :text="isOpen == false ? '' : 'Hubs'" 
          route="/hub">
        </menu-item>

        <menu-item
          icon="heroicons-outline:home" 
          :text="isOpen == false ? '' : 'Main Data'" 
          route="/data">
        </menu-item>
        

  <!-- <template #sub-menu>
                  <sub-menu-sub 
                    class="grid grid-cols-1"
                    text="sub_menu.title" 
                    route="/oi"
                  >
                </sub-menu-sub>
                <sub-menu-sub 
                    class="grid grid-cols-1"
                    text="sub_menu.title" 
                    route="/oi"
                  >
                </sub-menu-sub>
          </template> -->
        <!-- <template #sub-sub>
          <menu-item
          v-for="admin_menu in admin_menus"
          :key="admin_menu.id"
          :icon="admin_menu.icon_class" 
          :text="admin_menu.title" 
          :route="{path: admin_menu.link}">
            <template v-if=" admin_menu.sub_menus?.length > 0" #sub-menu>
              <sub-menu-sub 
                class="grid grid-cols-1"
                v-for="sub_menu in admin_menu.sub_menus"
                :key="sub_menu.id"
                :text="sub_menu.title" 
                :route="{path: sub_menu.link}"
              >
            </sub-menu-sub>
          </template>
          
        </menu-item>
          </template> -->
      </div>
        </div>
    </div>
   
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useRoute } from 'vue-router'
import MenuHeader from './TheSidebarMenuHeader.vue'
import MenuItem from './TheSidebarMenuItem.vue'
import SubMenuHeader from './TheSidebarSubMenuHeader.vue'
import SubMenuItem from './TheSidebarSubMenuItem.vue'
import SubMenuSub from './TheSidebarSubMenuSub.vue'
import { mapActions } from 'vuex';
export default {
  name: 'TheSidebar',
  data() {
    return {
      isOpen: true
    };
  },
  components: {
    MenuHeader,
    MenuItem,
    SubMenuHeader,
    SubMenuItem,
    SubMenuSub,
  },
  emits: ['visibility-change'],
  methods: {
    ...mapActions(["logout"]),

    signout() {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("redirection_url")
      localStorage.removeItem("token")
      window.location.href = "/";
      // this.logout({
      //   Token: JSON.parse(localStorage.getItem("userInfo")).token
      // });
    },
    setOpen() {
      this.open == false;
      console.log(open)
    },
  },
  setup(_, {emit}) {
    const showSidebar = ref(false)
    const toggleSidebar = () => showSidebar.value = !showSidebar.value
    watch(showSidebar, (val) => {
      emit('visibility-change', val)
    })

    const route = useRoute()
    watch(route, () => showSidebar.value = false)
   
    
    const widthBreakpoint = 1024 
    const { width: windowWidth } = useWindowSize()
    watch(windowWidth, (newWidth) => {
      if (newWidth < widthBreakpoint) showSidebar.value = false
    })

    const allowSidebarHide = computed(() => windowWidth.value < widthBreakpoint)

    const admin_menus = JSON.parse(localStorage.getItem("userInfo")).admin_menu
    const open = true
    // const setOpen = () => {
    //   !open
    //   console.log(open)
    // }

    watch(open)

    return {
      showSidebar,
      toggleSidebar,
      allowSidebarHide,
      admin_menus,
    }
  }
}
</script>

<style scoped>
.btn-toggle {
  @apply absolute left-1/2 top-1/2 transition duration-300 transform -translate-x-1/2 -translate-y-1/2;
}
</style>