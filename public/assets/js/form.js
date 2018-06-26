var editor = ace.edit("editor");
var modalTitle;
var modalExpect;
var modalNotes;
var modalSteps;

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
