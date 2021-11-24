function sendEmail() {

    if(isValidated()) {

        var name = document.getElementById("contactName").value;
        var subject = document.getElementById("contactSubject").value;
        var message = document.getElementById("contactMessage").value;

        Email.send({
            Host: "smtp.gmail.com",
            Username: "shupinskiwebsite@gmail.com",
            Password: "FoundMyPasswordHuh?WelpItsADummyAccountSoBleh",
            To: 'nshupinski@gmail.com',
            From: "shupinskiwebsite@gmail.com",
            Subject: name + " - Message From My Website",
            Body: message,
          })
            .then(function (message) {
                /* Show Success */ 
                document.getElementById("alert-success").style.display = "block";

                /* Hide Fail */ 
                document.getElementById("alert-fail").style.display = "none";

                /* Hide Contact Box */ 
                document.getElementById("contact-form").style.display = "none";
            });
    }
    else {
        document.getElementById("alert-fail").style.display = "block";
    }
  }

  
  function isValidated() {

    var name = document.getElementById("contactName").value;
    var subject = document.getElementById("contactSubject").value;
    var message = document.getElementById("contactMessage").value;

      if ( (name != "") && (subject != "") && (message != "") ) {
        return true;
      }
      else {
          return false;
      }
  }