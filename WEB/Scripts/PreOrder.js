$("#form-preorder").submit(function (event) {
  let message = "";
  while (message.length === 0) {
    if (
      $("#email").val().length == 0 ||
      $("#name").val().length == 0 ||
      $("#copies").val().length == 0 ||
      $("#type").val().length == 0 ||
      $("#address").val().length == 0 ||
      $("#password").val().length == 0
    ) {
      message = "All Field Must Be Filled!";
      break;
    }
    if ($("#name").val().length < 3) {
      message = "Name Length must be more than 3";
      break;
    }
    if ($("#email").val().indexOf("@") === -1) {
      message = "Email Length must contain @";
      break;
    }
    if ($("#password").val() === "secret") {
      message = "Password Must not be a secret";
      break;
    }
    if (parseInt($("#copies").val()) < 0) {
      message = "Number Of Copies Must be More than 0";
      break;
    }
    if (!$("#checkbox").is(":checked")) {
      message = "You Must Agreed To Terms and Service";
      break;
    }
    break;
  }
  if (message.length != 0) {
    alert(message);
    event.preventDefault();
  } else {
    alert("Form Submited !");
  }
});
