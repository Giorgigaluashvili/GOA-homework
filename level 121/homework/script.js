function welcomeMessage(name, callback) {
    setTimeout(() => {
      callback(`Welcome, ${name}!`);
    }, 2000); 
  }
  
  function logMessage(message) {
    console.log(message);
  }
  
  welcomeMessage("Alice", logMessage);
  