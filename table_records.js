const axios = require('axios');
const { getParam } = require('./request_param.js');
const { url } = require('inspector');

let baseUrl = 'https://openapi.winit.com.cn/openapi/service';

const getTableRecordsDefault = () => {
  return {
    nextPageToken: 'xxx',
    hasMore: false,
    records: [
      {
        primaryId: 'record_1',
        data: {
          merchandiseSerno: 'record_1',
          qtyAvailable: '41',
          waitReShelvesQty: '0',
          customerCode: '19217592',
          salesReservationQty: '0',
          producLenght: '62.5',
          qtyFrozen: '0',
          inventory: '41',
          isActive: 'Y',
          warehouseName: '测试',
          warehouseCode: '测试',
          productName: '测试1',
          qtyDestruction: '0',
          prohibitFrozenQty: '0',
          pipelineInventory: '0',
          qtySellHisOut: '0',
          productWidth: '35.5',
          qtySw: '0',
          warehouseID: '1000001',
          qtyLostConfirming: '0',
          productLength: '102.5',
          qtyWaitOut: '0',
          preSaleWaitOutQty: '0',
          addValueFrozenQty: '0',
          productHeight: '0',
          qtyShareStorage: '0',
          specification: 'null',
          outboundStagingQty: '0',
          productWeight: '6.32',
          inStockQty: '63',
          prohibitUsableQty: '0',
          isReturnInventory: 'N',
          productCode: 'XXXX-XXXXX-XX',
          returnStagingQty: '0',
          qtyReserved: '0',
          reservedInventory: '0',
          nonCompliantFrozenQty: '0',
        },
      },
      {
        primaryId: 'record_2',
        data: {
          merchandiseSerno: 'record_2',
          qtyAvailable: '41',
          waitReShelvesQty: '0',
          customerCode: '19217592',
          salesReservationQty: '0',
          producLenght: '62.5',
          qtyFrozen: '0',
          inventory: '41',
          isActive: 'Y',
          warehouseName: '测试2',
          warehouseCode: '测试2',
          productName: '测试2',
          qtyDestruction: '0',
          prohibitFrozenQty: '0',
          pipelineInventory: '0',
          qtySellHisOut: '0',
          productWidth: '35.5',
          qtySw: '0',
          warehouseID: '1000001',
          qtyLostConfirming: '0',
          productLength: '102.5',
          qtyWaitOut: '0',
          preSaleWaitOutQty: '0',
          addValueFrozenQty: '0',
          productHeight: '0',
          qtyShareStorage: '0',
          specification: 'null',
          outboundStagingQty: '0',
          productWeight: '6.32',
          inStockQty: '63',
          prohibitUsableQty: '0',
          isReturnInventory: 'N',
          productCode: 'XXXX-XXXXX-XX',
          returnStagingQty: '0',
          qtyReserved: '0',
          reservedInventory: '0',
          nonCompliantFrozenQty: '0',
        },
      },
      {
        primaryId: 'record_3',
        data: {
          merchandiseSerno: 'record_3',
          qtyAvailable: '41',
          waitReShelvesQty: '0',
          customerCode: '19217592',
          salesReservationQty: '0',
          producLenght: '62.5',
          qtyFrozen: '0',
          inventory: '41',
          isActive: 'Y',
          warehouseName: '测试3',
          warehouseCode: '测试3',
          productName: '测试3',
          qtyDestruction: '0',
          prohibitFrozenQty: '0',
          pipelineInventory: '0',
          qtySellHisOut: '0',
          productWidth: '35.5',
          qtySw: '0',
          warehouseID: '1000001',
          qtyLostConfirming: '0',
          productLength: '102.5',
          qtyWaitOut: '0',
          preSaleWaitOutQty: '0',
          addValueFrozenQty: '0',
          productHeight: '0',
          qtyShareStorage: '0',
          specification: 'null',
          outboundStagingQty: '0',
          productWeight: '6.32',
          inStockQty: '63',
          prohibitUsableQty: '0',
          isReturnInventory: 'N',
          productCode: 'XXXX-XXXXX-XX',
          returnStagingQty: '0',
          qtyReserved: '0',
          reservedInventory: '0',
          nonCompliantFrozenQty: '0',
        },
      },
      {
        primaryId: 'record_4',
        data: {
          merchandiseSerno: 'record_4',
          qtyAvailable: '41',
          waitReShelvesQty: '0',
          customerCode: '19217592',
          salesReservationQty: '0',
          producLenght: '62.5',
          qtyFrozen: '0',
          inventory: '41',
          isActive: 'Y',
          warehouseName: '测试4',
          warehouseCode: '测试4',
          productName: '测试4',
          qtyDestruction: '0',
          prohibitFrozenQty: '0',
          pipelineInventory: '0',
          qtySellHisOut: '0',
          productWidth: '35.5',
          qtySw: '0',
          warehouseID: '1000001',
          qtyLostConfirming: '0',
          productLength: '102.5',
          qtyWaitOut: '0',
          preSaleWaitOutQty: '0',
          addValueFrozenQty: '0',
          productHeight: '0',
          qtyShareStorage: '0',
          specification: 'null',
          outboundStagingQty: '0',
          productWeight: '6.32',
          inStockQty: '63',
          prohibitUsableQty: '0',
          isReturnInventory: 'N',
          productCode: 'XXXX-XXXXX-XX',
          returnStagingQty: '0',
          qtyReserved: '0',
          reservedInventory: '0',
          nonCompliantFrozenQty: '0',
        },
      },
      {
        primaryId: 'record_5',
        data: {
          merchandiseSerno: 'record_5',
          qtyAvailable: '41',
          waitReShelvesQty: '0',
          customerCode: '19217592',
          salesReservationQty: '0',
          producLenght: '62.5',
          qtyFrozen: '0',
          inventory: '41',
          isActive: 'Y',
          warehouseName: '测试5',
          warehouseCode: '测试5',
          productName: '测试5',
          qtyDestruction: '0',
          prohibitFrozenQty: '0',
          pipelineInventory: '0',
          qtySellHisOut: '0',
          productWidth: '35.5',
          qtySw: '0',
          warehouseID: '1000001',
          qtyLostConfirming: '0',
          productLength: '102.5',
          qtyWaitOut: '0',
          preSaleWaitOutQty: '0',
          addValueFrozenQty: '0',
          productHeight: '0',
          qtyShareStorage: '0',
          specification: 'null',
          outboundStagingQty: '0',
          productWeight: '6.32',
          inStockQty: '63',
          prohibitUsableQty: '0',
          isReturnInventory: 'N',
          productCode: 'XXXX-XXXXX-XX',
          returnStagingQty: '0',
          qtyReserved: '0',
          reservedInventory: '0',
          nonCompliantFrozenQty: '0',
        },
      },
      {
        primaryId: 'record_6',
        data: {
          merchandiseSerno: 'record_6',
          qtyAvailable: '41',
          waitReShelvesQty: '0',
          customerCode: '19217592',
          salesReservationQty: '0',
          producLenght: '62.5',
          qtyFrozen: '0',
          inventory: '41',
          isActive: 'Y',
          warehouseName: '测试6',
          warehouseCode: '测试6',
          productName: '测试6',
          qtyDestruction: '0',
          prohibitFrozenQty: '0',
          pipelineInventory: '0',
          qtySellHisOut: '0',
          productWidth: '35.5',
          qtySw: '0',
          warehouseID: '1000001',
          qtyLostConfirming: '0',
          productLength: '102.5',
          qtyWaitOut: '0',
          preSaleWaitOutQty: '0',
          addValueFrozenQty: '0',
          productHeight: '0',
          qtyShareStorage: '0',
          specification: 'null',
          outboundStagingQty: '0',
          productWeight: '6.32',
          inStockQty: '63',
          prohibitUsableQty: '0',
          isReturnInventory: 'N',
          productCode: 'XXXX-XXXXX-XX',
          returnStagingQty: '0',
          qtyReserved: '0',
          reservedInventory: '0',
          nonCompliantFrozenQty: '0',
        },
      },
      {
        primaryId: 'record_7',
        data: {
          merchandiseSerno: 'record_7',
          qtyAvailable: '41',
          waitReShelvesQty: '0',
          customerCode: '19217592',
          salesReservationQty: '0',
          producLenght: '62.5',
          qtyFrozen: '0',
          inventory: '41',
          isActive: 'Y',
          warehouseName: '测试7',
          warehouseCode: '测试7',
          productName: '测试7',
          qtyDestruction: '0',
          prohibitFrozenQty: '0',
          pipelineInventory: '0',
          qtySellHisOut: '0',
          productWidth: '35.5',
          qtySw: '0',
          warehouseID: '1000001',
          qtyLostConfirming: '0',
          productLength: '102.5',
          qtyWaitOut: '0',
          preSaleWaitOutQty: '0',
          addValueFrozenQty: '0',
          productHeight: '0',
          qtyShareStorage: '0',
          specification: 'null',
          outboundStagingQty: '0',
          productWeight: '6.32',
          inStockQty: '63',
          prohibitUsableQty: '0',
          isReturnInventory: 'N',
          productCode: 'XXXX-XXXXX-XX',
          returnStagingQty: '0',
          qtyReserved: '0',
          reservedInventory: '0',
          nonCompliantFrozenQty: '0',
        },
      },
      {
        primaryId: 'record_8',
        data: {
          merchandiseSerno: 'record_8',
          qtyAvailable: '41',
          waitReShelvesQty: '0',
          customerCode: '19217592',
          salesReservationQty: '0',
          producLenght: '62.5',
          qtyFrozen: '0',
          inventory: '41',
          isActive: 'Y',
          warehouseName: '测试8',
          warehouseCode: '测试8',
          productName: '测试8',
          qtyDestruction: '0',
          prohibitFrozenQty: '0',
          pipelineInventory: '0',
          qtySellHisOut: '0',
          productWidth: '35.5',
          qtySw: '0',
          warehouseID: '1000001',
          qtyLostConfirming: '0',
          productLength: '102.5',
          qtyWaitOut: '0',
          preSaleWaitOutQty: '0',
          addValueFrozenQty: '0',
          productHeight: '0',
          qtyShareStorage: '0',
          specification: 'null',
          outboundStagingQty: '0',
          productWeight: '6.32',
          inStockQty: '63',
          prohibitUsableQty: '0',
          isReturnInventory: 'N',
          productCode: 'XXXX-XXXXX-XX',
          returnStagingQty: '0',
          qtyReserved: '0',
          reservedInventory: '0',
          nonCompliantFrozenQty: '0',
        },
      },
    ],
  };
};

