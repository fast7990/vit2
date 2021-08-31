const toString = Object.prototype.toString;

function is(val, type) {
    return toString.call(val) === `[object ${type}]`;
}
function isObject(val) {
    return val !== null && is(val, 'Object');
}
export default { is, isObject }