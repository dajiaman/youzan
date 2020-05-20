<template>
  <div class="shared-second-sidebar">
    <h2 class="second-sidebar-title">商品管理</h2>

    <div>
      <a-menu
        style="width: 132px"
        :default-selected-keys="['sub4']"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
      >
        <a-sub-menu v-for="(item, index) in menus" :key="index">
          <span slot="title"><span>{{item.title}}</span></span>
            <a-menu-item  v-for="(item2, index2) in item.children" :key="index2">
              {{item2.title}}
            </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openKeys: ['sub4'],
    }
  },
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val)
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e)
    },
    titleClick(e) {
      console.log('titleClick', e)
    },
  },
}
</script>

<style lang="less">
.shared-second-sidebar {
  width: 132px;
  height: 100%;

  flex: 0 0 132px;
  max-width: 132px;
  min-width: 132px;

  background: #fff;
  border-right: 1px solid #ebedf0;

  .second-sidebar-title {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 56px;
    -moz-box-flex: 0;
    flex: 0 0 56px;
    padding-left: 28px;
    width: 100%;
    height: 56px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #ebedf0;
    font-size: 14px;
    color: #323233;
    line-height: 56px;
    font-weight: 500;

    margin-bottom: 0;
  }
}
</style>
