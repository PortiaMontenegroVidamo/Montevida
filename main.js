$(document).ready(function(){

    var sidebar = $("#sidebar")
    
    function hideSidebar(timeout = 500) {
        sidebar.removeClass("d-block")
        setTimeout( function() {
            sidebar.addClass("d-none")
        }, timeout)
       
    }

    function showSidebar(timeout = 500) {
        sidebar.removeClass("d-none")
        setTimeout(function() {
            sidebar.addClass("d-block")
        }, timeout) 
    }

    $('#menu').click(function() {
        showSidebar();
    });

    $("#close-menu").click(function () {
        hideSidebar();
    });
});