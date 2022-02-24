module.exports = function check(str, bracketsConfig) {
  let count = 0;
  for (let i=0; i<bracketsConfig.length; i++) {
    let oneItem = bracketsConfig[i][0] + bracketsConfig[i][1];
    if (str.includes(oneItem)) {
      count +=1;
      let index = str.indexOf(oneItem);
      let str1 = str.slice(0, index);
      let str2 = str.slice(index+2);
      str = str1+str2
      console.log(str);
    }
  }
  if (count == 0) {
    console.log(false);
    return false;
  }
  
  if (str.length == 1) {
    console.log(false);
    return false;
  } 
  
  if (str.length == 0) {
    console.log(true);
    return true;
  } 
  console.log("again");
  count = 0;
  check(str, bracketsConfig);
  
}
