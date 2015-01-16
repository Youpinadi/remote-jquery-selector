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
                var selector = match[2];
                $.ajax({
                    url: 'http://dom-perignon.appspot.com/get?url=' + url,
                    dataType: 'jsonp'
                }).then(function(response){
                    if (selector)
                    {
                        deffered.resolve($(response).find(selector));
                    }
                    else
                    {
                        deffered.resolve(response);
                    }
                });
            }
        });
        return $.when.apply(null, deffereds);
    };
}( jQuery ));
