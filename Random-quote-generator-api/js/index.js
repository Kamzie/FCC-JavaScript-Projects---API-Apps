$(document).ready(function(){
  
  var author;
  
  generateQuote();     
$('#new-quote').click(generateQuote);
});

  function generateQuote(){
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", /* Full link as i couldnt get it to work */
      dataType: "jsonp",
      success: function(response){
        if (response.quoteAuthor) {
          author = response.quoteAuthor;
        } else { 
          author = "Unknown";
        }
        $('#text').text('"' + response.quoteText + '"');
        $('#author').text('- ' + author);
        $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + response.quoteText + '-- ' + author);
      }
    }); 
  }

/*https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?*/