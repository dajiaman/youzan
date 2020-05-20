<template>
  <a-layout id="layout" :class="{ 'ant-layout-has-sider': true }">

    <Sidebar></Sidebar>

    <a-layout>
      <router-view></router-view>
    </a-layout>
  </a-layout>
</template>
<script>

import Sidebar from '@/components/Sidebar/index.vue'

export default {
  components: {
    Sidebar
  },
  methods: {},
}
</script>

<style>
#layout {
  height: 100%;
  flex-direction: row;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
