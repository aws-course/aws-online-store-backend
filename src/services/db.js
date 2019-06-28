const loki = require('lokijs');

const _consts = require('@consts');

let _db;

function _createCollIfNotExist(coll) {
  let isExist = _db.getCollection(coll);
  if (!isExist) {
    _db.addCollection(coll);
  }
}

function initDb(path) {
  _db = new loki(path, {
    env: 'NODEJS',
    autosave: true
  });
  _db.loadDatabase({}, () => {
    _createCollIfNotExist(_consts.collectionNames.USERS_COLL_NAME);
    _createCollIfNotExist(_consts.collectionNames.PRODUCTS_COLL_NAME);
    _createCollIfNotExist(_consts.collectionNames.ORDERS_COLL_NAME);
  });
}

function _saveDb() {
  _db.saveDatabase();
}

function getById(collName, id) {
  return _db.getCollection(collName).get(id);
}

function count(collName) {
  return _db.getCollection(collName).count();
}

function getRange(collName, start, count) {
  return _db
    .getCollection(collName)
    .chain()
    .offset(start)
    .limit(count)
    .data();
}

function getRangeBy(collName, by, value, start, count) {
  return _db
    .getCollection(collName)
    .chain()
    .find({ [by]: value })
    .offset(start)
    .limit(count)
    .data();
}

function insert(collName, item) {
  _db.getCollection(collName).insert(item);
  _saveDb();
}

function update(collName, item) {
  _db.getCollection(collName).update(item);
  _saveDb();
}

function remove(collName, item) {
  _db.getCollection(collName).remove(item);
}

function findBy(collName, by, value) {
  return _db.getCollection(collName).find({ [by]: value });
}

module.exports = {
  initDb: initDb,
  getById: getById,
  getRange: getRange,
  insert: insert,
  update: update,
  remove: remove,
  findBy: findBy,
  count: count,
  getRangeBy: getRangeBy
};
