var scriptTag = document.createElement("script");
    $(scriptTag).attr('id','scriptTag');
    $(scriptTag).attr('src','https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js');
    $("head").append(scriptTag);
    console.log(scriptTag);
    
var modalLinkCSS = document.createElement("link");
    console.log(modalLinkCSS);
    $(modalLinkCSS).attr('id','modalLinkCSS');
    $(modalLinkCSS).attr('rel',"stylesheet");
    $(modalLinkCSS).attr('href','https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css');
    $("head").append(modalLinkCSS);
    
    
