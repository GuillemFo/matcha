export function renderNavbar(active: string): string {
  return `
    <nav class="flex gap-4 p-4 bg-white shadow">
      <a href="index.html" class="${active === "home" ? "text-blue-600" : ""}">Home</a>
      <a href="browse.html" class="${active === "browse" ? "text-blue-600" : ""}">Browse</a>
      <a href="profile.html" class="${active === "profile" ? "text-blue-600" : ""}">Profile</a>
      <a href="chat.html" class="${active === "chat" ? "text-blue-600" : ""}">Chat</a>
	  <a href="login.html" class="${active === "login" ? "text-blue-600" : ""}">Login</a>
    </nav>
  `;
}
