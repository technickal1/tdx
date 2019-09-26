$(document).ready(function(){
	
	//TODO
	// add status colored options (i.e. open is green)
	// change fade for tickets from bottom (ex: masteringpurpose when scroll)
	// set iframe elements for div instead of open modal
	// add inspirational quotes to empty panel http://quotes.rest/#/
	// easy way to change status of ticket
	// add hover over ticket with description
	// group dropdown button https://www.w3schools.com/howto/howto_js_dropdown.asp
	// div feed to scroll
	
	// jQueryModal CSS
	$('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css">');
	// Material Design Lite Color Theme CSS
	$('body').append('<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.grey-light_blue.min.css">');
	// Material Design Lite Icons CSS
	$('body').append('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">');
	// jQueryModal JS
	$('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js">');
	
	//////////////////////////////////////////////
	///// document load for the #appDesktop iframe
	//////////////////////////////////////////////
	
	$('#appDesktop').delay(1000).on("load", function() {
	// alert('app desktop w/ timer has loaded'); // use to check timing
	
	var $iFrameContents = $('#appDesktop').contents();
	// alert($iFrameContents);
   ///// https://www.htmlgoodies.com/beyond/css/filtering-iframe-content-using-jquery.html
  
	// $column1 = $iFrameContents.find('div.desktop-module');
	$column1 = $iFrameContents.find('div.desktop-module'); // CHANGE DIV ID IF NEW!!!!
	$iFrameContents.find('html').delay(500).replaceWith($column1);
	// alert('replaced'); // walks through alerts! IMPORTANT
	
	setTimeout(function() { //sets a delay for everything to load
		// alert('$column1 = ' + $column1.text()); // use to check timing
		// $column1.css("border","5px solid red"); // just make sure this is working, CSS goes into Stylus
	
		///// ATTEMPT for JSON
			$ticket_iframe = $("<iframe>").text('ticket_iframe');
			// ticket_iframe.attr('src','https://anderson.teamdynamix.com'); // works w/o click
			$ticket_iframe.attr('id','ticket_iframe');
			$ticket_iframe.css('display','none');
			$ticket_iframe.prependTo($column1); //insert into element
			$ticket_iframe_close = $("<button>").text('Close');
			$ticket_iframe_close.prependTo($column1);
			$ticket_iframe_close.css('display','none');
		
			 
			a = $column1.find('a');
			a.removeAttr('onclick');
			a.removeAttr('href'); // remove this in hopes of NOT opening in new window
			
			a.each(function () {
			 // save all necessary link information
		    var href = $(this).attr('href');
		    //var text = $(this).html(); // retain text
			});
			    
			a.click(function(e){ // this happens when an a element is clicked
				// alert("tr a clicked");
			});
			
			// use this url to prepend iframe w/ticket id (GLOBAL)
			$ticket_id_url = 'https://anderson.teamdynamix.com/TDNext/Apps/1365/Tickets/TicketDet.aspx?TicketID=';
			 
			///// ID column
			// get ID info when clicking on ID
			ticket_ID = $column1.find('td:nth-child(2)'); // 2nd column - ID
			ticket_ID.addClass('ticket_ID');
				 var ids = [];
			ticket_ID.each(function() {
			    
			    var ID_html = $(this).html(); // retain text (2x faster than .text())
			    var $ID_text = $(this).text(); // retain text
			    	ids + ids.push($ID_text);	
			    
			    $(this).click(function() {
			    	$full_ticket_URL = $ticket_id_url + $ID_text;
			    	// alert($full_ticket_URL);
			    	// $ticket_iframe.attr('src', $full_ticket_URL);
			    });
			});
			///// END ID column
			
			// ///// TABLE ROW CLICKS & STUFF
			tr = $column1.find('tr');
	       
			 tr.hover(function(){
					  $(this).css("background-color","rgba(51,51,51,0.1)");
					  $(this).css("cursor","pointer");
					  }, function(){
					  $(this).css('background-color','transparent');
				});
			 tr.click(function() {
			 	// open ticket in modal or iframe
			    	// alert("tr clicked");
			    	tr_ticket_id = ($(this).find('a').first().text());
			    	// alert(tr_ticket_id);
			    	tr_full_ticket = $ticket_id_url + tr_ticket_id;
			    	// alert(tr_full_ticket);
			    	$ticket_iframe.css('display','block');
			    	$ticket_iframe_close.css('display','block');
			    		$ticket_iframe_close.click(function(){
							$ticket_iframe.css('display','none');
							$(this).css('display','none');
						});
			    	// $('#appDesktop').css('background-color','rgba(0,0,0, 0.4)');
			    	$ticket_iframe.attr('src', tr_full_ticket);
			 });
			 
			// ///// STATUS column for TDX table
			// 	status_column = $column1.find('td:nth-child(1)'); // 1st column - STATUS
			// 		var stati = [];
			// 	status_column.each(function () {
					 
			//    	var $status = $(this).text(); // retain text
			//    		stati + stati.push($status);	
			   		
			//     //$(this).html("status"); // replace HTML
				    
		 //  	if ($status == 'New'){
	  // 		$(this).css(
	  // 			{
	  // 			"color": "limegreen",
	  // 			'text-align':'center',
	  // 			"text-transform":"uppercase",
	  // 			"font-size":".8rem!important",
	  // 			"border-bottom":"1px solid limegreen"
	  // 		});
		 //  	}
		   	
		 //  	if ($status == 'Open'){
		 //  		$(this).css({
		 //  			'color':'orangered',
		 //  			'text-align':'center',
		 //  			"text-transform":"uppercase",
		 //  			"font-size":".8rem!important"
		 //  		});
	   			
		 //  	}
		   	
			// 	if($(this).text().match('On Hold')) {
					
			// 		var on_hold_full = $(this).text(); // retain text
			// 		$(this).text('On Hold');
			// 				$(this).css({
			//    			'color':'#aaa',
			//    			'text-align':'center',
			//    			"text-transform":"uppercase"
			//    		});
			// 	         $(this).hover(function(){
			// 			  $(this).text(on_hold_full);
			// 			  $(this).css("cursor","pointer");
			// 			  }, function(){
			// 			  $(this).text('On Hold');
			// 			});
			// 	    } 
				    
			//     if ($status == 'In Process'){
		 //  		$(this).css({
		 //  			'color':'royalblue',
		 //  			"text-transform":"uppercase",
		 //  			"font-size":".8rem!important"
		 //  		});
	   			
		 //  	}
		   	
		   	
				   
			// 	});
			
			///// END STATUS column
			
			///// TITLE column
				title_column = $column1.find('td:nth-child(3)'); // 3rd column - TITLE
				title_column.each(function () {
			    var $title = $(this).text(); // retain text
			   //  	$title_column.click(function(){
						// 	alert($title); //test tomorrow
						// });
			    
				});
			///// END TITLE column
			
			///// MODIFIED column
				modified_column = $column1.find('td:nth-child(4)'); // 4th column - MODIFIED
				modified_column.each(function () {
			    //alert($(this).html());
			    var $modified = $(this).text(); // retain text
			    //alert(modified); //test tomorrow
			    //$(this).html("status"); // replace HTML
			    
		   	var now = new Date();
		   	// alert('Now = ' + now);
			    	
		    	if ($(this).text().match(now)) {
			    		// alert('truth');
			    } 
				});
			///// END MODIFIED column
			
		  // new_div.after('<button>after</button>'); // to show example
		  // new_div.append('<button>append</button>'); // to show example
			
			// status = module.find('td:nth-child(1)');   // 1st column - STATUS
			// id = module.find('td:nth-child(2)');   // 2nd column - ID
			// title_column = module.find('td:nth-child(3)');    // 3rd column - TITLE
			// modified_column = module.find('td:nth-child(4)'); // 4th column - MODIFIED
			
	var tickets = [];

	$(function () {
	    tr.each(function () {
	        status = $(this).find('td:eq(0)').text(); // status
	        id = $(this).find('td:eq(1)').text(); // id
	        title = $(this).find('td:eq(2)').text(); // title
	        modified = $(this).find('td:eq(3)').text(); // modified time
	        prim_resp = $(this).find('td:eq(4)').text(); // primary responsibility
	        tickets.push({ 
	          status: status, 
	          id: id, 
	          title: title, 
	          modified: modified, 
	          prim_resp: prim_resp  
	        });
	       
	    });
	    var ticketsJSON = JSON.stringify( tickets );
	     //alert(ticketsJSON); //JSON FORMAT!!
	
	    // CREATE NEW TABLE.
	      new_table = $('<table>').attr('id','new_table');
	
	      // INSERT & CREATE TABLE HEADER ROW
	      thead = $('<thead>'); // header
	      new_table.append(thead); // add header to table
	      head_tr = $('<tr>'); // header row
	      thead.append(head_tr); // add header row
	
	      // CREATE VALUES FOR HTML HEADER. 
	      // ('Status', 'ID', 'Title', 'Modified', 'Prim Resp')
	      head_tr.append('<td>Status</td>'); // Status
	      head_tr.append('<td>ID</td>'); // ID
	      head_tr.append('<td>Title</td>'); // Title
	      head_tr.append('<td>Modified</td>'); // Modified Time
	      head_tr.append('<td>Prim Resp</td>'); // Primary Responsible
	
	      // INSERT & CREATE TABLE BODY
	      tbody = $('<tbody>'); // body
	      new_table.append(tbody); // add body to table
	
			///// 
			///// IMPLEMENTS ALL JSON TABLE AND SEARCH OPTION :) /////
			/////
	      $('#appDesktop').replaceWith(new_table); // try sometime
			// $column1.prepend(new_table); //UNCOMMENT TO USE JSON TABLE!
			
	      // JSON inserts
	      tickets.forEach(function(ticket) {
	      //console.log(ticket);
	      var body_tr; // start body row
	        body_tr = $('<tr>'); // body row
	        body_tr.append('<td>' + ticket.status + '</td>');
	        body_tr.append('<td>' + ticket.id + '</td>');
	        body_tr.append('<td>' + ticket.title + '</td>');
	        body_tr.append('<td>' + ticket.modified + '</td>');
	        body_tr.append('<td>' + ticket.prim_resp + '</td>');
	        tbody.append(body_tr); // add body row
	        // console.log(ticket.status);
	      });
	      
      	///// TABLE ROW CLICKS & STUFF -- JSON TABLE IMPORTANT
			new_table_tr = new_table.find('tr'); // find table row
			new_table_tr.click(function() { // open ticket in modal or iframe
			    	new_table_tr_ticket_id = ($(this).find('td:nth-child(2)').text());  // id column
			    	new_table_tr_full_ticket = $ticket_id_url + new_table_tr_ticket_id; // create ticket url
			    	$new_table_ticket_iframe.css('display','block'); // show hidden iframe
			    	$new_table_ticket_iframe_close.css('display','block'); // show hidden iframe button
			    	new_table.toggle(); // hide new table
			    	json_live_search.toggle();
			    		$new_table_ticket_iframe_close.click(function(){
							$new_table_ticket_iframe_close.css('display','none');
							$(this).css('display','none');
						});
			    	// $new_table_ticket_iframe.attr('src', new_table_tr_full_ticket); // OPENS TICKET IN IFRAME
			    	// BELOW OPENS TICKET IN NEW WINDOW
			    		var
						w       = 1000,
						h       = 600,
						l       = (screen.availWidth - w) / 2,
						t       = (screen.availHeight - h) / 2;
		    		window.open(new_table_tr_full_ticket,"window","width= "+ w + ",height=" + h + ",left=" + l + ",top=" + t + ", scrollbars = yes, location = no, toolbar = no, menubar = no, status = no");
						 return false;
			    	
			  //  	// jQuery UI Dialog
			  //  	$new_table_ticket_iframe.dialog({
					//  modal: true,
					//  autoOpen: true,
					//  height: 600,
					//  width: 1200
					// });
			 });
	      
	      status_span = $('<span>').attr('id','status_span');
	      	
	      	///// STATUS column for JSON table
				status_column = new_table.find('td:nth-child(1)'); // 1st column - STATUS
				status_column.each(function () {
					
	   		var $status = $(this).text(); // retain texts
				    
		   	if ($status == 'New'){
	   		$(this).attr('data-text',$status);
		   	}
		   	
		   	if ($status == 'Open'){
		   		$(this).attr('data-text',$status);
		   	}
		   	
				if ($status.match('On Hold')) {
					$(this).attr('data-text',$status)
					
					var on_hold_full = $(this).text(); // retain text
					
					$(this).text('On Hold');
			           $(this).hover(function(){
						  $(this).text(on_hold_full.slice(9));
						  }, function(){
						  $(this).text('On Hold');
						});
				    }
				    
		      if ($status == 'In Process'){
		   		$(this).attr('data-text',$status)
	   			}
				   
				});
				
			///// ID column -- JSON TABLE
			// get ID info when clicking on ID
			new_table_ticket_ID = new_table.find('td:nth-child(2)'); // 2nd column - ID
			new_table_ticket_ID.addClass('ticket_ID');
			new_table_ticket_ID.each(function() {
			    
			    var ID_html = $(this).html(); // retain text (2x faster than .text())
			    var $ID_text = $(this).text(); // retain text
			    id_link = $(this).wrapInner("<a></a>").attr('href',$ticket_id_url + $ID_text);
			    
			    $(this).click(function() {
			    	// alert($(this).text());
			    	$full_ticket_URL = $ticket_id_url + $ID_text;
			    	// alert($full_ticket_URL);
			    });
			});
			///// END JSON TABLE ID column
	      
	      center_the_search = $('<div>').attr('id','center_the_search'); //creates a div to center the search bar
	      json_live_search = $('<input>').attr('id','json_live_search');
	      json_live_search.attr('placeholder','Search by name, title, or ID');
	      
	      $(document).on('keyup', function(event) {
		       if (event.key == "s") {
		           //alert('the s key pressed.');
		           json_live_search.focus();
		       }
		   });
   		// group_dropdown = $('<div>').attr('id','group_dropdown').text('group_dropdown');
   			
   		center_the_search.append(json_live_search);
			// json_live_search.after(group_dropdown);
	      
      	new_table.before(center_the_search);
      	 $("#json_live_search").on("keyup", function() {
			    var value = $(this).val().toLowerCase();
			    $("#new_table tr").filter(function() {
			      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			    });
			  });
			  
			///// ATTEMPT for JSON 
			///// try out jquery modal
			$new_table_ticket_iframe = $("<iframe>").text('new_table_ticket_iframe');
			$new_table_ticket_iframe.attr('id','new_table_ticket_iframe');
			new_table.after($new_table_ticket_iframe) //insert after element
			$new_table_ticket_iframe_close = $("<button>").addClass('mdl-button mdl-js-button mdl-button--fab mdl-button--colored');
			close_button = $('<i>');
				close_button.text('close').addClass('material-icons');
				$new_table_ticket_iframe_close.wrapInner(close_button);
			// $new_table_ticket_iframe_close = $("<button>").text();
			$new_table_ticket_iframe_close.attr('id','new_table_ticket_iframe_close');
			new_table.after($new_table_ticket_iframe_close);
	        
	
	}) // END 1st function
			
			
			
	}, 500);
   	
	
	});







}); // matches top document ready

///// insert jQueryModal elements
	// modal = $("<div>").attr("id","ex1").addClass('modal');
	// modal.text('im a freakin modal');
	// p = $("<p>").text("Thanks for clicking").appendTo(modal); // needs to be content
	// a = $("<a>").attr("href","#").attr("rel","modal:close").text('Close').appendTo(modal);
	// $column1.prepend(modal);
	
	// a_open = $("<div>").text('Open Modal').attr('href','#ex1');
	// 	a_open.attr('rel','modal:open');
	// 	a_open.attr('id','open_modal');
	// 	a_open.click(function(){
	// 		alert('modal div clicked');
	// 	});
	// $column1.prepend(a_open);
	
