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

// login test values

var titleLogin = "Login"


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

// add on page view

$( "#pageSaveNew" ).click(function() {
  console.log('save new');
  saveInputs();
  // closeAndSave();
  clearInputs();
  addTestToList();
  countTests();
});


function addTestToList() {

  console.log("add test to list");

  var listItem = $("<li>");
  $(listItem).addClass("list-item")

  $( "#testList" ).append(listItem);

  $( listItem ).append("<p>" + modalTitle + "</p>");

  var deleteDiv = $("<div>");

  $( deleteDiv).addClass("delete-div trash");
  $( deleteDiv ).append('<i class="far fa-trash-alt"></i>');

  $( listItem ).append( deleteDiv );

};


$('#testList').on('mouseenter','.list-item',function() {
    $(this).find( ".trash" ).css( "visibility", "visible" );
    console.log("this works");
});

$('#testList').on('mouseleave','.list-item',function() {
    $(this).find( ".trash" ).css( "visibility", "hidden" );
});
