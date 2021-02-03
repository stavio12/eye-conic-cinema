export const hideAlert = () => {
  const el = document.querySelector(".alert");
  if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type, msg) => {
  hideAlert();
  const errorMsg = `<div class="alert alert--${type} text-white text-center col-6 offset-3 mt-5"> <h5>${msg}</h5> </div>`;
  document.querySelector("body").insertAdjacentHTML("beforebegin", errorMsg);

  window.setTimeout(hideAlert, 5000);
};
