const feedbackFormEl = document.querySelector(`.feedback-form`);
let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem(`feedback-form-data`));

  if (formDataFromLS === null) {
    return;
  }
  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};
fillFormFields();

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;
  localStorage.setItem(`feedback-form-data`, JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  if (formData.email.trim() === `` || formData.message.trim() === ``) {
    alert(`Fill please all fields!`);
    return;
  }

  event.target.reset();
  localStorage.removeItem(`feedback-form-data`);
  formData = { email: '', message: '' };
};

feedbackFormEl.addEventListener(`input`, onFormFieldInput);
feedbackFormEl.addEventListener(`submit`, onFeedbackFormSubmit);
