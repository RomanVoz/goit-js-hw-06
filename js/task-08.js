const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { elements } = event.currentTarget;
  const email = elements.email.value;
  const password = elements.password.value;

  if (!email || !password) {
    alert('All fields must be filled!');
    return;
  }

  const formData = { email, password };
  console.log(formData);

  form.reset();
}