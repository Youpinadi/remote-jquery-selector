var $rj = function(selector, callback)
{
  var cache = false;
  match = selector.match('(https?://[^ ]+) (.*)');
  if (match.length)
  {
    var url = match[1];
    var selector = match[2];

    $.ajax({
      url: 'http://dom-perignon.appspot.com/get?url=' + url,
      dataType: 'jsonp'
    }).then(function(response){
      callback($(response).find(selector));
    });
  }
  else
  {
    callback($(selector)); 
  }
}
