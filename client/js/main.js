// JS File for AlgaeCal Single Page 
// By Tim Knab - August 2018


$(document).ready(function () {
  // Get REST API data for Company Number and Hours - decides whether or not to show Call Me button (and converts user time to PST):
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
    }
  });

  // Hide Pricing Boxes by Default:
  $('#pricing-boxes-wrapper').hide();

  // Get Wistia Video
  window._wq = window._wq || [];
  window._wq.push({
    id: "cecdwaq3dz",
    options: {
      playerColor: "#4c813d",
    },
    onHasData: function (video) {

      video.bind("play", function () {
        // Hide play button on video play
        $('#video-play-button').hide();
        $('#tap-to-play-button').hide();
        return video.unbind;
      });

      // When video exceeds 133s (2 min, 13 sec), display pricing boxes:
      video.bind("secondchange", function (s) {
        if (s >= 133) {
          $('#pricing-boxes-wrapper').show();
        }
      });

      // When video ends, show custom play button again:
      video.bind("end", function () {
        video.replaceWith("cecdwaq3dz");
        $('#video-play-button').show();
        $('#tap-to-play-button').show();
      });

      // Play video when custom play button is clicked:
      $("#video-play-button").click( function(){
        video.play();
      });

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
    }
  });

});