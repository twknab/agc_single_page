// JS File for AlgaeCal Single Page 
// By Tim Knab - August 2018


$(document).ready(function () {
  // Hide business hours:
  ////////////////////////////////// 
  //
  //   UNHIDE LINE BELOW BEFORE YOU FINISH
  //
  //////////////////////////////////
  // $('#contact-wrapper').hide();


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
  ////////////////////////////////// 
  //
  //   UNHIDE LINE BELOW BEFORE YOU FINISH
  //
  //////////////////////////////////
  // $('#pricing-boxes-wrapper').hide();

  // Get Wistia Video
  window._wq = window._wq || [];
  window._wq.push({
    id: "cecdwaq3dz",
    // video_thumbnail: "https://embed-ssl.wistia.com/deliveries/1a92364950dc0031a7ec983870ddce20b27582d0.jpg?video_still_time=292",
    options: {
      playerColor: "#4c813d",
    },
    onHasData: function (video) {
      video.bind("play", function () {
        console.log("'play' event fired for " + video.name() + "! 🎉");
        return video.unbind;
      });

      // If second of video meets or exceeds 133 (2 minutes 13 seconds), pricing boxes will be display:
      video.bind("secondchange", function (s) {
        if (s >= 133) {
          $('#pricing-boxes-wrapper').show();
        }
      });

    }
  });

  $(video).attr("poster", "https://embed-ssl.wistia.com/deliveries/1a92364950dc0031a7ec983870ddce20b27582d0.jpg?video_still_time=292");


  // var baseURL = "http://fast.wistia.com/oembed/?url=";
  // var accountURL = escape("http://home.wistia.com/medias/");
  // var mediaHashedID = "cecdwaq3dz";

  // function getThumbnailUrl(hashedID, callback) {
  //   $.get(baseURL + accountURL + hashedID + "&format=json&callback=?,", callback);
  //   $.get("http://fast.wistia.net/oembed?url=http://home.wistia.com/medias/cecdwaq3dz?embedType=async&videoWidth=640", function (jsonObj) {
  //     thumbnail_url = jsonObj.thumbnail_url + '&' + 'video_still_time=292';
  //     console.log(thumbnail_url);
  //   });

  // }

  // function parseJSON(json) {
  //   // console.log(json.thumbnail_url);
  //   console.log(json);
  // };

  // getThumbnailUrl(mediaHashedID, parseJSON);


  // let url= "http://fast.wistia.net/oembed?url=https://embed-ssl.wistia.com/deliveries/1a92364950dc0031a7ec983870ddce20b27582d0.jpg?video_still_time=292"






});