import React from "react";
import { TIME_STYLES } from "../css/time_style";

class TimeFunctions {
  // black tape project
  date = new Date();
  timeOfDay = "null";

  getTimeOfDay() {
    let hour = this.date.getHours();

    if (hour <= 12) {
      TIME_STYLES.color = "#000000"
      this.timeOfDay = "Morning";
    }
    if (hour >= 12 && hour <= 17) {
      this.timeOfDay = "Afternoon";
      TIME_STYLES.color = "#39FF14"
    } 
    if (hour >17)
    {
      this.timeOfDay = "Evening";
    }
    return <h1 style={TIME_STYLES}> {this.timeOfDay} </h1>;
  }
}

export default TimeFunctions;
