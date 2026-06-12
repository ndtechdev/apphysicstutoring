function showTab(tabId) {
  const sections = document.querySelectorAll(".tab-section");
  const tabs = document.querySelectorAll(".nav-tab");

  sections.forEach((section) => {
    section.classList.remove("active-section");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active-section");

  const clickedTab = Array.from(tabs).find((tab) =>
    tab.textContent.toLowerCase().includes(getTabName(tabId))
  );

  if (clickedTab) {
    clickedTab.classList.add("active");
  }

  const navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("show");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function getTabName(tabId) {
  const names = {
    home: "home",
    about: "about",
    program: "program",
    rates: "rates",
    policy: "policy",
    feedback: "feedback",
    contact: "contact"
  };

  return names[tabId];
}

function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}