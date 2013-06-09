(function ( $ ) {
    $.remote = function(selector, callback) {
        match = selector.match('(https?://[^ ]+)(?: ?(.*))?');
        console.log(match);
        if (match.length)
        {
            var url = match[1];
            var selector = match[2];
            $.ajax({
                url: 'http://dom-perignon.appspot.com/get?url=' + url,
                dataType: 'jsonp'
            }).then(function(response){
                if (selector)
                {
                    callback($(response).find(selector));
                }
                else
                {
                    callback($('<div>').append(response));
                }
            });
        }
        else
        {
            callback($(selector));
        }
        return this;
    };
}( jQuery ));


function imdbTop($els)
{
    $els.each(function(){
        var imdb = $(this).attr('href').replace('/title/', '').replace('/', '');
        $('body').append('<img src="http://cdn.rszr.co/w=50&q=100&imdb=' + imdb + '" style="float:left">');
    });
}

$.remote('http://www.imdb.com/chart/top?ref_=nb_mv_3_ch table a[href*="title/tt"]', imdbTop);


// $.remote('http://www.imdb.com/chart/top?ref_=nb_mv_3_ch table a[href*="title/tt"]',
//     function($els)
//     {
//       $els.each(function(){
//         imdb = $(this).attr('href').replace('/title/', '').replace('/', '');
//         $('body').append('<img src="http://cdn.rszr.co/w=50&q=100&imdb=' + imdb + '" style="float:left">');
//       });
//     });