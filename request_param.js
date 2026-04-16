const { log } = require('console');
const crypto = require('crypto');
const { format } = require('path');
function md5(str) {
  console.log('拼接字符串', str);

  return crypto.createHash('md5').update(str).digest('hex');
}

const client_id = 'NWFHNZYYZWMTNMY0YS00NDRKLWFLMDUTZJQ0YZVIZDGWMDU3';
const client_secret = 'ODEWN2I4Y2UTZMNLZS00MGUZLTHMOGQTZDIZNJQ0Y2Y2YTJINDG3OTM4NDE5MJUZMJU1MDA=';
const platform = 'YW';
const language = 'zh_CN';
const sign_method = 'md5';
const version = '2.0';

const params = {
  queryWarehouseStorage: {
    isActive: 'Y',
  },
};
const actions = {
  queryWarehouseStorage: {
    action: 'queryWarehouseStorage',
    format: 'json',
  },
};

function getCurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function getSign(token, app_key, action, param) {
  return md5(
    token +
      'action' +
      action.action +
      'app_key' +
      app_key +
      'data' +
      JSON.stringify(param) +
      'format' +
      action.format +
      'platform' +
      platform +
      'sign_method' +
      sign_method +
      'timestamp' +
      getCurrentTime() +
      'version' +
      version +
      token,
  ).toUpperCase();
}

function getClientSign(app_key, action, param) {
  return md5(
    client_secret +
      'action' +
      action.action +
      'app_key' +
      app_key +
      'data' +
      JSON.stringify(param) +
      'format' +
      action.format +
      'platform' +
      platform +
      'sign_method' +
      sign_method +
      'timestamp' +
      getCurrentTime() +
      'version' +
      version +
      client_secret,
  ).toUpperCase();
}

const getParam = (config, pageToken, maxPageSize) => {
  const token = config.account.token;
  const app_key = config.account.sellerAccount;
  const action = actions[config.action];
  const param = params[config.action];
  param.pageNum =
    pageToken === undefined || pageToken === null || pageToken === '' ? 1 : parseInt(pageToken.split('-')[1], 10);
  param.pageSize = maxPageSize >= 500 ? 500 : maxPageSize;
  if (config.action === 'queryWarehouseStorage') {
    param['warehouseID'] = config.warehouseID;
  }
  const sign = getSign(token, app_key, action, param);
  const client_sign = getClientSign(app_key, action, param);
  console.log('sign', sign);
  console.log('client_sign', client_sign);
  return {
    action: action.action,
    app_key: app_key,
    client_id: client_id,
    data: param,
    format: action.format,
    language: language,
    platform: platform,
    sign_method: sign_method,
    timeStamp: getCurrentTime(),
    version: version,
    sign: sign,
    client_sign: client_sign,
  };
};

module.exports = { getParam };
