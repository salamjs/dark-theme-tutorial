const checkbox = document.getElementById("checkbox");

const checkSavedTheme = () => {
  const theme = localStorage.getItem("theme");
  document.documentElement.setAttribute(
    "data-theme", theme || "light"
  );

  if (theme === "dark") {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
};

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute(
      "data-theme", "dark"
    );
    localStorage.setItem("theme", "dark");
    return;
  }

  document.documentElement.setAttribute(
    "data-theme", "light"
  );
  localStorage.setItem("theme", "light");
};

checkSavedTheme();
checkbox.onchange = switchTheme;
window.onstorage = checkSavedTheme;
