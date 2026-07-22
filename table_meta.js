const getTableMetaDefault = () => {
  return {
    tableName: '测试连接器插件',
    fields: [
      {
        fieldID: 'merchandiseSerno',
        fieldName: '商品条码',
        fieldType: 1,
        isPrimary: true,
        description: '',
        property: {},
      },
      {
        fieldID: 'productName',
        fieldName: '商品名称',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'productCode',
        fieldName: '商品编码',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'specification',
        fieldName: '商品规格',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'isActive',
        fieldName: '是否有效',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'isReturnInventory',
        fieldName: '是否退货库存',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warehouseID',
        fieldName: '万邑通仓库ID',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warehouseCode',
        fieldName: '万邑通仓库Code',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warehouseName',
        fieldName: '万邑通仓库名称',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'inStockQty',
        fieldName: '在库总库存',
        fieldType: 1,
        isPrimary: false,
        description:
          '在库总库存=可用库存数量+待发数量+丢失确认中数量+增值处理中数量+在库异常数量+待销毁数量+失效VAT冻结数量+禁止出库数量',
        property: {},
      },
      {
        fieldID: 'qtyAvailable',
        fieldName: '可用库存数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'qtyWaitOut',
        fieldName: '待发数量',
        fieldType: 1,
        isPrimary: false,
        description: '出库订单对应的商品出库数量（排除销毁出库单数量），以及调拨单或库存调整单商品出库数量',
        property: {},
      },
      {
        fieldID: 'qtyLostConfirming',
        fieldName: '丢失确认中数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'addValueFrozenQty',
        fieldName: '增值处理中数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'qtyFrozen',
        fieldName: '在库异常数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'qtyDestruction',
        fieldName: '待销毁数量',
        fieldType: 1,
        isPrimary: false,
        description: '销毁出库订单对应的商品数量',
        property: {},
      },
      {
        fieldID: 'prohibitFrozenQty',
        fieldName: '失效VAT冻结数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'prohibitUsableQty',
        fieldName: '禁止出库数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'pipelineInventory',
        fieldName: '在途待入库数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'preSaleWaitOutQty',
        fieldName: '预售待发数量',
        fieldType: 1,
        isPrimary: false,
        description: '预售出库单占用库存，需开通相关预售订单权限',
        property: {},
      },
    ],
  };
};

function queryWarehouseStorage() {
  return {
    tableName: '商品库存列表',
    fields: [
      {
        fieldID: 'merchandiseSerno',
        fieldName: '商品条码',
        fieldType: 1,
        isPrimary: true,
        description: '',
        property: {},
      },
      {
        fieldID: 'productName',
        fieldName: '商品名称',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'productCode',
        fieldName: '商品编码',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'specification',
        fieldName: '商品规格',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'isActive',
        fieldName: '是否有效',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'isReturnInventory',
        fieldName: '是否退货库存',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warehouseID',
        fieldName: '万邑通仓库ID',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warehouseCode',
        fieldName: '万邑通仓库Code',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warehouseName',
        fieldName: '万邑通仓库名称',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'inStockQty',
        fieldName: '在库总库存',
        fieldType: 1,
        isPrimary: false,
        description:
          '在库总库存=可用库存数量+待发数量+丢失确认中数量+增值处理中数量+在库异常数量+待销毁数量+失效VAT冻结数量+禁止出库数量',
        property: {},
      },
      {
        fieldID: 'qtyAvailable',
        fieldName: '可用库存数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'qtyWaitOut',
        fieldName: '待发数量',
        fieldType: 1,
        isPrimary: false,
        description: '出库订单对应的商品出库数量（排除销毁出库单数量），以及调拨单或库存调整单商品出库数量',
        property: {},
      },
      {
        fieldID: 'qtyLostConfirming',
        fieldName: '丢失确认中数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'addValueFrozenQty',
        fieldName: '增值处理中数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'qtyFrozen',
        fieldName: '在库异常数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'qtyDestruction',
        fieldName: '待销毁数量',
        fieldType: 1,
        isPrimary: false,
        description: '销毁出库订单对应的商品数量',
        property: {},
      },
      {
        fieldID: 'prohibitFrozenQty',
        fieldName: '失效VAT冻结数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'prohibitUsableQty',
        fieldName: '禁止出库数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'pipelineInventory',
        fieldName: '在途待入库数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'preSaleWaitOutQty',
        fieldName: '预售待发数量',
        fieldType: 1,
        isPrimary: false,
        description: '预售出库单占用库存，需开通相关预售订单权限',
        property: {},
      },
    ],
  };
}

