var esClient = require('../common/esClient');
var esConfig = {
  indexName: 'djshop',
  bulkSize: 10
};

var queues = [];
var docBulk = (typeName, content) => {
  if (queues.length >= esConfig.bulkSize) {
    esClient.bulk({
      index: esConfig.indexName,
      body: queues.slice(0, esConfig.bulkSize)
    }, (error, response) => {
      console.log(error);
    });
    queues.splice(0, queues.length);
  } else {
    queues.push(content);
  }
};

var docStore = (typeName, content) => {
  return esClient.index({
    index: esConfig.indexName,
    type: typeName,
    id: content.id,
    body: content
  }, (error, response) => {
    console.log(error);
  });
};

var docQuery = (typeName, request) => {
  var reqDto = {
    index: esConfig.indexName,
    body: request
  }
  if (typeName) {
    reqDto.type = typeName;
  }
  return new Promise(function (resolve, reject) {
    esClient.search(reqDto, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
};


var removeDoc = (typeName, contentId) => {
  return esClient.delete({
    index: esConfig.indexName,
    type: typeName,
    id: contentId
  }, (error, response) => {
    console.log(error);
  });
};

module.exports = {
  docStore: docStore,
  docQuery: docQuery,
  removeDoc: removeDoc,
}