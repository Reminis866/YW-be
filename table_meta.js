const getTableMetaDefault = () => {
  return {
    tableName: '测试连接器插件',
    fields: [
      {
        fieldId: 'fid_1',
        fieldName: 'id1',
        fieldType: 1,
        isPrimary: true,
        description: '',
      },
      {
        fieldId: 'fid_2',
        fieldName: '数字',
        fieldType: 2,
        isPrimary: false,
        property: {
          formatter: '#,##0.00',
        },
      },
      {
        fieldId: 'fid_3',
        fieldName: '单选',
        fieldType: 3,
        isPrimary: false,
        description: 'xxx',
        property: {},
      },
      {
        fieldId: 'fid_4',
        fieldName: '多选',
        fieldType: 4,
        isPrimary: false,
        description: 'xxx',
        property: {},
      },
      {
        fieldId: 'fid_5',
        fieldName: '日期',
        fieldType: 5,
        isPrimary: false,
        description: 'xxx',
        property: {
          formatter: 'dd/MM/yyyy',
        },
      },
      {
        fieldId: 'fid_6',
        fieldName: '条形码',
        fieldType: 6,
        isPrimary: false,
        description: 'xxx',
        property: {},
      },
      {
        fieldId: 'fid_7',
        fieldName: '复选框',
        fieldType: 7,
        isPrimary: false,
        description: 'xxx',
        property: {},
      },
      {
        fieldId: 'fid_8',
        fieldName: '货币',
        fieldType: 8,
        isPrimary: false,
        description: 'xxx',
        property: {
          formatter: '#,##0.000',
          currencyCode: 'USD',
        },
      },
      {
        fieldId: 'fid_11',
        fieldName: '电话',
        fieldType: 9,
        isPrimary: false,
        description: 'xxx',
        property: {},
      },
      {
        fieldId: 'fid_12',
        fieldName: 'url',
        fieldType: 10,
        isPrimary: false,
        description: 'xxx',
        property: {},
      },
      {
        fieldId: 'fid_9',
        fieldName: '进度',
        fieldType: 11,
        isPrimary: false,
        description: 'xxx',
        property: {
          formatter: '0.0%',
          min: 10,
          max: 1000,
          color: 4,
        },
      },
      {
        fieldId: 'fid_10',
        fieldName: '评分',
        fieldType: 12,
        isPrimary: false,
        description: 'xxx',
        property: {
          min: 1,
          max: 10,
          symbol: 'smile',
        },
      },
    ],
  };
};

function queryWarehouseStorage() {
  return {
    tableName: '商品库存列表',
    fields: [
      {
        fieldId: 'merchandiseSerno',
        fieldName: '商品条码',
        fieldType: 1,
        isPrimary: true,
        description: '',
        property: {},
      },
      {
        fieldId: 'productName',
        fieldName: '商品名称',
        fieldType: 2,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'productCode',
        fieldName: '商品编码',
        fieldType: 3,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'specification',
        fieldName: '商品规格',
        fieldType: 4,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'isActive',
        fieldName: '是否有效',
        fieldType: 5,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'isReturnInventory',
        fieldName: '是否退货库存',
        fieldType: 6,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'warehouseID',
        fieldName: '万邑通仓库ID',
        fieldType: 7,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'warehouseCode',
        fieldName: '万邑通仓库Code',
        fieldType: 8,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'warehouseName',
        fieldName: '万邑通仓库名称',
        fieldType: 9,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'inStockQty',
        fieldName: '在库总库存',
        fieldType: 10,
        isPrimary: false,
        description:
          '在库总库存=可用库存数量+待发数量+丢失确认中数量+增值处理中数量+在库异常数量+待销毁数量+失效VAT冻结数量+禁止出库数量',
        property: {},
      },
      {
        fieldId: 'qtyAvailable',
        fieldName: '可用库存数量',
        fieldType: 11,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'qtyWaitOut',
        fieldName: '待发数量',
        fieldType: 12,
        isPrimary: false,
        description: '出库订单对应的商品出库数量（排除销毁出库单数量），以及调拨单或库存调整单商品出库数量',
        property: {},
      },
      {
        fieldId: 'qtyLostConfirming',
        fieldName: '丢失确认中数量',
        fieldType: 13,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'addValueFrozenQty',
        fieldName: '增值处理中数量',
        fieldType: 14,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'qtyFrozen',
        fieldName: '在库异常数量',
        fieldType: 15,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'qtyDestruction',
        fieldName: '待销毁数量',
        fieldType: 16,
        isPrimary: false,
        description: '销毁出库订单对应的商品数量',
        property: {},
      },
      {
        fieldId: 'prohibitFrozenQty',
        fieldName: '失效VAT冻结数量',
        fieldType: 17,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'prohibitUsableQty',
        fieldName: '禁止出库数量',
        fieldType: 18,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'pipelineInventory',
        fieldName: '在途待入库数量',
        fieldType: 19,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldId: 'preSaleWaitOutQty',
        fieldName: '预售待发数量',
        fieldType: 20,
        isPrimary: false,
        description: '预售出库单占用库存，需开通相关预售订单权限',
        property: {},
      },
    ],
  };
}

const getTableMeta = (body) => {
  const params = JSON.parse(body.params);
  const datasourceConfig = JSON.parse(params.datasourceConfig);
  console.log('params', params);
  console.log('datasourceConfig', datasourceConfig);
  switch (datasourceConfig.action) {
    case 'queryWarehouseStorage':
      return queryWarehouseStorage();
    default:
      return getTableMetaDefault();
  }
};

module.exports = { getTableMeta };