function queryWarehouseStorage(param, pageToken) {
  console.log('param', param);
  return axios
    .post(baseUrl, param)
    .then((res) => {
      console.log(res.data);

      if (res.data.code === 0) {
        const data = res.data.data;
        const hasNextPage = data.currentPageNum < Math.ceil(data.total / data.currentPageSize);
        const transformed = data.list.map((item) => {
          const stringifiedItem = Object.fromEntries(Object.entries(item).map(([key, value]) => [key, String(value)]));
          return {
            primaryID: stringifiedItem.merchandiseSerno,
            data: stringifiedItem,
          };
        });
        return {
          nextPageToken:
            pageToken === undefined || pageToken === null || pageToken === ''
              ? 'xxx-2'
              : 'xxx-' + (data.currentPageNum + 1),
          hasMore: hasNextPage,
          records: transformed,
        };
      } else {
        // 抛出错误，让调用方捕获
        throw new Error(`Request failed with code ${res.code}`);
      }
    })
    .catch((err) => {
      console.error(err);
      throw err; // 重新抛出，确保返回 rejected Promise
    });
}

function getProductInventory(params, pageToken, warehouseID) {
  const page =
    pageToken === undefined || pageToken === null || pageToken === '' ? 1 : parseInt(pageToken.split('-')[1], 10);
  const url =
    warehouseID === 'DE001'
      ? 'http://cocp.rqlis.com:888/default/svc/web-service'
      : 'https://jw.yunwms.com/default/svc/web-service';
  const appToken = warehouseID === 'DE001' ? '04ca78fc603ac49f6bf8d03a0695652d' : 'dc1df829d797d4d9fa19ef9223a31b3c';
  const appKey = warehouseID === 'DE001' ? '00b6ce7e6f2bdde97001391c3fd11909' : '991969e0b83e8db303284be0606b2863';
  const param = `<?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope 
        xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:ns1="http://www.example.org/Ec/">
        <SOAP-ENV:Body>
            <ns1:callService>
                <paramsJson>{"pageSize":${params.maxPageSize},"page":${page}}</paramsJson>
                <appToken>${appToken}</appToken>
                <appKey>${appKey}</appKey>
                <service>getProductInventory</service>
                <language>zh_CN</language>
            </ns1:callService>
        </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>`;
  const parseSOAPResponse = (xmlString) => {
    const match = xmlString.match(/<response>([\s\S]*?)<\/response>/);
    if (!match) {
      throw new Error('XML 响应中未找到 <response> 标签');
    }

    const jsonString = match[1];
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.code !== undefined && parsed.code !== 0) {
        throw new Error(`请求失败: ${parsed.msg || '未知错误'}`);
      }
      const result = parsed.code === 0 && parsed.data ? parsed.data : parsed;
      if (result.ask !== 'Success') {
        throw new Error(`请求失败: ${result.message || '未知错误'}`);
      }
      return result;
    } catch (parseError) {
      if (parseError instanceof SyntaxError) {
        throw new Error('响应中的 JSON 格式错误');
      }
      throw parseError;
    }
  };

  return axios
    .post(url, param, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
    .then((res) => {
      console.log(res.data);
      const result = parseSOAPResponse(res.data);
      const currentPage = result.pagination?.page ?? page;
      const hasMore = result.nextPage === 'true' || result.nextPage === true;
      const list = result.data || [];
      const transformed = list.map((item) => {
        const stringifiedItem = Object.fromEntries(
          Object.entries(item).map(([key, value]) => [
            key,
            typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value),
          ]),
        );
        return {
          primaryID: stringifiedItem.product_barcode,
          data: stringifiedItem,
        };
      });
      return {
        nextPageToken:
          pageToken === undefined || pageToken === null || pageToken === '' ? 'xxx-2' : 'xxx-' + (currentPage + 1),
        hasMore,
        records: transformed,
      };
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

function getInventory(warehouseID, days) {
  baseUrl = 'http://61.142.7.198:8004/api/external/inventory';
  return axios
    .get(baseUrl, {
      params: { days: days, warehouse: warehouseID },
      headers: {
        'X-API-Key': 'fhk_30c15711e0ecbdb9aaf3e5b86d939c28',
      },
    })
    .then((res) => {
      console.log(res.data);

      if (res.data.code === 200) {
        const warehouses = res.data.data.warehouses || [];
        const records = [];

        for (const wh of warehouses) {
          for (const item of wh.items || []) {
            const id = String(wh.supplier ?? '') + String(item.pn ?? '');
            const data = {
              id,
              warehouse: String(wh.warehouse ?? ''),
              supplier: String(wh.supplier ?? ''),
              pn: String(item.pn ?? ''),
              spec: String(item.spec ?? ''),
              goods: String(item.goods ?? ''),
              units: String(item.units ?? ''),
              inbound: String(item.inbound ?? ''),
              outbound: String(item.outbound ?? ''),
              net: String(item.net ?? ''),
            };
            records.push({
              primaryID: id,
              data,
            });
          }
        }

        return {
          nextPageToken: '',
          hasMore: false,
          records,
        };
      } else {
        throw new Error(`Request failed with code ${res.data.code}`);
      }
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

function getStockListForApi(params, pageToken) {
  const page =
    pageToken === undefined || pageToken === null || pageToken === '' ? 1 : parseInt(pageToken.split('-')[1], 10);
  const pageSize = params.maxPageSize || 100;
  baseUrl = 'http://hailego.vip/api/dxm/getStockListForApi';
  return axios
    .post(
      baseUrl,
      {
        params: { page_size: pageSize, page },
      },
      {
        headers: {
          'Api-Key': 'be5ce471a405d27fd654b3c499129dfd',
          'Platform-Type': '16',
        },
      },
    )
    .then((res) => {
      console.log(res.data);

      if (res.data.code === 200) {
        const listInfo = res.data.data?.list || {};
        const list = listInfo.data || [];
        const currentPage = listInfo.current_page ?? page;
        const totalPage = listInfo.total_page ?? 1;
        const hasMore = currentPage < totalPage;

        const records = list.map((item) => {
          const id = String(item.id ?? '');
          const data = {
            id,
            sku_id: String(item.sku_id ?? ''),
            sku_name: String(item.sku_name ?? ''),
            goods_name: String(item.goods_name ?? ''),
            warehouse_name: String(item.warehouse_name ?? ''),
            position_code: String(item.position ?? ''),
            stock: String(item.stock_num ?? ''),
            frozen_num: String(item.frozen_num ?? ''),
            warning_num: String(item.warning_num ?? ''),
            available_num: String(item.available_num ?? ''),
            sku_price: String(item.sku_price ?? ''),
            weight: String(item.weight ?? ''),
            long: String(item.long ?? ''),
            width: String(item.width ?? ''),
            height: String(item.height ?? ''),
            created_at: String(item.created_at ?? ''),
            updated_at: String(item.updated_at ?? ''),
          };
          return {
            primaryID: id,
            data,
          };
        });

        return {
          nextPageToken: hasMore ? 'xxx-' + (currentPage + 1) : '',
          hasMore,
          records,
        };
      } else {
        throw new Error(`Request failed with code ${res.data.code}`);
      }
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

const getTableRecords = (body) => {
  const params = JSON.parse(body.params);
  const datasourceConfig = JSON.parse(params.datasourceConfig);
  console.log('params', params);
  console.log('datasourceConfig', datasourceConfig);
  switch (datasourceConfig.action) {
    case 'queryWarehouseStorage':
      const param = getParam(datasourceConfig, params.pageToken, params.maxPageSize);
      return queryWarehouseStorage(param, datasourceConfig.pageToken);
    case 'getProductInventory':
      return getProductInventory(params, params.pageToken, datasourceConfig.warehouseID);
    case 'getInventory':
      return getInventory(datasourceConfig.warehouseID, datasourceConfig.days);
    case 'getStockListForApi':
      return getStockListForApi(params, params.pageToken);
    default:
      return getTableRecordsDefault();
  }
};

module.exports = { getTableRecords };