function getProductInventory() {
  return {
    tableName: '商品库存列表',
    fields: [
      {
        fieldID: 'product_barcode',
        fieldName: '产品编码',
        fieldType: 1,
        isPrimary: true,
        description: '',
        property: {},
      },
      {
        fieldID: 'product_sku',
        fieldName: 'sku',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'reference_no',
        fieldName: '自定义编码',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'product_title',
        fieldName: '产品名称',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'product_title_en',
        fieldName: '产品名称(英文)',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warehouse_code',
        fieldName: '仓库代码',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'onway',
        fieldName: '在途',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'pending',
        fieldName: '待上架',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'sellable',
        fieldName: '可售',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'unsellable',
        fieldName: '不合格',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'reserved',
        fieldName: '待出库',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'shipped',
        fieldName: '历史出库',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'sold_shared',
        fieldName: '分享库存出库数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'shared',
        fieldName: '分享库存数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warning',
        fieldName: '预警库存数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'pi_update_time',
        fieldName: '库存最新修改时间',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
    ],
  };
}

/**
 * 获取库存汇总
 *
 * 香港仓
 */
function getInventory() {
  return {
    tableName: '商品库存列表',
    fields: [
      {
        fieldID: 'id',
        fieldName: '编码',
        fieldType: 1,
        isPrimary: true,
        description: '',
        property: {},
      },
      {
        fieldID: 'warehouse',
        fieldName: '仓库',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'supplier',
        fieldName: '供应商',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'pn',
        fieldName: '料号',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'spec',
        fieldName: '规格',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'goods',
        fieldName: '货物名称',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'units',
        fieldName: '单位',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'inbound',
        fieldName: '入库数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'outbound',
        fieldName: '出库数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'net',
        fieldName: '当前库存',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
    ],
  };
}

/**
 * 获取库存列表
 *
 * 新加坡仓
 */
function getStockListForApi() {
  return {
    tableName: '商品库存列表',
    fields: [
      {
        fieldID: 'id',
        fieldName: 'ID',
        fieldType: 1,
        isPrimary: true,
        description: '',
        property: {},
      },
      {
        fieldID: 'sku_id',
        fieldName: 'sku',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'sku_name',
        fieldName: '规格名',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'goods_name',
        fieldName: '商品名称',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warehouse_name',
        fieldName: '仓库名称',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'position_code',
        fieldName: '仓位',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'stock',
        fieldName: '在仓库存',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'frozen_num',
        fieldName: '冻结库存',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'warning_num',
        fieldName: '库存预警数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'available_num',
        fieldName: '可用库存数量',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'sku_price',
        fieldName: 'sku价格',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'weight',
        fieldName: '重量(g)',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'long',
        fieldName: '长(CM)',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'width',
        fieldName: '宽(CM)',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'height',
        fieldName: '高(CM)',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'created_at',
        fieldName: '创建时间',
        fieldType: 1,
        isPrimary: false,
        description: '',
        property: {},
      },
      {
        fieldID: 'updated_at',
        fieldName: '更新时间',
        fieldType: 1,
        isPrimary: false,
        description: '',
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
  let result;
  switch (datasourceConfig.action) {
    case 'queryWarehouseStorage':
      result = queryWarehouseStorage();
      result.tableName = result.tableName + '(仓库ID：' + datasourceConfig.warehouseID + ')';
      return result;
    case 'getProductInventory':
      result = getProductInventory();
      result.tableName = result.tableName + '(仓库ID：' + datasourceConfig.warehouseID + ')';
      return result;
    case 'getInventory':
      result = getInventory();
      result.tableName = result.tableName + '(仓库ID：' + datasourceConfig.warehouseID + ')';
      return result;
    case 'getStockListForApi':
      result = getStockListForApi();
      result.tableName = result.tableName + '(仓库ID：' + datasourceConfig.warehouseID + ')';
      return result;
    default:
      return getTableMetaDefault();
  }
};

module.exports = { getTableMeta };
