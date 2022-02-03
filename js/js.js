// Grid / list view

$(".select i").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active")
    $(".market").removeClass("list-view , grid-view").addClass($(this).data("class"));
    $(".main").removeClass("list-view , grid-view").addClass($(this).data("class"));
    $(".aside-serch").removeClass("list-view , grid-view").addClass($(this).data("class"));
})