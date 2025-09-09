import { initPage } from "../components/initPage";
import { createBut, createDiv, createForm, createImage, createInp, createLab, createListItem, createMain, createSpan, createUl, truncateText } from "./cssTools";
import type { Profile } from "./profile";

initPage("edit", () => {
  const editContainer = document.getElementById("edit-container");
  if (editContainer) {

	/// Testing!!
	
	
	const bob: Profile = 
	{
		id: 1234,
		username: "bobobo",
		email: "bob@bob.com",
		name: "Bob",
		surname: "man",
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
	const main = createDiv("bg-gradient-border max-w-xs mx-auto overflow-hidden");
	
	//
	const avatarDiv = createDiv("mx-auto w-32 h-32 relative border-4 border-neonBlue rounded-full overflow-hidden bg-bgDark mt-2");
	const avatarImg = createImage(user?.avatar || "/default.jpg", "profile picture", "object-cover w-full h-full");

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
	label.className = "cursor-pointer btn-neon-pink2 hover-underline-animation px-4 py-2 inline-block";

	//
	const uploadError = createSpan("", "upload-error", "text-red-500 text-xs italic hidden mb-4 animate-fade-in");

	const uploadBtn = createBut("Upload", "upload-image", "btn-neon-blue2 hover-underline-animation px-4 py-2 mt-4");
	uploadBtn.setAttribute("type", "submit");

	//
	const userForm = createForm("edit-user-form", "mb-6 mt-4");
	userForm.setAttribute("novalidate", "");
	
	const userLabel = createLab(`Username: ${user.username}`, "new-user", "block text-neonBlue font-bold mb-2");
	const userInput = createInp("Enter new username", "text", "new-user", "username", "neon-box-blue text-white w-full py-2 px-3 mb-1 focus:outline-none");
	userInput.setAttribute("required", "");
	
	const userErrorDb = createSpan("", "userfail", "text-red-500 text-xs italic hidden mb-2 animate-fade-in");
	const userError = createSpan("", "user-error-check", "text-red-500 text-xs italic hidden mb-2 animate-fade-in");
	
	const saveUserBtn = createBut("Update Username", "save-username-btn", "hover-underline-animation btn-neon-blue2 mt-2 w-full");
	saveUserBtn.setAttribute("type", "submit");

	//
	const emailForm = createForm("edit-email-form", "mb-6");
	emailForm.setAttribute("novalidate", "");
	
	const tmp_email = truncateText(user?.email,13);
	const emailLabel = createLab(`Email: ${tmp_email}`, "new-email", "block text-neonBlue font-bold mb-2");
	//emailLabel.title = user?.email;
	const emailInput = createInp("Enter new email", "email", "new-email", "email", "neon-box-blue text-white w-full py-2 px-3 mb-1 focus:outline-none");
	emailInput.setAttribute("required", "");
	
	const emailErrorDb = createSpan("", "emailfail", "text-red-500 text-xs italic hidden mb-2 animate-fade-in");
	const emailError = createSpan("", "email-error-check", "text-red-500 text-xs italic hidden mb-2 animate-fade-in");
	
	const saveEmailBtn = createBut("Update Email", "save-email-btn", "hover-underline-animation btn-neon-blue2 mt-2 w-full");
	saveEmailBtn.setAttribute("type", "submit");

	//
	const passForm = createForm("edit-pass-form", "mb-4");
	passForm.setAttribute("novalidate", "");
	
	const passLabel = createLab("New Password", "new-pass", "block text-neonBlue font-bold mb-2");
	const passInput = createInp("Enter new password", "password", "new-pass", "new-pass", "neon-box-blue text-white w-full py-2 px-3 mb-1 focus:outline-none");
	passInput.setAttribute("required", "");
	
	const passError = createSpan("", "pass-error-check", "text-red-500 text-xs italic hidden mb-2 animate-fade-in");
	
	const savePassBtn = createBut("Update Password", "save-pass-btn", "hover-underline-animation btn-neon-blue2 mt-2 w-full");
	savePassBtn.setAttribute("type", "submit");
	
	const passRulesDiv = createDiv("mt-3 text-sm text-neonBlue");
	passRulesDiv.textContent = "Password requirements:";
	
	const passRulesList = createUl("list-disc list-inside pl-5 mt-1 text-xs");
	const rule1 = createListItem("At least 7 characters", "");
	const rule2 = createListItem("One letter", "");
	const rule3 = createListItem("One number", "");
	const rule4 = createListItem("One special character (!@#$%^&*)", "");

	//
	
	main.appendChild(avatarDiv);
	avatarDiv.appendChild(avatarImg);
	main.appendChild(formsContainer);
	
	//
	imgForm.appendChild(uploadError);
	formsContainer.appendChild(imgForm);
	imgForm.appendChild(fileInput);
	imgForm.appendChild(label);
	imgForm.appendChild(uploadBtn);
	
	//
	formsContainer.appendChild(userForm);
	userForm.appendChild(userLabel);
	userForm.appendChild(userInput);
	userForm.appendChild(userErrorDb);
	userForm.appendChild(userError);
	userForm.appendChild(saveUserBtn);
	
	//
	formsContainer.appendChild(emailForm);
	emailForm.appendChild(emailLabel);
	emailForm.appendChild(emailInput);
	emailForm.appendChild(emailErrorDb);
	emailForm.appendChild(emailError);
	emailForm.appendChild(saveEmailBtn);
	
	//
	formsContainer.appendChild(passForm);
	passForm.appendChild(passLabel);
	passForm.appendChild(passInput);
	passForm.appendChild(passError);
	passForm.appendChild(savePassBtn);
	passForm.appendChild(passRulesDiv);
	passRulesDiv.appendChild(passRulesList);
	passRulesList.appendChild(rule1);
	passRulesList.appendChild(rule2);
	passRulesList.appendChild(rule3);
	passRulesList.appendChild(rule4);

	return main;

}