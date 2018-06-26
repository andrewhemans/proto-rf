
var editor = ace.edit("editor");
var modalTitle;
var modalExpect;
var modalNotes;
var modalSteps;


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
$( "#row-1" ).click(function() {
  $('.row-1').val('');
  console.log('you clicked');
});




$( "#addTests" ).click(function() {
$( ".spreadsheet" ).append( '<tr><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="sheet-cell"><input class="input sheet-input" type="text" placeholder=""></td><td class="remove-row sheet-remove" width="36px"><i class="far fa-trash-alt"></i></td></tr>' );
console.log('you clicked');
});


// modal form
$( "#modalNew" ).click(function() {
  console.log('modal click');
  modalTitle = $('#modalTitle').val();
  modalExpect = $('#modalExpect').val();
  modalNotes = $('#modalNotes').val();
  modalSteps = editor.getValue();
  console.log(modalSteps);
  addTestToTable();
});

function addTestToTable() {
  $( ".table-body" ).append("<tr></tr>");

  $( ".table-body:last-child" ).append("<td>" + modalTitle + "</td>");
  $( ".table-body:last-child" ).append("<td>5 Steps</td>");
  $( ".table-body:last-child" ).append("<td>" + modalExpect + "</td>");
  $( ".table-body:last-child" ).append('<td class="remove-row"><i class="far fa-trash-alt"></i></td>');

  console.log("add test function");

};
