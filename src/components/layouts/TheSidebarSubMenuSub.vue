<template>
    <div 
      class="px-5 flex items-center py-3 cursor-pointer"
      :class="{'color-primary': activeMenu, 'group hover:bg-gray-50': !activeMenu}"
      @click="onClick">
      <tw-icon 
        :name="icon" 
        class="icon w-5 h-5 text-gray-600 group-hover:text-gray-900"
        :class="[iconClass, {'color-primary': activeMenu}]" />
      <div class="pl-4 flex-grow flex items-center justify-between">
        <div 
          class="text text-sm text-gray-600 font-medium group-hover:text-gray-800"
          :class="{'color-primary': activeMenu}">
          {{ text }}
        </div>
        <tw-icon
          v-if="subMenuExists"
          name="heroicons-solid:chevron-down"
          class="w-5 h-5 text-gray-600 transform transition duration-100"
          :class="{'rotate-180': showSubMenu}" />  
      </div>
    </div>
    <div 
      v-if="subMenuExists" 
      class="pl-9 h-0 overflow-hidden"
      :class="{'h-auto': showSubMenu}">
      <slot name="sub-menu" />
    </div>
    <div 
      v-if="subMenuExists" 
      class="pl-9 h-0 overflow-hidden"
      :class="{'h-auto': showSubMenu}">
      <slot name="sub-sub" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'TheSidebarSubMenuItem',
    props: {
      text: {
        type: String,
        required: true
      },
      route: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        activeSubMenu: false
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler(val) {
          if (val.name == this.route?.name || val.path == this.route?.path) {
            this.$parent.setActiveMenu(true)
            this.activeSubMenu = true
          } else {
            this.activeSubMenu = false
          }
        }
      }
    },
    methods: {
      onClick() {
        if (this.route) this.$router.push(this.route)
        else console.log('No action found!')
      }
    }
  }
  </script>