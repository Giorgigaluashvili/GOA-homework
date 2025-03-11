function isSubset(set1, set2) {
    for (let element of set1) {
      if (!set2.has(element)) {
        return false;
      }
    }
    return true; 
  }
  
  const set1 = new Set([1, 2]);
  const set2 = new Set([1, 2, 3]);
  
  console.log(isSubset(set1, set2)); 