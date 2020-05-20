function sendMail(contactForm) {
    emailjs.send("gmail", "test", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.email.value,
      "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    $("#fullname").val("");
    $("#emailaddress").val("");
    $("#projectsummary").val("");
    return false;
}
