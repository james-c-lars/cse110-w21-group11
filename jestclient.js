document.body.innerHTML =
  '<span id="minute">25</span>' +
  '<span id="seconds">00</span>' +
  '<p id="completePomos"> Number of Complete Pomodors </p>' +
  '<input type="button" id="mixBut" style="background-color:lightgreen;color:white;width:150px;height:40px;" value="Start Timer" />' +
  '<button id="reset-btn" style="background-color:gray;color:white;width:150px;height:40px;">Reset</button>' +
  '<div id="settings-modal" class="modal"></div>' +
  '<input type="number" placeholder="Minutes" class="minutes" id="userMins" />' +
  '<input type="number" placeholder="Seconds" class="seconds" min="0" step="1" id="userSecs" />' +
  '<input id="volume-number" name="volume-number" type="number" min="0" max="100" value="100">' +
  '<input id="volume-slider" name="volume-slider" type="range" min="0" max="100" value="100">' +
  '<input type="number" placeholder="Breaks" class="pomos" id="shortBreakPomos" />' +
  '<input type="number" placeholder="Pomos" class="pomos" id="userPomos" />' +
  '<input type="number" placeholder="Breaks" class="pomos" id="breakPomos" />' +
  '<select id="changeSelect" name="alarmMusic" onselect="sound()">' +
  '<input class="grid-item" type="number" id="pomo-num" value="1" min="1" max="4"/>' +
  '<button id="plus" type="button">+</button>' +
  '<button id="minus" type="button">-</button>' +
  '<button id="add" class="button-on" type="submit">ADD</button>' +
  '<button id="clear" class="button-off" type="button">CLEAR</button>' +
  '<div id="tasks"><div id="no-task">Tasks Complete!</div></div>';