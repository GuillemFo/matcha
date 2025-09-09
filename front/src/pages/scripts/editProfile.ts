import { initPage } from "../components/initPage";
import { createBut, createDiv, createForm, createImage, createInp, createLab, createListItem, createMain, createSpan, createUl, truncateText } from "./cssTools";
import type { Profile } from "./profile";

initPage("edit", () => {
  const editContainer = document.getElementById("edit-profile-container");
  if (editContainer) {

	/// Testing!!
	
	
	const bob: Profile = 
	{
		id: "1234",
		username: "bobobo",
		email: "bob@bob.com",
		name: "Bob",
		lastname: "man",
		profpic: "",
		bio: "amazing spiderman",
		hashtags: [],
	};

	/////////////

	editContainer.appendChild(renderEditForm(bob));

	const form = document.getElementById("edit-form") as HTMLFormElement;
	if (form) {
	  form.addEventListener("submit", (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(form));
		console.log("Edit attempt:", data);
	  });
	}
  }
});



function renderEditForm(user:Profile)
{

	const main = createMain("flex flex-grow items-center justify-center p-2 bg-emerald-100");
	const main_div = createDiv("w-full max-w-xs");

	
	//
	const avatarDiv = createDiv("mx-auto w-32 h-32 relative border-2 box-blue overflow-hidden mt-2");
	const avatarImg = createImage(user?.profpic || "/default.jpg", "profile picture", "object-cover w-full h-full");

	//
	const formsContainer = createDiv("px-6 py-4");

	//
	const imgForm = createForm("edit-img-form", "space-x-2");
	imgForm.enctype = "multipart/form-data";
	
	const fileInput = createInp("","file","image", "image-upload", "hidden");
	fileInput.type = "file";
	fileInput.accept = "image/*";

	const label = document.createElement("label");
	label.htmlFor = "image-upload";
	label.textContent = "Choose Image";
	label.className = "cursor-pointer btn-contrast hover-underline-animation px-4 py-2 inline-block";

	//
	const uploadError_wrapper = createDiv("mb-1 h-4");
	const uploadError = createSpan("", "upload-error", "text-red-500 text-xs italic hidden mb-4 animate-fade-in");

	const uploadBtn = createBut("Upload", "upload-image", "btn-contrast hover-underline-animation px-4 py-2 mt-4");
	uploadBtn.setAttribute("type", "submit");

	//

	const nameForm = createForm("edit-name-form", "mb-6 mt-4");
	nameForm.setAttribute("novalidate", "");
	const name_label = createLab("Name", "name", "block text-blue font-bold mb-2");
	const name_input = createInp("example name", "text", "name", "name", "box-blue text-gray-500 border rounded w-full py-2 px-3 leading-tight focus:outline-none");
	name_input.setAttribute("required", "");
	
	const name_error_wrapper = createDiv("mb-1 h-4");
	const name_error = createSpan("", "name-error-check", "text-red-500 text-xs animate-fade-in italic hidden");

	const saveNameBtn = createBut("Update Name", "save-name-btn", "hover-underline-animation btn-contrast mt-2 w-full");
	saveNameBtn.setAttribute("type", "submit");

	//
	const lastnameForm = createForm("edit-lastName-form", "mb-6 mt-4");
	lastnameForm.setAttribute("novalidate", "");
	const lastname_label = createLab("Last name", "lastname", "block text-blue font-bold mb-2");
	const lastname_input = createInp("example last name", "text", "lastname", "lastname", "box-blue text-gray-500 border rounded w-full py-2 px-3 leading-tight focus:outline-none");
	lastname_input.setAttribute("required", "");
	
	const lastname_error_wrapper = createDiv("mb-1 h-4");
	const lastname_error = createSpan("", "lastname-error-check", "text-red-500 text-xs animate-fade-in italic hidden");

	const saveLastNameBtn = createBut("Update Last Name", "save-lastname-btn", "hover-underline-animation btn-contrast mt-2 w-full");
	saveLastNameBtn.setAttribute("type", "submit");
	
	//
	const userForm = createForm("edit-user-form", "mb-6 mt-4");
	userForm.setAttribute("novalidate", "");
	
	const userLabel = createLab(`Username: ${user.username}`, "new-user", "block text-blue font-bold mb-2");
	const userInput = createInp("Enter new username", "text", "new-user", "username", "box-blue text-gray-500 border rounded w-full py-2 px-3 leading-tight focus:outline-none");
	userInput.setAttribute("required", "");
	
	const userError_wrapper = createDiv("mb-1 h-4");
	const userError = createSpan("", "user-error-check", "text-red-500 text-xs italic hidden mb-2 animate-fade-in");
	
	const saveUserBtn = createBut("Update Username", "save-username-btn", "hover-underline-animation btn-contrast mt-2 w-full");
	saveUserBtn.setAttribute("type", "submit");

	//
	const emailForm = createForm("edit-email-form", "mb-6");
	emailForm.setAttribute("novalidate", "");
	
	const tmp_email = truncateText(user?.email,13);
	const emailLabel = createLab(`Email: ${tmp_email}`, "new-email", "block text-blue font-bold mb-2");
	emailLabel.title = user?.email;
	const emailInput = createInp("Enter new email", "email", "new-email", "email", "box-blue text-gray-500 border rounded w-full py-2 px-3 leading-tight focus:outline-none");
	emailInput.setAttribute("required", "");
	
	const emailError_wrapper = createDiv("mb-1 h-4");
	const emailError = createSpan("", "email-error-check", "text-red-500 text-xs italic hidden mb-2 animate-fade-in");
	
	const saveEmailBtn = createBut("Update Email", "save-email-btn", "hover-underline-animation btn-contrast mt-2 w-full");
	saveEmailBtn.setAttribute("type", "submit");

	//
	const passForm = createForm("edit-pass-form", "mb-4");
	passForm.setAttribute("novalidate", "");
	
	const passLabel = createLab("New Password", "new-pass", "block text-blue font-bold mb-2");
	const passInput = createInp("Enter new password", "password", "new-pass", "new-pass", "box-blue text-gray-500 border rounded w-full py-2 px-3 leading-tight focus:outline-none");
	passInput.setAttribute("required", "");
	const passInput2 = createInp("Repeat new password", "password", "new-pass2", "new-pass2", "box-blue text-gray-500 border rounded w-full py-2 px-3 leading-tight focus:outline-none mt-2");
	passInput.setAttribute("required", "");
	
	const passError_wrapper = createDiv("mb-1 h-4");
	const passError = createSpan("", "pass-error-check", "text-red-500 text-xs italic hidden mb-2 animate-fade-in");
	
	const savePassBtn = createBut("Update Password", "save-pass-btn", "hover-underline-animation btn-contrast mt-2 w-full");
	savePassBtn.setAttribute("type", "submit");
	
	const passRulesDiv = createDiv("mt-3 text-sm text-blue ");
	passRulesDiv.textContent = "Password requirements:";
	
	const passRulesList = createUl("list-disc text-left list-inside pl-5 mt-1 text-xs");
	const rule1 = createListItem("At least 7 characters", "");
	const rule2 = createListItem("One letter", "");
	const rule3 = createListItem("One number", "");
	const rule4 = createListItem("One special character (!@#$%^&*)", "");

	//
	
	main.appendChild(main_div);
	main_div.appendChild(avatarDiv);
	main_div.appendChild(formsContainer);
	avatarDiv.appendChild(avatarImg);
	
	//
	formsContainer.appendChild(imgForm);
	imgForm.appendChild(uploadError_wrapper);
	uploadError_wrapper.appendChild(uploadError);
	imgForm.appendChild(fileInput);
	imgForm.appendChild(label);
	imgForm.appendChild(uploadBtn);
	
	//
	formsContainer.appendChild(userForm);
	userForm.appendChild(userLabel);
	userForm.appendChild(userInput);
	userForm.appendChild(userError_wrapper);
	userError_wrapper.appendChild(userError);
	userForm.appendChild(saveUserBtn);
	
	//
	formsContainer.appendChild(nameForm);
	nameForm.appendChild(name_label);
	nameForm.appendChild(name_input);
	nameForm.appendChild(name_error_wrapper);
	name_error_wrapper.appendChild(name_error);
	nameForm.appendChild(saveNameBtn);
	
	//
	formsContainer.appendChild(lastnameForm);
	lastnameForm.appendChild(lastname_label);
	lastnameForm.appendChild(lastname_input);
	lastnameForm.appendChild(lastname_error_wrapper);
	lastname_error_wrapper.appendChild(lastname_error);
	lastnameForm.appendChild(saveLastNameBtn);
	
	//
	formsContainer.appendChild(emailForm);
	emailForm.appendChild(emailLabel);
	emailForm.appendChild(emailInput);
	emailForm.appendChild(emailError_wrapper);
	emailError_wrapper.appendChild(emailError);
	emailForm.appendChild(saveEmailBtn);
	
	//
	formsContainer.appendChild(passForm);
	passForm.appendChild(passLabel);
	passForm.appendChild(passInput);
	passForm.appendChild(passInput2);
	passForm.appendChild(passError_wrapper);
	passError_wrapper.appendChild(passError);
	passForm.appendChild(savePassBtn);
	passForm.appendChild(passRulesDiv);
	passRulesDiv.appendChild(passRulesList);
	passRulesList.appendChild(rule1);
	passRulesList.appendChild(rule2);
	passRulesList.appendChild(rule3);
	passRulesList.appendChild(rule4);

	return main;

}