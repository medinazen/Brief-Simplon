import { getcurrentUser } from "./auth.js";

export const displayuserinfo = (user, mail) => {
  if (!user || !mail) {
    const cur = getcurrentUser();
    user = cur?.user || "";
    mail = cur?.mail || "";
  }
  const idEl = document.getElementById("identifiant-display");
  if (idEl) idEl.textContent += user;
  const mailEl = document.getElementById("mail-display");
  if (mailEl) mailEl.textContent += mail;
};

export const togglemenu = (element) => {
  if (!element) return;
  element.style.display =
    getComputedStyle(element).display === "none" ? "block" : "none";
};

export const keypress = (loginButton) => {
  if (!loginButton) return;
  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      loginButton.click();
    }
  });
};
