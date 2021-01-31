module.exports = (template, data) => {
  let outPut = template.replace(/%image%/g, data.image);
  outPut = outPut.replace(/%name%/g, data.name);
  outPut = outPut.replace(/%ram%/g, data.ram);
  outPut = outPut.replace(/%rom%/g, data.rom);
  outPut = outPut.replace(/%id%/g, data.id);
  outPut = outPut.replace(/%price%/g, data.price);
  return outPut
}