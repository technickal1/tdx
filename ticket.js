https://anderson.teamdynamix.com/TDNext/Apps/1365/Tickets/TicketDet.aspx?TicketID=*

$(document).ready(function(){
	
	// FLEXBOX
	// flex_container = $("<div>").class('flex_container');
	// flex1 = $("<div>").attr('id','flex1');
	// flex2 = $("<div>").attr('id','flex2');
	// flex3 = $("<div>").attr('id','flex3');
	// flex_container.append(flex1,flex2,flex3);
	
	upDetails = $("#upDetails"); // contains details, description, feed
	details = $("#divDetails");
	feed = $("#divFeed");
	description = $("#divDescription");
		description.removeClass('gutter-bottom-lg');
	requestor = $(".panel-default");
	attachments = $("#divAttachments");
	custom_attributes = $("#divCustomAttributes");
	tags = $("#itTags_lblTags");
	upFeedCount = $("#upFeedCount");
	btnComment = $("#divFeed").find('#btnComment');
	show_system_items = $('<button>').text('Toggle System Items').addClass('btn btn-primary').attr('id','show_system_items');
		upFeedCount.after(show_system_items);
		
	
	// REARRANGE
	upDetails.after(feed);
	requestor.after(attachments);
	requestor.after(description);
	description.after(custom_attributes);
	// attachments.before(custom_attributes);
	details.after(tags);
	
	// REMOVE SYSTEM FEED ITEMS
	system_feed_items = $('span.gray:contains("System")').parent().parent().parent(); // targets system feed divs
		system_feed_items.each(function(){
			$(this).hide();
		});
	show_system_items.click(function(e){
		e.preventDefault();
		system_feed_items.toggle();
		});
	
	
	// $('html').replaceWith(details); // works
});
