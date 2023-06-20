const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);

setInterval(() => {
  const now = new Date();
  const seconds = now.getSeconds();

  // Add a leading zero if the seconds value is less than 10
  const secondsFormatted = seconds.toString().padStart(2, "0");

  timeElement.textContent = `${timeElement.textContent}`;
}, 1000);

//Table colors

function updateTableColors() {
  var currentTime = new Date();
  var currentDay = currentTime.getDay();
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();

  var tableData = document.getElementsByTagName('td');

  for (var i = 0; i < tableData.length; i++) {
    var dataElement = tableData[i];
    //Days Shedule
    if (dataElement.classList.contains('sunday')) {
      if (currentDay === 0) {
        dataElement.style.backgroundColor = 'greenyellow';
        dataElement.style.color = 'black';
      } else {
        dataElement.style.backgroundColor = 'transparent';
        dataElement.style.color = 'greenyellow';
      }
    }

    if (dataElement.classList.contains('monday')) {
      if (currentDay === 1) {
        dataElement.style.backgroundColor = 'greenyellow';
        dataElement.style.color = 'black';
      } else {
        dataElement.style.backgroundColor = 'transparent';
        dataElement.style.color = 'greenyellow';
      }
    }

    if (dataElement.classList.contains('tuesday')) {
      if (currentDay === 2) {
        dataElement.style.backgroundColor = 'greenyellow';
        dataElement.style.color = 'black';
      } else {
        dataElement.style.backgroundColor = 'transparent';
        dataElement.style.color = 'greenyellow';
      }
    }

    if (dataElement.classList.contains('wednesday')) {
      if (currentDay === 3) {
        dataElement.style.backgroundColor = 'greenyellow';
        dataElement.style.color = 'black';
      } else {
        dataElement.style.backgroundColor = 'transparent';
        dataElement.style.color = 'greenyellow';
      }
    }

    if (dataElement.classList.contains('thursday')) {
      if (currentDay === 4) {
        dataElement.style.backgroundColor = 'greenyellow';
        dataElement.style.color = 'black';
      } else {
        dataElement.style.backgroundColor = 'transparent';
        dataElement.style.color = 'greenyellow';
      }
    }

    if (dataElement.classList.contains('friday')) {
      if (currentDay === 5) {
        dataElement.style.backgroundColor = 'greenyellow';
        dataElement.style.color = 'black';
      } else {
        dataElement.style.backgroundColor = 'transparent';
        dataElement.style.color = 'greenyellow';
      }
    }

    if (dataElement.classList.contains('saturday')) {
      if (currentDay === 6) {
        dataElement.style.backgroundColor = 'greenyellow';
        dataElement.style.color = 'black';
      } else {
        dataElement.style.backgroundColor = 'transparent';
        dataElement.style.color = 'greenyellow';
      }
    }

    // Sunday Time
    if (dataElement.classList.contains('sutime1')) {
      if (currentDay === 0 && currentHour === 19) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('sutime2')) {
      if (currentDay === 0 && currentHour === 20) {
        if (currentMinute >= 10 && currentMinute <= 45) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('sutime3')) {
      if (currentDay === 0 && currentHour === 22) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('sutime4')) {
      if (currentDay === 0 && currentHour === 23) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('sutime5')) {
      if (currentDay === 0 && currentHour === 0) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('sutime6')) {
      if (currentDay === 0 && currentHour === 1) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('sutime7')) {
      if (currentDay === 0 && currentHour === 8) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    //Monday Time

    if (dataElement.classList.contains('mtime1')) {
      if (currentDay === 1 && currentHour === 19) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('mtime2')) {
      if (currentDay === 1 && currentHour === 20) {
        if (currentMinute >= 10 && currentMinute <= 45) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('mtime3')) {
      if (currentDay === 1 && currentHour === 22) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('mtime4')) {
      if (currentDay === 1 && currentHour === 23) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('mtime5')) {
      if (currentDay === 1 && currentHour === 0) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('mtime6')) {
      if (currentDay === 1 && currentHour === 1) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('mtime7')) {
      if (currentDay === 1 && currentHour === 8) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    //Tue Day Time

    if (dataElement.classList.contains('ttime1')) {
      if (currentDay === 2 && currentHour === 19) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'yellow';
          dataElement.style.backgroundColor = 'red';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ttime2')) {
      if (currentDay === 2 && currentHour === 20) {
        if (currentMinute >= 10 && currentMinute <= 45) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ttime3')) {
      if (currentDay === 2 && currentHour === 22) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ttime4')) {
      if (currentDay === 2 && currentHour === 23) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ttime5')) {
      if (currentDay === 2 && currentHour === 0) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ttime6')) {
      if (currentDay === 2 && currentHour === 1) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('ttime7')) {
      if (currentDay === 2 && currentHour === 8) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    //WED Day

    if (dataElement.classList.contains('wtime1')) {
      if (currentDay === 3 && currentHour === 19) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'yellow';
          dataElement.style.backgroundColor = 'red';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('wtime2')) {
      if (currentDay === 3 && currentHour === 20) {
        if (currentMinute >= 10 && currentMinute <= 45) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('wtime3')) {
      if (currentDay === 3 && currentHour === 22) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('wtime4')) {
      if (currentDay === 3 && currentHour === 23) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('wtime5')) {
      if (currentDay === 3 && currentHour === 0) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('wtime6')) {
      if (currentDay === 3 && currentHour === 1) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('wtime7')) {
      if (currentDay === 3 && currentHour === 8) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    //THU DAY

    if (dataElement.classList.contains('thtime1')) {
      if (currentDay === 4 && currentHour === 19) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'yellow';
          dataElement.style.backgroundColor = 'red';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('thtime2')) {
      if (currentDay === 4 && currentHour === 20) {
        if (currentMinute >= 10 && currentMinute <= 45) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('thtime3')) {
      if (currentDay === 4 && currentHour === 22) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('thtime4')) {
      if (currentDay === 4 && currentHour === 23) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('thtime5')) {
      if (currentDay === 4 && currentHour === 0) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('thtime6')) {
      if (currentDay === 4 && currentHour === 1) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('thtime7')) {
      if (currentDay === 4 && currentHour === 8) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    //FRI DAY

    if (dataElement.classList.contains('ftime1')) {
      if (currentDay === 5 && currentHour === 19) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'yellow';
          dataElement.style.backgroundColor = 'red';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ftime2')) {
      if (currentDay === 5 && currentHour === 20) {
        if (currentMinute >= 10 && currentMinute <= 45) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ftime3')) {
      if (currentDay === 5 && currentHour === 22) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ftime4')) {
      if (currentDay === 5 && currentHour === 23) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ftime5')) {
      if (currentDay === 5 && currentHour === 0) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('ftime6')) {
      if (currentDay === 5 && currentHour === 1) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('ftime7')) {
      if (currentDay === 5 && currentHour === 8) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    /*---------------------WEEKEND-------------------------*/
    //SAT DAY

    if (dataElement.classList.contains('stime1')) {
      if (currentDay === 6 && currentHour === 8) {
        if (currentMinute >= 30 && currentMinute <= 59) {
          dataElement.style.color = 'yellow';
          dataElement.style.backgroundColor = 'red';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('stime1')) {
      if (currentDay === 6 && currentHour === 9) {
        if (currentMinute >= 0 && currentMinute <= 30) {
          dataElement.style.color = 'yellow';
          dataElement.style.backgroundColor = 'red';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('stime2')) {
      if (currentDay === 6 && currentHour === 10) {
        if (currentMinute >= 10 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('stime3')) {
      if (currentDay === 6 && currentHour === 12) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('stime4')) {
      if (currentDay === 6 && currentHour === 16) {
        if (currentMinute >= 30 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('stime4')) {
      if (currentDay === 6 && currentHour === 17) {
        if (currentMinute >= 0 && currentMinute <= 30) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
    if (dataElement.classList.contains('stime5')) {
      if (currentDay === 6 && currentHour === 19) {
        if (currentMinute >= 30 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('stime5')) {
      if (currentDay === 6 && currentHour === 20) {
        if (currentMinute >= 0 && currentMinute <= 30) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('stime6')) {
      if (currentDay === 6 && currentHour === 0) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }

    if (dataElement.classList.contains('stime7')) {
      if (currentDay === 6 && currentHour === 1) {
        if (currentMinute >= 0 && currentMinute <= 59) {
          dataElement.style.color = 'black';
          dataElement.style.backgroundColor = 'white';
        } else {
          dataElement.style.color = 'transparent'; // Make time color invisible
          dataElement.style.backgroundColor = 'transparent';
        }
      } else {
        dataElement.style.color = 'white';
        dataElement.style.backgroundColor = 'transparent';
      }
    }
  }
}

setInterval(updateTableColors, 1000); // Update colors every second