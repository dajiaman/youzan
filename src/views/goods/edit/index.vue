<template>
  <div class="goods-edit">
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <FormRegion title="基本信息">
        <template slot>
          <a-form-item label="商品名">
            <a-input
              v-decorator="[
                'title',
                {
                  rules: [{ required: true, message: 'qing' }],
                },
              ]"
            />
          </a-form-item>

          <a-form-item label="商品类目">
            <a-select default-value="1">
              <a-select-option value="1">
                Option 1
              </a-select-option>
              <a-select-option value="2">
                Option 2
              </a-select-option>
              <a-select-option value="3">
                Option 3
              </a-select-option>
            </a-select>
            <div class="help-block">商品类目及类目细项 <a>点此查看</a></div>
          </a-form-item>

          <a-form-item label="分享描述">
            <a-input v-decorator="['share_desc']" />
            <div class="help-block">
              微信分享给好友时会显示，建议36个字以内 <a>查看示例</a>
            </div>
          </a-form-item>

          <a-form-item label="商品卖点">
            <a-input v-decorator="['share_desc']" />
            <div class="help-block">
              在商品详情页标题下面展示卖点信息，建议60个字以内 <a>查看示例</a>
            </div>
          </a-form-item>

          <a-form-item label="商品图">
            <a-upload
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <a-icon type="plus" />
                <div class="ant-upload-text">
                  上传
                </div>
              </div>
            </a-upload>
            <div class="help-block">
              建议尺寸： 800*800像素，你可以拖拽图片调整顺序，最多上传15张
            </div>
          </a-form-item>

          <a-form-item label="商品分组">
            <a-select default-value="1">
              <a-select-option value="1">
                Option 1
              </a-select-option>
              <a-select-option value="2">
                Option 2
              </a-select-option>
              <a-select-option value="3">
                Option 3
              </a-select-option>
            </a-select>
            <div class="help-inline">
              刷新
            </div>
          </a-form-item>
        </template>
      </FormRegion>

      <FormRegion title="价格库存">
        <template slot>
          <a-form-item label="价格">
            <a-input-number addon-before="￥" default-value="mysite" />
          </a-form-item>

          <a-form-item label="划线价">
            <a-input />
            <div class="help-block">
              商品没有优惠的情况下，划线价在商品详情会以划线形式显示
            </div>
          </a-form-item>

          <a-form-item label="库存扣减">
            <a-radio-group v-decorator="['radio-group']">
              <a-radio value="a">
                拍下减库存
              </a-radio>
              <div class="help-block">
                买家提交订单，扣减库存数量，可能存在
              </div>

              <a-radio value="b">
                付款减库存
              </a-radio>

              <div class="help-block">
                买家支付成功，扣减库存数量，可能存在
              </div>
            </a-radio-group>
          </a-form-item>
        </template>
      </FormRegion>
    </a-form>
  </div>
</template>

<script>
import FormRegion from './formRegion'

export default {
  components: {
    FormRegion,
  },
  data() {
    return {
      form: this.$form.createForm(this),

      imageUrl: '',
    }
  },
}
</script>

<style lang="less">
.goods-edit .help-block {
  line-height: 14px;
  font-size: 14px;
  margin-top: 6px;
  margin-bottom: 0;
  color: #999;
}

.goods-edit .help-inline {
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
}
</style>
