export function compact() {
  let obj = {};
  Array.prototype.forEach.call(arguments, function (elem) {
    let name = elem.name;
    obj[name] = elem;
  });
  return obj;
}

