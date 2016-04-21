$(document).ready(function() {
    $(document).foundation();
    $('#tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('#tab-content ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
    $("label[for='headerfile'], label[for='zipfile']").click(function(e){
    	e.preventDefault();
    	var fileTarget = $(this).attr("for");
    	$("#"+ fileTarget).click();
    	console.log($("#"+ fileTarget).val());
    });
    $("#headerfile, #zipfile").change(function(){
    	var path = $(this).val();
    	var filename = path.replace(/^.*\\/, "");
    	var span = $(this).attr("data-selected");
    	$(span).text('   '+filename);
    });
    // $('#myModal').foundation();
    // $('#feature_modal_open').on('click', function() {
    //         // var popup = new Foundation.Reveal($('#myModal'));
    //         // popup.open();
    //         console.log("hello");
    //     $('#myModal').reveal();
    // });
    // $(document).foundation();
    $('a.custom-close-reveal-modal').click(function(e){
        e.preventDefault();
      $('#myModal').foundation('reveal', 'close');
    });
});