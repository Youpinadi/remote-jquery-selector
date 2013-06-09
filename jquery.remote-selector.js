(function ( $ ) {
    $.remote = function(selector, callback) {
        var match = selector.match('(https?://[^ ]+)(?: ?(.*))?');
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
