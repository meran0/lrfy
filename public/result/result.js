$(document).ready(function (){

    document.cookie = "completed=true; max-age=10000; samesite=lax; path=/";

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0)==' ') c = c.substring(1);
           if(c.indexOf(name) == 0)
              return c.substring(name.length,c.length);
        }
        return "";
   }

    var score = getCookie("score");
    var name = getCookie("name");
        $('#ur-name').text(`Not bad, ${name}`);
        $('#ur-result').text(`${score}/10`);
   //link = https://pbs.twimg.com/media/EtiMLVdUcAAOkm5?format=jpg&name=medium
   var twiiterimg = `pic.twitter.com/GOzFUTC7Rl`;
    var link = `https://twitter.com/share?url=http://lrfy-beta.herokuapp.com&text=How%20well%20do%20you%20know%20your%20songs?%20I%20scored%20${score}/10%20${twiiterimg}%20&hashtags=lrfy`;
    $('.share').append(`<a target="_blank" id="shr" href="${link}">Share to twitter</a> <br>`);

    $('.share').append(`<a id="shr" href="/">Try Again</a>`);

    $('.img-result').append(`<img src=../img/lando.jpg alt="pic">`);



});

