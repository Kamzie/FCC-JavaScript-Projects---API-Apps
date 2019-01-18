var search;
var baseUrl;

$(document).ready(function() {
  /*     Search button click     */
  $("#enter").click(showWiki);
});

function showWiki() {
  /*     For gaining search value from the search bar in HTML    */ search = $(
    "#look-up"
  ).val();
  (baseUrl =
    "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search="),
    $.ajax({
      url: baseUrl + search,
      dataType: "json",
      success: function(response) {
        /*     For loop iterating backwards to gain best search results near the top     */
        for (var i = response[1].length - 1; i >= 0; i--) {
          $("#result").prepend(
            "<br/>" +
              '<div class="container"><a href="' +
              response[3][i] +
              '" target="_blank">' +
              response[1][i] +
              "</a><br/>" +
              "<br/>" +
              response[2][i] +
              "<div>" +
              "<br/>"
          );
        }
      }
    });
}