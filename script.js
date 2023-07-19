function Account() {
    const model = document.getElementById("model-body");
    const grid = document.createElement("div");
    grid.classList.add("row d-flex align-items-center justify-content-center");
    model.appendChild(grid);

    const row1 = document.createElement("div");
    row1.classList.add("col-md-5 col-lg-6 col-xl-5");
    const img = document.createElement("img");
    img.src = "./images/plantTree.svg";
    img.classList.add("img-fluid");
    img.alt = "Login image";
    row1.appendChild(img);
    grid.appendChild(row1);

    const row2 = document.createElement("div");
    row2.classList.add("col-md-6 col-lg-4 col-xl-4 offset-xl-1");
    const form = document.createElement("form");
    grid.appendChild(row2);
    row2.appendChild(form);

    const email = document.createElement("div");
    const emailInput = document.createElement("input");
    const emailLabel = document.createElement("label");
    email.classList.add("form-outline mb-2");
    emailInput.type = "email";
    emailInput.id = "emailInput";
    emailInput.classList.add("form-control form-control-lg");
    emailLabel.for = "emailInput";
    emailLabel.innerHTML = "Email address";
    emailLabel.classList.add("form-label");
    form.appendChild(email);
    email.appendChild(emailInput);
    email.appendChild(emailLabel);

    const password = document.createElement("div");
    const passwordInput = document.createElement("input");
    const passwordLabel = document.createElement("label");
    password.classList.add("form-outline mb-2");
    passwordInput.type = "password";
    passwordInput.id = "passwordInput";
    passwordInput.classList.add("form-control form-control-lg");
    passwordLabel.for = "passwordInput";
    passwordLabel.innerHTML = "Password";
    passwordLabel.classList.add("form-label");
    form.appendChild(password);
    password.appendChild(passwordInput);
    password.appendChild(passwordLabel);

    const checkboxContainer = document.createElement("div");
    const checkbox = document.createElement("div");
    const remberMecheck = document.createElement("input");
    const remberMeLabel = document.createElement("label");
    const forget
    checkboxContainer.classList.add("d-flex justify-content-around align-items-center mb-4");
    checkbox.classList.add("form-check");
    remberMecheck.type = "checkbox";
    remberMecheck.id = "remberMecheck";
    remberMecheck.attributes.unchecked = "";
    remberMeLabel.classList.add("form-check-label");
    remberMeLabel.for = "remberMecheck";
    remberMeLabel.innerHTML = "Remember me";
    form.appendChild(checkboxContainer);
    checkboxContainer.appendChild(checkbox);
    checkbox.appendChild(remberMecheck);
    checkbox.appendChild(remberMeLabel);

}