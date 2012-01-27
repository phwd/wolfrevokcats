/* Author: Philippe Harewood

*/

// Put Google formatted latex
(function(window,undefined){
	//prepare
			
	$(function(){
			$('pre.latex').each(function(e) {
			  var tex = $(this).text();
			  var url = "http://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(tex);
			  var cls = $(this).attr('class');
			  var img = '<img src="' + url + '" alt="' + tex + '" class="' + cls + '"/>';
			  $(img).insertBefore($(this));
			  $(this).hide();
			});	

	}); // end onDomLoad
	
	
})(window); // end closure










