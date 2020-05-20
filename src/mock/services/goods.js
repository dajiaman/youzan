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
      itemId: tmpKey,
      title: Mock.mock('@ctitle'),
      price: Mock.mock('@integer(100, 9900)'),
      imageUrl: "https://img.yzcdn.cn/upload_files/2017/06/19/FmjxzQEDd_ghL2WG-9v9H4DCploe.png",
      visitCountPv: Mock.mock('@integer(0, 9900)'),
      visitCountUv: Mock.mock('@integer(0, 9900)'),
      stock: Mock.mock('@integer(0, 9900)'),
      num: 0,
      soldCount: Mock.mock('@integer(0, 100)'),
      createdAt: Mock.mock('@datetime'),
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


Mock.mock(/\/goods\/manage\/list/, 'get', getList)
