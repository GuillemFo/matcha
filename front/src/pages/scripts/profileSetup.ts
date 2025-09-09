import { initPage } from "../components/initPage";
import { createBut, createDiv, createForm, createInp, createLab, createListItem, createMain, createSpan, createUl } from "./cssTools";

initPage("none", () => {
  const profileSetupContainer = document.getElementById("profile-setup-container");
  if (profileSetupContainer) {
	profileSetupContainer.appendChild(renderProfileSetupForm());

	const form = document.getElementById("profile-setup-form") as HTMLFormElement;
	if (form) {
	  form.addEventListener("submit", (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(form));
		console.log("Profile Setup attempt:", data);
	  });
	}
  }
});

function renderProfileSetupForm()
{

	
	return "";
}