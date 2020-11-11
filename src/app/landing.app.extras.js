//*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-71862452-1', 'auto');
/*/
console.log("------ NUEVO GOOGLE ANALITYCS --------------------------");
(function(s,o,g,a,m){a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(document,'script','https://www.googletagmanager.com/gtag/js?id=UA-71862452-1s');
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-71862452-1');
//*/


window.when_FB = $.Deferred();
window.fbAsyncInit = function () {
    console.assert(window.FB);
    window.when_FB.resolve(window.FB);
}


var userLang = navigator.language || navigator.userLanguage; 
if (userLang.substr(0,2) == "es") {
    console.log("language: Español");
    // Español ------------------------------------------
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.5&appId=294648343906769";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/es_LA/fbevents.js');
    fbq('init', '136742686694086');
    fbq('track', 'PageView');
} else {
    console.log("language: English");
    // Inglés ------------------------------------------
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=294648343906769";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
        

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '136742686694086');
    fbq('track', 'PageView');
}


// SocialAuth: key, secret
console.assert(!window.social, "ERROR: window.social already exist !!", [window.social]);
window.social = {
    google: "1079652811584-1a0710pi1pcvlnlait89dbadlo6p5emm.apps.googleusercontent.com", // MytMMaOS6pLHjiVlhJHtblcj    
}
