Remote jQuery Selector
======================

Remote jquery selector is a simple function that allows you to select elements on a remote website using simple jquery syntax.
All you have to do is to add a website url before some selectors and voila!

A live demo can be found [here](http://youpinadi.github.io/remote-jquery-selector/)

This is just for fun, of course there is a proxy involved to get the page ;)


You can do lots of cool stuff very quickly:


```javascript
// generates a random album cover
function cleanTitle(title)
{
    return title
        .replace(/[A-Z]{2,}/g, '')
        .replace(/[0-9]/g, '')
        .replace(/[\W]+/g, ' ').split(' ').slice(0, 3).join(' ')
}

function generateAlbum()
{
    $.remote('http://en.wikipedia.org/wiki/Special:Random #firstHeading span, http://www.flickr.com/explore/interesting/7days img.pc_img, http://randomamazonproduct.com .amazon-title')
        .then(function ($title, $cover, $quote) {
            var $album = $('.album');
            $album.find('h1').html(cleanTitle($title.text()));
            $album.css({'background-image': 'url("' + $cover.eq(3).attr('src') + '")'});
            $album.find('h3').html(cleanTitle($quote.text()));
        });
}
generateAlbum();
```

