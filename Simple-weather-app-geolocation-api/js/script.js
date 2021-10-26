var baseUrl;
var coordinates;

$(document).ready(function() {
  showWeather(); /* Show Weather info on page load/refresh */

  /*****  button to switch to °F or °C *****/
  $("#fah").click(function() {
    $("#temp").html(main * 9 / 5 + 32 + " °F");
    $("#cel").click(function() {
      $("#temp").html(main + " °C");
    });
  });
  function showWeather() {
    baseUrl = "https://fcc-weather-api.glitch.me/api";
    /* Gather user's location*/
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var coordinates =
          "/current?lat=" +
          position.coords.latitude +
          " &lon=" +
          position.coords.longitude;
        /* Ajax settings for API */
        $.ajax({
          url: baseUrl + coordinates,
          dataType: "jsonp",
          success: function(response) {
            main = Math.round(
              response.main.temp
            ); /***** round off °C and °F *****/
            $("#temp").html(main + " °C");
            $("#icon").html(
              '<img src="' +
                response.weather[0].icon +
                '"></img>' +
                "<br/>" +
                response.weather[0].main
            );
            $("#place").html(
              response.name + " (" + response.sys.country + ") "
            );
          }
        });
      });
    }
  }
});
