/**
 * Validates the name input field.
 * @returns {boolean} True if valid.
 */
function validateName() {
    const input = document.getElementById("name");
    const errorMsg = document.getElementById("nameError");
    if (input.value.trim() === "") {
        errorMsg.innerText = "Oops! Your name is missing";
        input.classList.add("has-error");
        return false;
    }
    return true;
}

/**
 * Validates the email input field.
 * @returns {boolean} True if valid.
 */
function validateEmail() {
    const input = document.getElementById("email");
    const errorMsg = document.getElementById("emailError");
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (input.value.trim() === "" || !pattern.test(input.value)) {
        errorMsg.innerText = input.value.trim() === "" 
            ? "Hoppla! Your email is required" 
            : "Please enter a valid email address";
        input.classList.add("has-error");
        return false;
    }
    return true;
}

/**
 * Validates the message textarea.
 * @returns {boolean} True if valid.
 */
function validateMessage() {
    const input = document.getElementById("message");
    const errorMsg = document.getElementById("messageError");

    if (input.value.trim() === "") {
        errorMsg.innerText = "Please enter a message";
        input.classList.add("has-error");
        return false;
    }
    return true;
}

/**
 * Validates the privacy checkbox.
 * @returns {boolean} True if checked.
 */
function validatePrivacy() {
    const checkbox = document.getElementById("privacyCheckbox");
    const errorMsg = document.getElementById("privacyError");

    if (checkbox.checked) {
        errorMsg.classList.remove("visible");
        return true;
    }
    errorMsg.innerText = "Please accept the privacy policy.";
    errorMsg.classList.add("visible");
    return false;
}

/**
 * Resets error styling for a specific element.
 * @param {HTMLElement} element - The input element.
 */
function resetError(element) {
    element.classList.remove("has-error");
}

/**
 * Checks overall form validity to enable/disable submit button.
 */
function checkFormValidity() {
    const btn = document.getElementById("sendButton");
    const isValid = isFormValidWithoutUIFeedback();
    if (btn) btn.disabled = !isValid;
}

/**
 * Helper to check validity values without triggering UI errors.
 * @returns {boolean} True if all fields are valid.
 */
function isFormValidWithoutUIFeedback() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
    const privacy = document.getElementById("privacyCheckbox").checked;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    return name !== "" && emailPattern.test(email) && msg !== "" && privacy;
}
