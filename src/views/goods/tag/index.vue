<template>
  <a-card :bordered="false">
    <div>
      <a-button type="primary">新建商品分组</a-button>
    </div>

    <s-table
    size="default"
    rowKey="id"
    :data="loadData"
    :columns="columns"
    :loading="tableLoading"
    showPagination="auto">

      <span slot="title_slot" slot-scope="text, record">
        <router-link :to="{path: '/'}">
        {{ record.isDefault ? "*" : ""}}
        {{record.title}}</router-link>
      </span>

      <span slot="action" slot-scope="text, record">
        <template>
          <a >编辑</a>

          <a-divider type="vertical" v-if="!record.isDefault"/>
          <a v-if="!record.isDefault">删除</a>
        </template>
      </span>

    </s-table>
  </a-card>
</template>

<script>
import { STable } from '@/components'

export default {
  data(){
    return {
      tableLoading: false,

      // 查询参数
      queryParam: {},

      columns: [{
        title: '分组名称',
        dataIndex: 'title',
        scopedSlots: { customRender: 'title_slot'}
      }, {
        title: '商品数',
        dataIndex: 'goodsCount',
        sorter: true
      }, {
        title: "创建时间",
        dataIndex: 'createdAt'
      }, {
        title: '操作',
        scopedSlots: { customRender: 'action'}
      }],

      selectedRowKeys: [],
      selectedRows: [],

      loadData : paramter => {
        console.log('loadData.parameter', paramter)
        return this.$http.get('/goods/tag/list', {
          params: paramter
        }).then(res => {
          console.log(res)

          return res.data;
        })
      }

    }
  },
  components: {
    STable
  },

  created() {

  }
}
</script>
