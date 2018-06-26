var editor = ace.edit("editor");
var modalTitle;
var modalExpect;
var modalNotes;
var modalSteps;

// modal form
$( "#modalNew" ).click(function() {
  console.log('modal click');
  saveInputs();
  closeAndSave();
  clearInputs();
});

function saveInputs() {
  modalTitle = $('#modalTitle').val();
  modalExpect = $('#modalExpect').val();
  modalNotes = $('#modalNotes').val();
  modalSteps = editor.getValue();
}

function addTestToTable() {

  console.log("add test function");

  var tableRow = $("<tr>");
  $(tableRow).addClass("table-row")

  $( ".table-body" ).append(tableRow);

  $( tableRow ).append("<td>" + modalTitle + "</td>");
  $( tableRow ).append("<td>5 Steps</td>");
  $( tableRow ).append("<td>" + modalExpect + "</td>");

  var deleteRow = $("<td>");

  $( deleteRow ).addClass("remove-row");
  $( deleteRow ).append('<i class="far fa-trash-alt"></i>');

  $( tableRow ).append( deleteRow );

};

$(document).on('click', '.remove-row',function() {
  $(this).closest('tr').remove();
  console.log('trying to delete');
});

function closeAndSave() {
  if ( !$("#modalTitle").val() || !$("#modalExpect").val() ) {
    // addTestToTable();
    console.log("blank");
  } else {
    saveInputs();
    addTestToTable();
    console.log("filled");
  }
};

$( ".close-save" ).click(function() {
  closeAndSave();
  clearInputs();
});

function clearInputs() {
  $("#modalTitle").val("");
  $("#modalExpect").val("");
  $("#modalNotes").val("");
  editor.setValue("");
}
