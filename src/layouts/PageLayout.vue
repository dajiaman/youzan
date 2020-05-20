<template>
  <a-layout :class="{ 'ant-layout-has-sider': true }">

    <SecondSidebar :menus="secondMenu"></SecondSidebar>

    <a-layout>
      <div class="app-third-sidebar">
        <s-bread></s-bread>
      </div>

      <a-layout-content :style="{ margin: '24px 16px 0', minHeight: 'auto' }">
        <div
          :style="{ padding: '16px', background: '#fff', minHeight: '360px' }"
          class="clearfix"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import SecondSidebar from '@/components/SecondSidebar/index.vue'

import SBread from '@/components/tools/Breadcrumb'

import  { menus } from '@/menu/goods_menu'

export default {
  data(){
    return {
      secondMenu: []
    }
  },
  components: {
    SecondSidebar,
    SBread,
  },
  created () {
    this.secondMenu = menus;
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint(broken) {
      console.log(broken)
    },
  },
}
</script>

<style lang="less">
@import '../utils/utils.less';

.app-third-sidebar {
  height: 56px;
  min-width: 750px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  flex: 0 0 auto;

  padding: 0 100px 0 5px;

  .breadcrumb {
    padding: 16px;
  }
}
</style>
