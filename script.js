const form = document.getElementById("myForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("Email");
const ageInput = document.getElementById("age");
const contactInput = document.getElementById("contact");
const addressInput = document.getElementById("address");

form.addEventListener("submit", function (e) {
    let isValid = true;

    // First Name validation (example: must be at least 2 characters)
    if (firstNameInput.value.length < 2) {
        isValid = false;
        document.getElementById("firstNameError").textContent =
            "First Name must be at least 2 characters.";
        firstNameInput.classList.add("is-invalid");
    } else {
        document.getElementById("firstNameError").textContent = "";
        firstNameInput.classList.remove("is-invalid");
    }

    // Last Name validation (example: must be at least 2 characters)
    if (lastNameInput.value.length < 2) {
        isValid = false;
        document.getElementById("lastNameError").textContent =
            "Last Name must be at least 2 characters.";
        lastNameInput.classList.add("is-invalid");
    } else {
        document.getElementById("lastNameError").textContent = "";
        lastNameInput.classList.remove("is-invalid");
    }

    // Email validation (example: must be a valid email address)
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        document.getElementById("Emailerror").textContent =
            "Enter a valid email address.";
        emailInput.classList.add("is-invalid");
    } else {
        document.getElementById("Emailerror").textContent = "";
        emailInput.classList.remove("is-invalid");
    }


    // Age validation (example: must be between 18 and 99)
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 18 || age > 99) {
        isValid = false;
        document.getElementById("ageError").textContent =
            "Age must be between 18 and 99.";
        ageInput.classList.add("is-invalid");
    } else {
        document.getElementById("ageError").textContent = "";
        ageInput.classList.remove("is-invalid");
    }

    // Contact Details validation (example: must be a valid phone number)
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contactInput.value)) {
        isValid = false;
        document.getElementById("contactError").textContent =
            "Enter a valid phone number (10 digits).";
        contactInput.classList.add("is-invalid");
    } else {
        document.getElementById("contactError").textContent = "";
        contactInput.classList.remove("is-invalid");
    }

    // Address validation (example: must not be empty)
    if (addressInput.value.trim() === "") {
        isValid = false;
        document.getElementById("addressError").textContent =
            "Address is required.";
        addressInput.classList.add("is-invalid");
    } else {
        document.getElementById("addressError").textContent = "";
        addressInput.classList.remove("is-invalid");
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if there are validation errors
    }
});