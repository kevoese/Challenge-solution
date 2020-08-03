const arr =[1,2,3,3,4.6,7,7,4,6];

const findDuplicate = (input) => {
 const storeDuplicateObj = {};
 const storeNonDuplicateObj = {}
 for(ele of input) {
   if(storeNonDuplicateObj[ele]) {
     storeDuplicateObj[ele] = ele;
     storeNonDuplicateObj[ele] = null;
   } else {
    storeNonDuplicateObj[ele] = ele;
   }
 }

 const nonDuplicateArr = Object.values(storeNonDuplicateObj).filter(ele => ele);
 const duplicateArr = Object.values(storeDuplicateObj);
 return {nonDuplicateArr, duplicateArr};
}

const findDuplicateTwo = (input) => {
  const storeDuplicateObj = {};
  const storeNonDuplicateObj = {}
  for(ele of input) {
    if(storeNonDuplicateObj[ele]) {
      storeDuplicateObj[ele] = ele;
      storeNonDuplicateObj[ele] = null;
    } else {
     storeNonDuplicateObj[ele] = ele;
    }
  }
  
  const nonDuplicateArr = Object.values(storeNonDuplicateObj).filter(ele => ele);
  const duplicateArr = [];
  for (ele of input) {
    if(!nonDuplicateArr.includes(ele))
        duplicateArr.push(ele);
  }
  return ({
    nonDuplicateArr,
     duplicateArr: Array.from(new Set(duplicateArr)), // Set removes duplicates from array
    });
 }



console.log(findDuplicateTwo(arr), )