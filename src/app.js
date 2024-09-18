export function orderByProps(obj, [key1, key2]) {
  const resultArr1 = [];
  const resultArr2 = [];
  const resultArr3 = [];

  resultArr1.push({ key: key1, value: obj[key1] });
  resultArr1.push({ key: key2, value: obj[key2] });

  for (const key in obj) {
    if (resultArr1[0].key.includes(key) || resultArr1[1].key.includes(key)) {
      resultArr2.push({ key, value: obj[key] });
      resultArr2.sort((a, b) => (b.key > a.key ? 1 : -1));
    } else {
      resultArr3.push({ key: key, value: obj[key] });
      resultArr3.sort((a, b) => (a.key > b.key ? 1 : -1));
    }
  }
  return [...resultArr2, ...resultArr3];
}
