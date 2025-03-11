function task1() {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 5000) + 1000; 
      
      setTimeout(() => {
        resolve("Task 1 complete"); 
      }, delay); 
    });
  }
  
  task1()
    .then((message) => {
      console.log(message); 
    });
  