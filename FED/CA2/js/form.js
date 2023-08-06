const formContainer = document.getElementById("form-content-1");
const feedbackContainer = document.getElementById("form-content-2");
const tempData = ["@gmail.com", "@ichat.sp.edu.sg", "@yahoo.com", "@outlook.com"];
var selected = "0", String;
const RawData = Array.from(document.querySelectorAll("select"));
Array.from(RawData).forEach((element) => {
	element.addEventListener("change", () => {
		selected = element.value;
	});
});
const input = document.getElementById("input1");
input.addEventListener("change", () => {
	String = input.value;
});
const submit = document.getElementById("submit-1");
submit.addEventListener("click", function () {
  console.log(String);
  if (!("function String() { [native code] }".includes(String))) {
    // console.log(String + tempData[selected]);
    formContainer.classList.add("hide-form");
    feedbackContainer.classList.remove("hide-form");
  } else {
    alert("Please enter a valid email address");
  }
});


(() => {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");
	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();
