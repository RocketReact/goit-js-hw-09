const formData = { email: '', message: '' };
const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', (e) => {
  if (e.target.nodeName === 'INPUT') {
    formData.email = e.target.value;
  } else if (e.target.nodeName === 'TEXTAREA') {
    formData.message = e.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

if (localStorage.getItem('feedback-form-state')) {
  const newData = JSON.parse(localStorage.getItem('feedback-form-state'));
  input.value = newData.email || '';
  message.value = newData.message || '';
}

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formData.email = input.value;
  formData.message = message.value;
  if (!formData.email.trim()|| !formData.message.trim()) {
    alert('Fill in all fields, please');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
});
