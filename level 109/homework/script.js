function manualAssign(...objects) {
    let result = {};
  
    objects.forEach(obj => {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
        }
      }
    });
  
    return result;
  }

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const merged = manualAssign(obj1, obj2, obj3);
console.log(merged); 
