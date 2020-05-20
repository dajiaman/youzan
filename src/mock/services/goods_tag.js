import Mock from 'mockjs2'

import { builder, getQueryParameters } from '../util'

const getList = (options) => {
  const queryParameters = getQueryParameters(options)
  console.log('queryParameters', queryParameters)
  if (queryParameters && !queryParameters.count) {
    queryParameters.count = 5
  }

  const data = [];

  for(let i = 0; i < queryParameters.pageSize; i++){
    const tmpKey = i + 1;
    // const num = parseInt(Math.random() * (4 + 1), 10)
    data.push({
      id: tmpKey,
      title: Mock.mock('@ctitle'),
      goodsCount: Mock.mock('@integer(1, 999)'),
      createdAt: Mock.mock('@datetime'),
      isDefault: Math.round(Math.random())
    })
  }

  return builder({
    rows: data,
    totalCount: 25,
    pageNo: queryParameters.pageNo,
    pageSize: queryParameters.pageSize,
    totalPage: 6,
  })

}


Mock.mock(/\/goods\/tag\/list/, 'get', getList)
