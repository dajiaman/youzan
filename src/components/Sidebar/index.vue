<template>
  <div class="shared-sidebar">
    <nav role="main" id="shared-first-sidebar">
      <div class="logo"></div>
      <ul id="shared-first-sidebar-nav">
        <li>
          <router-link :to="{ path: '/dashboard' }"><a-icon type="user" ></a-icon>概况</router-link>
        </li>
         <li>
          <router-link :to="{ path: '/goods/manage/list' }"><a-icon type="user" ></a-icon>商品</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.shared-sidebar {
  display: flex;
  width: 92px;
  height: 100%;
  background: #444;

  min-width: 92px;
  max-width: 92px;
  flex: 0 0 92px;
}

  #shared-first-sidebar{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 92px;
    background-color: #444;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    overflow: hidden;
    z-index: 2;
  }

  #shared-first-sidebar-nav {
    margin-top: 56px;
    padding-right: 20px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    width: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    -moz-box-flex: 1;
    flex: 1 1 100%;
    overflow-x: hidden;
    // overflow-y: scroll;
    padding: 0;
}

#shared-first-sidebar-nav li {
    width: 92px;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
}

#shared-first-sidebar-nav li.active {
    background: #fff;
}

#shared-first-sidebar-nav li a {
    color: #c8c9cc;
    display: block;
    padding-left: 18px;
    text-decoration: none;
}

#shared-first-sidebar-nav li a.router-link-active {
    color: #333;
    background: #fff;
}
</style>
