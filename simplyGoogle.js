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


	var $hideFeed = $('<input id="btn-toggle" type="button" value="TOGGLE FEED" />');
	$hideFeed.appendTo($("body")); // 2. Append somewhere

	$($hideFeed).click(function() {
		$("#divFeed").toggle();
	});
	
	var $hideDetails = $('<input id="btn-details" type="button" value="TOGGLE DETAILS" />');
	$hideDetails.appendTo($("body")); // 2. Append somewhere

	$($hideDetails).click(function() {
		$("#divDetails").toggle();
	});

  // HIDE AND SHOW BUTTONS
	var $hideItem = $('<div class="hideItem"></div>').text("hide");
	var $showItem = $('<div class="showItem"></div>').text("show");

	$(".feed-item").before($hideItem); //prepend button
	$(".feed-item").before($showItem); //prepend button

	// $(".feed-item").click(function() {
	// 	$(this).css("background-color","yellow");
	// });

	$(".hideItem").click(function() {
		$(".feed-item", this).css("background-color","yellow");
	});

	

    
    
