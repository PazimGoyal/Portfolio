// var work_info = {
//     comp1: "TEXT",
//     comp2:"TEXT2",
//     comp3:"TEXT3"
// }

$(".contact")
.mouseenter(function() {
    // let comp = work_info[$(this).data("comp")];
    let name=$(this).data("name");
    $('.links_name').html(name)
});
$(".contact")
.mouseleave(function() {
    $('.links_name').html("Links you are looking for");
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))