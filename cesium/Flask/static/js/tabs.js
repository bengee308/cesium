$(document).ready(function() {
    Foundation.global.namespace = '';
    $(document).foundation();
    $('#tab-links a').on('click', function(e)  {
        e.preventDefault();
        var currentAttrValue = $(this).attr('href');
        // console.log(currentAttrValue);
        // Show/Hide Tabs
        var allTabs = ['#uploadTab','#featureTab','#buildModelTab']
        for (var i = 0; i < allTabs.length; i++){
            if (allTabs[i] === currentAttrValue){
                $(allTabs[i]).show();
            }
            else{
                $(allTabs[i]).hide();   
            }
        }
        // Change/remove current tab to active
        // $(this).parent('li').addClass('active').siblings().removeClass('active');
    });
    
    $('#feature-tab-links a').on('click', function(e)  {
        e.preventDefault();
        var currentAttrValue = $(this).attr('href');
        
        // Show/Hide Tabs
        var allTabs = ['#featureset1tab','#featureset2tab','#uploadcustomtab']
        for (var i = 0; i < allTabs.length; i++){

            if (allTabs[i] === currentAttrValue){
                console.log(currentAttrValue);
                $(allTabs[i]).show();
            }
            else{
                console.log("inactive" + allTabs[i]);
                $(allTabs[i]).hide();   
            }
        }
        // Change/remove current tab to active
        // $(this).parent('li').addClass('active').siblings().removeClass('active');
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