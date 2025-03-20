// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("2025").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("2025").textContent = "25: " + lastModified;