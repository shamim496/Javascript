const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");


about.addEventListener("click", function (all) {
    // console.log(all.target);
    const id = all.target.dataset.id;
    if (id) {
        // remove the selected from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            all.target.classList.add("active");
        });
        // hide other articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
