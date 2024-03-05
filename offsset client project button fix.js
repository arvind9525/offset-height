// Need to add <script>  </script> if you are add this code in body
<script>
jQuery(window).scroll(function() {
 
var current_top = $(document).scrollTop();
var scrollform = $('#row--16671').offset().top;
var formHeight = $('#row--16671').height();
var formBottom = scrollform + formHeight;

var formSection = $('#section--40610').offset().top;

if (current_top >= formBottom && current_top <= formSection) {
    $('#section--16790').show();
  	
} else {
    $('#section--16790').hide();
	
}
});
</script>
