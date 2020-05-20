<template>
  <a-card :bordered="false">
    <div :style="{ margin: '16px 0'}">
      <a-button type="primary" @click="publishGoods">发布商品</a-button>
    </div>

    <a-tabs default-active-key="1" type="card" @change="tabChange">
      <a-tab-pane tab="全部" key="1"></a-tab-pane>
      <a-tab-pane tab="销售中" key="2"></a-tab-pane>
      <a-tab-pane tab="已售罄" key="3"></a-tab-pane>
      <a-tab-pane tab="仓库中" key="4"></a-tab-pane>
    </a-tabs>

    <s-table
      size="default"
      :rowKey="(record) => record.id"
      :data="loadData"
      :columns="columns"
      :alert="true"
      :loading="tableLoading"
      :rowSelection="rowSelection"
      showPagination="auto"
      :scroll="{ x: 1000 }"
    >
      <div
        slot="title_slot"
        slot-scope="text, record"
        class="goods-name-wrapper"
      >
        <div class="goods-name-left">
          <img class="goods-image" :src="record.imageUrl" />
        </div>
        <div class="goods-name-right">
          <a-popover>
            <template slot="content">
              {{ record.title }}
            </template>
            <div>
              <a>{{ record.title }}</a>
              <a class="goods-info-title-edit"></a>
            </div>
          </a-popover>
        </div>
      </div>

      <div slot="visit_uv_pv" slot-scope="text, record">
        <p>访客数：{{ record.visitCountUv }}</p>
        <p>浏览量：{{ record.visitCountPv }}</p>
      </div>

      <div slot="price_slot" slot-scope="text, record">
        <span> {{ record.price | formatMoney }}</span>
          <a-popover trigger="click">
          <template slot="content">
            <a-input :value="record.price | formatMoney"  />
            <div class="shortcut-pop-links">
                 <a href="">保存</a>
                 <a-divider type="vertical"></a-divider>
              <a href="">取消</a>
            </div>

          </template>
          <a-icon type="edit"></a-icon>
        </a-popover>
      </div>


      <div slot="stock_slot" slot-scope="text, record">
         <span> {{ record.stock }}</span>
          <a-popover trigger="click">
          <template slot="content">
            <a-input :value="record.stock" />
            <div class="shortcut-pop-links">
                 <a href="">保存</a>
                 <a-divider type="vertical"></a-divider>
              <a href="">取消</a>
            </div>

          </template>
          <a-icon type="edit"></a-icon>
        </a-popover>
      </div>

      <span slot="action">
        <template>
          <a>编辑</a>
          <a-divider type="vertical"></a-divider>
          <a>推广</a>
        </template>
      </span>
    </s-table>
  </a-card>
</template>

<script>
import { STable } from '@/components'

export default {
  data() {
    return {
      tabKey: 1,
      tableLoading: false,

      // 查询参数
      queryParam: {},

      columns: [
        {
          title: '商品名称',
          scopedSlots: { customRender: 'title_slot' },
          width: 300,
          fixed: 'left'
        },
        {
          title: '价格（元）',
          dataIndex: 'price',
          sorter: true,
          scopedSlots: {customRender: 'price_slot'},
          width: 150
        },
        {
          title: '访问量',
          scopedSlots: { customRender: 'visit_uv_pv' },
          width: 150
        },
        {
          title: '库存',
          dataIndex: 'stock',
          scopedSlots: { customRender: 'stock_slot' },
          sorter: true,
           width: 150
        },{
          title: '销量',
          dataIndex: 'soldCount',
          sorter: true,
          width: 150
        },{
          title: '序号',
          dataIndex: 'num',
          sorter: true,
          width: 100,
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt',
          sorter: true,
          width: 160
        },
        {
          title: '操作',
          fixed: 'right',
          width: 150,
          scopedSlots: { customRender: 'action' },
        },
      ],

      selectedRowKeys: [],
      selectedRows: [],

      loadData: (paramter) => {
        console.log('loadData.parameter', paramter)
        return this.$http
          .get('/goods/manage/list', {
            params: paramter,
          })
          .then((res) => {
            console.log(res)

            return res.data
          })
      },
    }
  },
  filters: {
    formatMoney (value){
      return value / 100;
    }
  },
  components: {
    STable,
  },
  computed: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange,
      }
    },
  },

  created() {},

  methods: {
    tabChange(key) {
      this.tabKey = key;
      this.tableLoading = true
    },
    publishGoods(){
      this.$router.push({
        path: '/goods/edit'
      })
    }
  },
}
</script>

<style lang="less">
.goods-name-wrapper {
  display: flex;
  align-items: center;

  .goods-name-left {
    float: left;
    line-height: 60px;
    text-align: center;

    .goods-image {
      max-width: 60px;
      max-height: 60px;
      vertical-align: middle;
    }
  }

  .goods-name-right {
    flex: 1;
    margin-left: 10px;
    line-height: 18px;
  }
}
</style>
