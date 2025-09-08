import { initPage } from "../components/initPage";

initPage("login", () => {
  const loginContainer = document.getElementById("login-container");
  if (loginContainer) {
    loginContainer.innerHTML = renderLoginForm();

    const form = document.getElementById("login-form") as HTMLFormElement;
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        console.log("Login attempt:", data);
      });
    }
  }
});

function renderLoginForm()
{
	// work with proper ts builders from cssTools
	return '';
}