Remote jQuery Selector
======================

Remote jquery selector is a simple function that allows you to select elements on a remote website using simple jquery syntax.
All you have to do is to add a website url before some selectors and voila!

This is just for fun, of course there is a proxy involved to get the page ;)


You can do lots of cool stuff very quickly:


```javascript
// query imdb's top 250 and display the movies covers
function imdbTop($els)
{
    var $body = $('body');
    $els.each(function(index){
        var imdb = $(this).attr('href').replace('/title/', '').replace('/', '');
        $('<img>')
            .attr('src', 'http://cdn.rszr.co/w=50&h=74&q=100&imdb=' + imdb)
            .attr('title', '#' + index + ' - ' + $(this).html()).
            appendTo($body);
    });
}

$.remote('http://www.imdb.com/chart/top?ref_=nb_mv_3_ch table a[href*="title/tt"]', imdbTop);
```
