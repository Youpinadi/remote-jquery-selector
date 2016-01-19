(function ( $ ) {
    $.remote = function(selectors) {
        var deffereds = [];
        selectors = selectors.split(',');
        $.each(selectors, function(index, selector){
            var deffered = new jQuery.Deferred();
            deffereds.push(deffered);
            var match = selector.match('(https?://[^ ]+)(?: ?(.*))?');
            if (match.length)
            {
                var url = match[1];
                var query = "select * from html where url='" + url + "'"
                var selector = match[2];
                $.get(
                 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=xml',
                 function(response){
                    if (selector)
                    {
                        deffered.resolve($(response).find(selector));
                    }
                    else
                    {
                        deffered.resolve($(response));
                    }
                });
            }
        });
        return $.when.apply(null, deffereds);
    };
}( jQuery ));
