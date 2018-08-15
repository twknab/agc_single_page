// JS File for AlgaeCal Single Page 
// By Tim Knab - August 2018


$(document).ready(function () {

  // Get REST API data for Company Number and Hours:
  let data = $.get( "https://www.algaecal.com/wp-json/acf/v3/options/options", function(info) {

    // Store important variables for determining if business is open and if to display phone number:
    let phone = info.acf.default_phone_number, // business phone
      hours = info.acf.office_hours, // business hours
      pstTime = moment.tz(moment.tz(), "America/Los_Angeles"), // user time converted to PST
      day = pstTime.format('d'), // PST day of week, 0-6 format
      time = pstTime.format('HHmm'); // PST hour and minute, 2400 format


    // If business hours for today are still open, display phone number:
    if (hours[day].starting_time <= time && hours[day].closing_time > time) {
      $('#contact-wrapper').show();
    } else {
      $('#contact-wrapper').hide();
    }


  });
});