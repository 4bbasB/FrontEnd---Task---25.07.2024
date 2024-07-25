document.addEventListener("DOMContentLoaded", function () {
    let siteThemeChangeBtn = document.getElementById("toggleSiteTheme");
    let currentTheme = localStorage.getItem("themeMode") || "light";

    document.body.classList.add(currentTheme + "-mode")
    siteThemeChangeBtn.addEventListener("click", function () {
        let newtTheme;
        if (document.body.classList.contains("light-mode")) {
            document.body.classList.replace("light-mode", "dark-mode");
            newtTheme = "dark";
        }
        else {
            document.body.classList.replace("dark-mode", "light-mode");
            newtTheme = "light";
        }

        localStorage.setItem("themeMode", newtTheme);
    })

    

})



