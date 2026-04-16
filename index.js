const express = require('express');
const path = require('path');
const fs = require('fs');

const { getTableMeta } = require('./table_meta.js');
const { getTableRecords } = require('./table_records.js');
const { judgeEncryptSignValid } = require('./request_sign.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/meta.json', (req, res) => {
  fs.readFile(path.join(__dirname, './public/meta.json'), 'utf8', (err, data) => {
    res.set('Content-Type', 'application/json');
    res.status(200).send(data);
  });
});

app.post('/api/table_meta', (req, res) => {
  console.log('table_meta的请求数据', req.body);
  console.log('加密判断结果：', judgeEncryptSignValid(req));

  const msg = {
    zh: '请求成功',
    en: 'success',
  };
  const result = { code: 0, msg: JSON.stringify(msg), data: getTableMeta(req.body) };
  console.log('table_meta的返回数据', JSON.stringify(result));

  res.status(200).json(result);
});

app.post('/api/records', async (req, res) => {
  // Process a POST request
  console.log('table_records 的请求数据', req.body);
  console.log('加密判断结果：', judgeEncryptSignValid(req));

  const recordsResult = await getTableRecords(req.body);

  const msg = {
    zh: '请求成功',
    en: 'success',
  };
  // 进行处理，并返回结果
  const result = {
    code: 0,
    msg: JSON.stringify(msg),
    data: recordsResult,
  };
  console.log('table_records的返回数据', JSON.stringify(result));
  res.status(200).json(result);
});

app.listen(3000, () => {
  console.log('Express server initialized');
});
