
// called when the button of the form is clicked
function myFunction() {    
  let values = [];
  
  getValues(values);

  checkValidation(values);

  returnValues(values);
}

// gets the values of the inputs
function getValues(values) {
  values[0] = document.getElementById('FirstName').value;
  values[1] = document.getElementById('LastName').value;
  values[2] = document.getElementById('Email').value;
  values[3] = document.getElementById('Message').value;
  values[4] = document.getElementById('Approve').checked;
}

//checks validation. if (false) --> alert message
function checkValidation(values) {
  let valuesNames = ["First Name", "Last Name", "Email", "Message"]; 
  let validationFailed = false; // flag if true validation failed, don't check privacy policy

  for (let i = 0; i < 4; i++) {
    if (values[i] === "") {
      alert(valuesNames[i] + " must be filled out");
      $('#ResultModal').modal('toggle');  //closes modal
      validationFailed = true;
      break;
    }
  }
  if (values[4] === false && validationFailed === false) {
    alert("Privacy Policy must be checked to continue");
    $('#ResultModal').modal('toggle');  //closes modal
  }
}

// returns the values to index.html
function returnValues(values) {
  document.getElementById("ResultFirstName").innerHTML = values[0];
  document.getElementById("ResultLastName").innerHTML = values[1];
  document.getElementById("ResultEmail").innerHTML = values[2];
  document.getElementById("ResultMessage").innerHTML = values[3];
  document.getElementById("ResultApprove").innerHTML = values[4];
}