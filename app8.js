document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const currentYear = today.getFullYear();
    const calendarWrapper = document.getElementById("calendar-wrapper");
  
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Generate the calendar
    function generateCalendar() {
      for (let month = 0; month < 12; month++) {
        const firstDay = new Date(currentYear, month, 1).getDay();
        const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
  
        const monthSlide = document.createElement("div");
        monthSlide.classList.add("swiper-slide");
  
        let calendarHTML = `<h3 style="text-align: center;">${months[month]}</h3>`;
        calendarHTML += `<div class="calendar-grid">`;
  
        // Add weekdays
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        weekdays.forEach(day => {
          calendarHTML += `<div class="calendar-day">${day}</div>`;
        });
  
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
          calendarHTML += `<div class="calendar-date"></div>`;
        }
  
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
          const date = new Date(currentYear, month, day);
          const isToday = (date.toDateString() === today.toDateString());
  
          calendarHTML += `<div class="calendar-date ${isToday ? "calendar-today" : ""}" 
              tabindex="0" 
              onclick="updateDaysLeft(${month}, ${day})"
              onkeydown="handleDateKeydown(event, ${month}, ${day})">
              ${day}
            </div>`;
        }
  
        calendarHTML += `</div>`;
        monthSlide.innerHTML = calendarHTML;
        calendarWrapper.appendChild(monthSlide);
      }
  
      // Initialize Swiper AFTER adding content
      new Swiper(".calendar-swiper", {
        loop: false,
        navigation: {
          nextEl: ".calendar-next",
          prevEl: ".calendar-prev",
        },
        slidesPerView: 1,
        spaceBetween: 10,
        resistance: false,
        touchReleaseOnEdges: true,
        shortSwipes: false,
        longSwipes: false,
        followFinger: false,
        allowTouchMove: false, // Disable touch-based swiping (optional)
      });
    }
  
    // Generate the calendar on page load
    generateCalendar();
  });
  
  // Update days left and focused date
  function updateDaysLeft(month, day) {
    const focusedDate = new Date(2025, month, day);
    const today = new Date();
    const timeDiff = focusedDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
    document.getElementById("focused-date").innerText = `${months[month]} ${day}, 2025`;
    document.getElementById("days-left").innerText = daysLeft >= 0 ? daysLeft : "Past Date";
  }
  
  // Handle keyboard events for calendar dates
  function handleDateKeydown(event, month, day) {
    if (event.key === "Enter" || event.key === " ") {
      updateDaysLeft(month, day);
    }
  }
  
  // Calculate days left from the input date
  function calculateDaysFromInput() {
    const datePicker = document.getElementById("date-picker");
    const selectedDate = new Date(datePicker.value);
    const today = new Date();
  
    if (isNaN(selectedDate.getTime())) {
      alert("Please enter a valid date.");
      return;
    }
  
    const timeDiff = selectedDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
    document.getElementById("focused-date").innerText = selectedDate.toDateString();
    document.getElementById("days-left").innerText = daysLeft >= 0 ? daysLeft : "Past Date";
  }