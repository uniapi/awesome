/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                              October 6, 2018
*************************************************************************/

const createEnumerableProperty = prop => prop;
const createNotEnumerableProperty = prop => Symbol(prop);
const createProtoMagicObject = () => {
  const proto = () => { };
  proto.prototype = Function.prototype;
  return proto;
};

let inc = 0;
let asyncinc = 0;
const incrementor = () => {
  incrementor.valueOf = () => inc;
  inc++;
  return incrementor;
};
const asyncIncrementor = () => ++asyncinc;
const createIncrementer = () => {
  return { value: 0, next: function() { this.value++; return this; }, [Symbol.iterator]: function() { return this; } };
};
const returnBackInSecond = arg => new Promise(resolve => setTimeout(() => resolve(arg), 1000));
const getDeepPropertiesCount = obj => {
  let len = 0;
  for (const prop of Object.keys(obj)) {
    len++;
    if (Object.keys(obj[prop]).length)
      len += getDeepPropertiesCount(obj[prop]);
  }
  return len;
};
const createSerializedObject = () => null;
const toBuffer = () => {};
const sortByProto = protos => protos.sort((a, b) => a.__proto__ - b.__proto__);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
