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

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))