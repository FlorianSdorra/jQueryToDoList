$(document).ready(function () {
    console.log("document is ready...");
    $('.addBtn').click(function () {
        let val = $('input').val();
        let html = '<li>' + val + '<button class="close">x</button></li>'

        $(html).appendTo('ul');
        $('input').val('');
    });

    $('ul').on('click', 'li', function (e) {

        $(this).toggleClass("checked");
        // just for seperating the button from this function 
        $(".close").click(function (event) {
            event.stopPropagation();



        });
    });

    $('ul').on('click', 'li.close', function (e) {
        console.log("...hello " + $(this).text());
        $(this).parent().remove();
    });





})