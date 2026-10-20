
const defaultCountry = "IN";

// Get an element by its ID.
const getContactElement = (id) => document.getElementById(id);

// Display or clear a field's error.
const setContactError = (field, errorId, message) => {
  const errorElement = getContactElement(errorId);

  field.setAttribute("aria-invalid", String(Boolean(message)));

  if (errorElement) {
    errorElement.textContent = message;
  }
};

// Load calling codes from the countries.dev API.
window.loadCountryCodes = async () => {
  const countrySelect = getContactElement("country-code");

  if (!(countrySelect instanceof HTMLSelectElement)) {
    return;
  }

  try {
    const response = await fetch(
      "https://countries.dev/countries?fields=name,alpha2Code,flag,callingCodes&sort=name"
    );

    if (!response.ok) {
      throw new Error("Country API request failed.");
    }

    const countries = await response.json();

    countrySelect.replaceChildren();

    countries.sort((a, b) => a.name.localeCompare(b.name));

    countries.forEach((country) => {
      if (!Array.isArray(country.callingCodes)) {
        return;
      }

      country.callingCodes.forEach((code) => {
        if (!code) {
          return;
        }

        const option = document.createElement("option");

        option.value = `+${code}`;
        option.textContent =
          `${country.flag || ""} +${code} ${country.name}`;

        if (country.alpha2Code === defaultCountry) {
          option.selected = true;
        }

        countrySelect.appendChild(option);
      });
    });

    if (!countrySelect.options.length) {
      throw new Error("No calling codes were returned.");
    }
  } catch (error) {
    console.error("Unable to load country codes:", error);

    countrySelect.replaceChildren();

    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Country codes unavailable";

    countrySelect.appendChild(option);

    window.showContactStatus(
      "Could not load country codes. Please refresh the page.",
      false
    );
  }
};

// Validate the name, mobile number, or email.
window.validateContactField = (field) => {
  const value = field.value.trim();
  let message = "";
  let errorId = "";

  if (field.name === "fullName") {
    errorId = "name-error";

    if (!value) {
      message = "Please enter your name.";
    } else if (value.length < 2 || value.length > 60) {
      message = "Name must contain 2 to 60 characters.";
    } else if (
      !/^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(value)
    ) {
      message = "Please enter a valid name.";
    }
  } else if (field.name === "phone") {
    errorId = "phone-error";

    if (!value) {
      message = "Please enter your mobile number.";
    } else if (!/^\d+$/.test(value)) {
      message = "Enter digits only.";
    } else if (value.length < 7 || value.length > 15) {
      message = "Enter 7 to 15 digits.";
    }
  } else if (field.name === "email") {
    errorId = "email-error";

    if (!value) {
      message = "Please enter your email address.";
    } else if (
      value.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      message = "Please enter a valid email address.";
    }
  }

  
  if (errorId) {
    setContactError(field, errorId, message);
  }

  const status = getContactElement("contact-status");

  if (status) {
    status.hidden = true;
    status.textContent = "";
  }

  return message === "";
};


// Update the message character counter.
window.updateMessageCount = (textarea) => {
  const counter = getContactElement("message-count");

  if (counter) {
    counter.textContent = String(textarea.value.length);
  }

  window.clearContactMessages(textarea.form);
};

// Clear status messages while the user edits the form.
window.clearContactMessages = (form) => {
  const status = getContactElement("contact-status");

  if (status) {
    status.hidden = true;
    status.textContent = "";
  }

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  [
    ["fullName", "name-error"],
    ["phone", "phone-error"],
    ["email", "email-error"]
  ].forEach(([fieldName, errorId]) => {
    const field = form.elements.namedItem(fieldName);
    const error = getContactElement(errorId);

    if (field instanceof HTMLInputElement) {
      field.removeAttribute("aria-invalid");
    }

    if (error) {
      error.textContent = "";
    }
  });
};

// Show a form status message.
window.showContactStatus = (message, success) => {
  const status = getContactElement("contact-status");

  if (!status) {
    return;
  }

  status.textContent = message;
  status.dataset.status = success ? "success" : "error";
  status.hidden = false;
};

// Validate the form when Send Message is clicked.
window.submitContactForm = (event, form) => {
  event.preventDefault();

  window.clearContactMessages(form);

  const name = form.elements.namedItem("fullName");
  const phone = form.elements.namedItem("phone");
  const email = form.elements.namedItem("email");
  const country = form.elements.namedItem("countryCode");

  if (
    !(name instanceof HTMLInputElement) ||
    !(phone instanceof HTMLInputElement) ||
    !(email instanceof HTMLInputElement) ||
    !(country instanceof HTMLSelectElement)
  ) {
    window.showContactStatus("Unable to validate the form.", false);
    return false;
  }

  const nameValid = window.validateContactField(name);
  const phoneValid = window.validateContactField(phone);
  const emailValid = window.validateContactField(email);

  if (!country.value) {
    window.showContactStatus(
      "Please select a country calling code.",
      false
    );
    country.focus();
    return false;
  }

  if (!nameValid || !phoneValid || !emailValid) {
    const firstInvalid = !nameValid
      ? name
      : !phoneValid
        ? phone
        : email;

    firstInvalid.focus();
    return false;
  }

  window.showContactStatus(
    "Your details passed validation. Connect a submission service to send your message.",
    true
  );

  return false;
};

// Load the country dropdown when the script runs.
window.loadCountryCodes();
