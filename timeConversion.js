const time = "12:05:05PM"

const timeConversion = (time12h) => {
    let [hours, minutes, secondsAndModifier] = time12h.split(":")
    let seconds = parseInt(secondsAndModifier,10);
    if (secondsAndModifier.includes("PM") && hours != '12') {
      hours = parseInt(hours,10) + 12
    }

    if (hours === '12' && secondsAndModifier.includes("AM")) {
      hours = "00"
    }
    return `${hours}:${minutes}:${seconds > 10 ? seconds : "0"+seconds}`
  }

console.log(timeConversion(time))