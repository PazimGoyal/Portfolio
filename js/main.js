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

$(".comp")
.mouseenter(function() {
    // let comp = work_info[$(this).data("comp")];
    let name=$(this).find('img').data("title");
    $('.work_experience_text').html(name)
});
$(".comp")
.mouseleave(function() {
    $('.work_experience_text').html("Work Experience");
});


$(".certifications_card").find('img')
.mouseenter(function() {
    // let comp = work_info[$(this).data("comp")];
    let name=$(this).data("title");
    $('.certifications_name').html(name)
});
$(".certifications_card").find('img')
.mouseleave(function() {
    $('.certifications_name').html("Certifcations");
});







const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


document.addEventListener('mousemove', function(e) {
    var followImg = document.getElementById('follow-img');
    followImg.style.left = e.pageX + 'px';
    followImg.style.top = e.pageY + 'px';
  });
  