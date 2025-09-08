import { initPage } from "../components/initPage";

initPage("chat", () => {
  const chatContainer = document.getElementById("chat-container");
  if (chatContainer) {
    chatContainer.innerHTML = renderChatContent();
  }
});


function renderChatContent()
{
	// work with proper ts builders from cssTools
	return '';
}