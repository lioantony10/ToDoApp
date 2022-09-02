$(function () {
    // PARA Button functions
    // $("#btn11").addClass("active");
    $(".btn").click(function () {
        $(".btn").removeClass("active");
        $(this).addClass("active");
    });

    // tap working
    let selectedButton;   // Global variable
    $("#btn1, #btn2").hide();
    $(".btn").on("click", function(){
        $(".welcome").hide();
        $(".para").hide();
        selectedButton = $("#" + $(this).data("id"));
        $(selectedButton).show();
    });

    // Submit function
    $(document).on("click", ".submit", function () {
        var data1 = $(".textArea").val();
        if(data1 === ""){
            alert ("List is empty, add something")
        } else {
            var test = `<div class="row-parent">
                <div class="list-row">
                <div class="list-num"> &#8227; </div>
                <div class="list-data">`+ data1 + `</div>
                <div class="edit-todo">&#9998;</div>
                <div class="remove-todo">&#x2715;</div>
                </div>
                <div class="list-error"></div></div>`;
            // $(".inputContainer").find
            $(selectedButton).append(test);
            $(".textArea").val("");
        }
    });

    // Remove button
    $(document).on("click", ".remove-todo", function () {
        var check = confirm("Do You Want To Delete This List?");
        if(check === true){
            $(this).parent('.list-row').remove();
        }
    });

    // Edit button
    $(document).on("click", ".edit-todo", function () {
        $(this).attr('class', 'update-todo');
        $(this).html('&#x2713;');
        var tes = $(this).parent('.list-row').find(".list-data").text();
        var area = $(this).parent('.list-row').find(".list-data").html('<textarea style="height:50px; width:300px">' + tes + '</textarea>');
    });

    // Update button
    $(document).on("click", ".update-todo", function () {
        var test = $(this).parent('.list-row').find("textarea").val();
        var area = $(this).parent('.list-row').find(".list-data").text(test);
        $(this).attr('class', 'edit-todo');
        $(this).html('&#9998;');
    });
});