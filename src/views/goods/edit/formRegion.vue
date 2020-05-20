<template>
  <div>
      <div class="goods-edit__region">
        <div class='goods-edit__region--inner'>
          <div class="goods-edit__region-title">
            <div class="goods-edit__region-title--inner">{{ title }}</div>
          </div>
          <div class="goods-edit__region-content">
            <div class="goods-edit__region-content--inner">
              <slot>

              </slot>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
.goods-edit__region-title {
    background-color: #f8f8f8;
    font-size: 14px;
    font-weight: 700
}

.goods-edit__region-title--inner {
    padding: 10px
}

.goods-edit__region-content {
    font-size: 14px
}

.goods-edit__region-content--inner {
    padding: 20px 0 10px
}

</style>
