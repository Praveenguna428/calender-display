function displayCalendar() {
  var year = document.getElementById('year').value;
  var month = document.getElementById('month').value;

  var calendarContainer = document.getElementById('calendarContainer');
  var calendarHTML = '<h3>' + year + '-' + month + '</h3>';

  calendarHTML += '<table>';
  calendarHTML += '<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>';

  var firstDay = new Date(year, month - 1, 1).getDay();
  var daysInMonth = new Date(year, month, 0).getDate();

  var date = 1;
  for (var i = 0; i < 6; i++) {
    calendarHTML += '<tr>';
    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < (firstDay === 0 ? 6 : firstDay - 1)) {
        calendarHTML += '<td></td>';
      } else if (date > daysInMonth) {
        break;
      } else {
        calendarHTML += '<td>' + date + '</td>';
        date++;
      }
    }
    calendarHTML += '</tr>';
    if (date > daysInMonth) {
      break;
    }
  }

  calendarHTML += '</table>';

  calendarContainer.innerHTML = calendarHTML;
}
