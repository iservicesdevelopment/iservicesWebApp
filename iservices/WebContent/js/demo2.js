 $(document).ready(function () {
//	 			table sorting start
	 			//$('#trackReqTable').DataTable();
	 			//$('#example').DataTable();
	 			$('#example').DataTable( {
	 			    responsive: true
	 			} );
//               table sorting end 
//	 			side bar navigation sort
	 			$("#sidebar").niceScroll({
                     cursorcolor: '#53619d',
                     cursorwidth: 4,
                     cursorborder: 'none',
                 });

                 $('#dismiss, .overlay').on('click', function () {
                    $('#sidebar').removeClass('active');
                    $('.overlay').fadeOut();
                 });

                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').addClass('active');
                     $('.overlay').fadeIn();
                     $('.collapse.in').toggleClass('in');
                     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                 });
                 
//                 side bar navigation end
                 $('#startDateInput').datepicker({
             	    autoclose: true
             	});

             	$('#startDateInput').on('show', function(e){
             	    console.debug('show', e.date, $(this).data('stickyDate'));
             	    
             	    if ( e.date ) {
             	         $(this).data('stickyDate', e.date);
             	    }
             	    else {
             	         $(this).data('stickyDate', null);
             	    }
             	});

             	$('#startDateInput').on('hide', function(e){
             	    console.debug('hide', e.date, $(this).data('stickyDate'));
             	    var stickyDate = $(this).data('stickyDate');
             	    
             	    if ( !e.date && stickyDate ) {
             	        console.debug('restore stickyDate', stickyDate);
             	        $(this).datepicker('setDate', stickyDate);
             	        $(this).data('stickyDate', null);
             	    }
             	});
             	
             	 $('#endDateInput').datepicker({
             		    autoclose: true
             		});

             		$('#endDateInput').on('show', function(e){
             		    console.debug('show', e.date, $(this).data('stickyDate'));
             		    
             		    if ( e.date ) {
             		         $(this).data('stickyDate', e.date);
             		    }
             		    else {
             		         $(this).data('stickyDate', null);
             		    }
             		});

             		$('#endDateInput').on('hide', function(e){
             		    console.debug('hide', e.date, $(this).data('stickyDate'));
             		    var stickyDate = $(this).data('stickyDate');
             		    
             		    if ( !e.date && stickyDate ) {
             		        console.debug('restore stickyDate', stickyDate);
             		        $(this).datepicker('setDate', stickyDate);
             		        $(this).data('stickyDate', null);
             		    }
             		});
             });
 
 
 
 