
/// Just for testing



export interface Profile
{
	id: number;
	username: string;
	email: string;
	name: string;
	lastname1: string;
	lastname2: string;
	gender: 'male' | 'female' | 'non-binary' | 'not-specified';
	preferences: ;
	profpic?: string;
	images?: string[];
	bio?: string;
	hashtags?: string[];
}

// export const profiles: Profile[] = [
//   { id: 1, name: "Alice", avatar: "/assets/alice.png", bio: "Loves coding" },
//   { id: 2, name: "Bob", avatar: "/assets/bob.png", bio: "Enjoys hiking" },
//   { id: 3, name: "Charlie", avatar: "/assets/charlie.png", bio: "Gamer" },
// ];

import { initPage } from "../components/initPage";

initPage("profile", () => {
  const profileContainer = document.getElementById("profile-container");
  if (profileContainer) {
	profileContainer.innerHTML = renderProfileContent();
  }
});


function renderProfileContent()
{
	// work with proper ts builders from cssTools
	return '';
}