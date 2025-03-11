function task3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Task 3 failed"); 
      }, 2000); 
    });
  }
  
  task3()
    .catch((error) => {
      console.log(error); 
    });