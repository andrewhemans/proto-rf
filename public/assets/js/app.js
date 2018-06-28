
$("#showModal").click(function() {
  $(".modal").addClass("is-active");
});

$(".close-icon").click(function() {
   $(".modal").removeClass("is-active");
});

$("#closeModal").click(function() {
   $(".modal").removeClass("is-active");
});


// clears form field
$(document).on('click', '.sheet-remove', function() {
  $(this).siblings().find('input').val('');
  console.log('you clicked');
});


$( "#addTests" ).click(function() {
$( ".spreadsheet" ).append( '<tr><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="remove-row sheet-remove" width="36px"><i class="far fa-trash-alt"></i></td></tr>' );
console.log('you clicked');
});

// let dropdown = document.querySelector('.dropdown');
// dropdown.addEventListener('click', function(event) {
//     event.stopPropagation();
//     dropdown.classList.toggle('is-active');
// });




// tags
