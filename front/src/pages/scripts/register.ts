import { initPage } from "../components/initPage";
import { createBut, createDiv, createForm, createInp, createLab, createListItem, createMain, createSpan, createUl } from "./cssTools";

initPage("register", () => {
  const registerContainer = document.getElementById("register-container");
  if (registerContainer) {
	registerContainer.appendChild(renderRegisterForm());

	const form = document.getElementById("register-form") as HTMLFormElement;
	if (form) {
	  form.addEventListener("submit", (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(form));
		console.log("Register attempt:", data);
	  });
	}
  }
});

function renderRegisterForm()
{

	const main = createMain("flex flex-grow items-center justify-center p-2 bg-emerald-100");
	const main_div = createDiv("w-full max-w-xs");
	const form = createForm("regForm", "px-8 pt-6 pb-8 mb-4");
	form.setAttribute("novalidate", "");
	
	//
	const general_error = createDiv("text-red-500 text-xs italic animate-fade-in mb-2 hidden");
	general_error.setAttribute("id", "userfail");
	form.appendChild(general_error);
	
	//
	const email_div = createDiv("mb-4 mt-2");
	const email_label = createLab("Email", "email", "block text-blue font-bold mb-2");
	const email_input = createInp("example@email.com", "text", "email", "email", "box-blue text-gray-500 border rounded w-full py-2 px-3 leading-tight focus:outline-none");
	email_input.setAttribute("required", "");
	
	const email_error_wrapper = createDiv("mb-1 h-4");
	const email_error = createSpan("", "email-error-check", "text-red-500 animate-fade-in text-xs italic hidden");
	
		
	//
	const pass_div = createDiv("");
	const pass_label = createLab("Password", "password", "block text-blue font-bold mb-2");
	const pass_input = createInp("", "password", "pass", "password", "box-blue text-gray-500 shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none");
	pass_input.setAttribute("required", "");
	

	const passrep_div = createDiv("");
	const passrep_input = createInp("repeat password", "password", "pass", "password", "box-blue text-gray-500 shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none");
	pass_input.setAttribute("required", "");

	const pass_error_wrapper = createDiv("h-2");
	const pass_error = createSpan("", "pass-error-check", "text-red-500 animate-fade-in text-xs italic hidden");
	
	const pass_rules_div = createDiv("mt-4 text-sm font-medium text-blue");
	pass_rules_div.textContent = "Password must contain:";
	const pass_ul = createUl("list-disc list-inside text-xs text-blue");
	const pass_li1 = createListItem("At least 7 characters", "");
	const pass_li2 = createListItem("One letter", "");
	const pass_li3 = createListItem("One number", "");
	const pass_li4 = createListItem("One special character (!@#$%^&*)", "");
	
	//
	const butt_div = createDiv("flex items-center justify-between mt-6 mb-2");
	const register_button = createBut("Register", "regBtnConfirm", "btn-contrast hover-underline-animation");
	register_button.setAttribute("type", "submit");
	
	//
	email_div.appendChild(email_label);
	email_div.appendChild(email_input);
	email_div.appendChild(email_error_wrapper);
	email_error_wrapper.appendChild(email_error);
	
	
	pass_div.appendChild(pass_label);
	pass_div.appendChild(pass_input);

	passrep_div.appendChild(passrep_input);

	passrep_div.appendChild(pass_error_wrapper);
	pass_error_wrapper.appendChild(pass_error);
	passrep_div.appendChild(pass_rules_div);
	pass_rules_div.appendChild(pass_ul);
	pass_ul.appendChild(pass_li1);
	pass_ul.appendChild(pass_li2);
	pass_ul.appendChild(pass_li3);
	pass_ul.appendChild(pass_li4);
	
	butt_div.appendChild(register_button);
	
	form.appendChild(email_div);
	form.appendChild(pass_div);
	form.appendChild(passrep_div);
	form.appendChild(butt_div);
	
	main_div.appendChild(form);
	main.appendChild(main_div);

	return main;
}