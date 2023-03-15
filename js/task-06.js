const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const dataLength = Number(inputEl.dataset.length);
  const inputValue = inputEl.value.trim().length;

  if (inputValue === dataLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});