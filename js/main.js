var work_info = {
    comp1: "TEXT",
    comp2:"TEXT2",
    comp3:"TEXT3"
}

$(".comp")
.mouseenter(function() {
    let comp = work_info[$(this).data("comp")];
    $('#notice_information').html(comp)
});
$(".comp")
.mouseleave(function() {
    $('#notice_information').html("")
});