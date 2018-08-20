// JS File for AlgaeCal Single Page 
// By Tim Knab - August 2018

$(document).ready(function () {

  // Hide Pricing and Time by Default:
  $('#pricing-boxes-wrapper').hide();
  $('#contact-wrapper').hide();
  
  // GET Phone and Hours business data using AJAX:
  /*
    Note: The phone and business hours are retrieved from the API. The user's time is stored, and converted to PST (timezone where the business is located). If the business is open, the "Tap to Call" button is displayed, otherwise it remains hidden. The user's day of week is formatted as 0-6 (Sunday to Saturday, respectively), and the time as 2400 format (e.g, 1730 for 5:30PM).
  */
  $.ajax({
    url: "https://www.algaecal.com/wp-json/acf/v3/options/options",
    // If GET successful:
    success: function (info) {
      // Store hours, phone number, convert user time to PST:
      let phone = info.acf.default_phone_number,
        hours = info.acf.office_hours,
        pstTime = moment.tz(moment.tz(), "America/Los_Angeles"),
        day = pstTime.format('d'),
        time = pstTime.format('HHmm'),
        modal7YearContent = info.acf['7yr_full_copy'];

      // Set phone number on page to number retrieved from API:
      $('#phone').html(phone);

      // If business currently open, display phone number:
      if (hours[day].starting_time <= time && hours[day].closing_time > time) {
        $('#contact-wrapper').show();
      }

      // Set modal content to info retrieved from 7 year content propery:
      $('.modal-body').html(modal7YearContent);
    },
    // If GET fires off any errors:
    error: function (err) {
      // Hide contact wrapper if error retreiving from API:
      console.log("Error retrieving data: ", err);
      $('#contact-wrapper').hide();
    }
  }); // end AJAX GET request

  // Wistia Player API Actions:
  window._wq = window._wq || [];
  window._wq.push({
    id: "cecdwaq3dz", // video ID
    options: {
      playerColor: "#4c813d",
    },
    onHasData: function (video) {

      // When video plays, hide custom play button:
      video.bind("play", function () {
        $('#video-play-button').hide();
        $('#tap-to-play-button').hide();
        return video.unbind;
      });

      // If video reaches or exceeds 2 min, 13 sec (133s), display pricing boxes:
      video.bind("secondchange", function (s) {
        if (s >= 133) {
          $('#pricing-boxes-wrapper').show();
        }
      });

      // When video ends, reset video and display custom play button again:
      video.bind("end", function () {
        video.replaceWith("cecdwaq3dz");
        $('#video-play-button').show();
        $('#tap-to-play-button').show();
      });

      // Play video when custom play button is clicked:
      $("#video-play-button").click( function(){
        video.play();
      });

      // Change font awesome play icon when larger red video play button is hovered over:
      let playHover = false;
      $('#video-play-button').hover( function() {
        if (!playHover) {
          $('#play-button').addClass('play-button-hover');
          playHover = true;
        } else {
          $('#play-button').removeClass('play-button-hover');
          playHover = false;
        }
      });

      // If buy button is clicked, but pricing boxes are still hidden, reveal pricing boxes:
      $('#buy-button').click( function() {
        if ($('#pricing-boxes-wrapper').is(':hidden')) {
          $('#pricing-boxes-wrapper').show();
        }
      });
    }
  }); // end Wistia Player API Actions

});