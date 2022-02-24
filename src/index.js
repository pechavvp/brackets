let count = 0;

module.exports = function check(str, bracketsConfig) {
  for (let i=0; i<bracketsConfig.length; i++) {
    let oneItem = bracketsConfig[i][0] + bracketsConfig[i][1];
    if (str.includes(oneItem)) {
      count +=1;
      let index = str.indexOf(oneItem);
      console.log(index);
      let str1 = str.slice(0, index);
      let str2 = str.slice(index+2);
      str = str1+str2
      console.log(str);
    }
  }
  if (count == 0) {
    return false;
  } else if (str.length == 1) {
    return false;
  } else if (str.length == 0) {
    return true;
  } else {
    check(str, bracketsConfig);
  }
}
