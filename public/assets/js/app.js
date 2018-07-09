
$("#showModal").click(function() {
  $(".modal").addClass("is-active");
});

$(".close-icon").click(function() {
   $(".modal").removeClass("is-active");
});

$("#closeModal").click(function() {
   $(".modal").removeClass("is-active");
});


// device toggle

$("#desktop").click(function() {
  $("#desktop").addClass("toggle-active");
   $("#app").removeClass("toggle-active");
});

$("#app").click(function() {
  $("#app").addClass("toggle-active");
   $("#desktop").removeClass("toggle-active");
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

// test list count badge

var testCount;

function countTests() {
  testCount = $("#testList").children().length;

  $('#badge').attr('data-badge', testCount); //setter
  console.log($("#badge").data("badge"));

  if (testCount === 0) {
    console.log("no tests");
    $('#badge').removeClass("badge")
  }
}

countTests();


// delete on page view

$(document).on('click', '.delete-div',function() {
  $(this).closest('li').remove();
  // console.log('delete li');
  countTests();
});
