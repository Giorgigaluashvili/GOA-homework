class TimeHelper {
    static CREATION_TIME = new Date().getTime();
  
    constructor() {
      this.currentTime = new Date();
    }
  
    static convertMillisToReadableTime(millis) {
      const date = new Date(millis);
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }
  
    static getCreationTime() {
      return this.convertMillisToReadableTime(this.CREATION_TIME);
    }
  
    getCurrentTime() {
      return TimeHelper.convertMillisToReadableTime(this.currentTime.getTime());
    }
  
    static getElapsedTime() {
      const elapsedMillis = new Date().getTime() - this.CREATION_TIME;
      return TimeHelper.convertMillisToReadableTime(elapsedMillis);
    }
  }
  
  console.log("Creation Time:", TimeHelper.getCreationTime()); 
  console.log("Current Time:", new TimeHelper().getCurrentTime());
  console.log("Elapsed Time since creation:", TimeHelper.getElapsedTime());