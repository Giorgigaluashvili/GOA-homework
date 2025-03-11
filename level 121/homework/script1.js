function processMessage(message, callback) {
    setTimeout(() => {
      console.log(message); 
      
      callback();
    }, 2000); 
  }
  
  function checkProcessFinished() {
    console.log("The process has finished.");
  }
  
  processMessage("Processing your request...", checkProcessFinished);