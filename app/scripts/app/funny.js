$(document).ready(function() {
$(".help-me").click(function () {
	$("#menu ul.themes").slideToggle( "slow", function() {
    // Animation complete.
	var tutu = $("#menu ul.themes input[type='radio']:checked").val();
	alert(tutu);
	});
});
	   $.ajax({ 
      type:"get", 
      dataType: 'xml',
      url: this.url, 
      success: function(data) { 
        $(data)
          .find('celebs')
          .children()
          .each(function() {
            var node = $(this);
            var id = node.attr('id');
            var name = node.find('name').text();
            var image = node.find('image').text();
          });
});