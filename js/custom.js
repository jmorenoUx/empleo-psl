$(document).ready(function() {
    $("#light-slider").lightSlider({
        item: 5,
        slideMargin: 5
    });

    $("#light-slider2").lightSlider({
        item: 8,
        slideMargin: 5
    });
    $("#light-slider3").lightSlider({
        item: 2,
        slideMargin: 0
    });

    var words = [
        {text: "DevOps", weight: 13, link: 'http://github.com/mistic100/jQCloud'},
        {text: "Ux", weight: 10.5, link: 'http://www.strangeplanet.fr'},
        {text: "Innovation", weight: 9.4, link: 'http://piwigo.org'},
        {text: "Java", weight: 13, link: 'http://github.com/mistic100/jQCloud'},
        {text: "Spark", weight: 10.5, link: 'http://www.strangeplanet.fr'},
        {text: "Big Data", weight: 9.4, link: 'http://piwigo.org'},
        {text: "NodeJs", weight: 13, link: 'http://github.com/mistic100/jQCloud'},
        {text: "Docker", weight: 10.5, link: 'http://www.strangeplanet.fr'},
        {text: ".Net", weight: 9.4, link: 'http://piwigo.org'}
        
      ];
    $('#keywords').jQCloud(words, {
        width: 1900,
        height: 500
    });
});