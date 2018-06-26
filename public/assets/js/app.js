
$("#showModal").click(function() {
  $(".modal").addClass("is-active");
});

$(".delete").click(function() {
   $(".modal").removeClass("is-active");
});

$("#closeModal").click(function() {
   $(".modal").removeClass("is-active");
});


// clears form field
$('.sheet-remove').on('click',function() {
  $(this).siblings().find('input').val('');
  console.log('you clicked');
});


$( "#addTests" ).click(function() {
$( ".spreadsheet" ).append( '<tr><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="remove-row sheet-remove" width="36px"><i class="far fa-trash-alt"></i></td></tr>' );
console.log('you clicked');
});
