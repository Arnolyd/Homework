const bar = document.getElementById("bar");
const btns = document.querySelectorAll("#bar > li");

for (const btn of btns) {
    btn.addEventListener("mouseover", (event) => {
        bar.setAttribute("class", "bar-transitions round");
        btn.setAttribute("class", "bar-transitions round");
    });
    btn.addEventListener("mouseout", (event) => {
        bar.setAttribute("class", "bar-transitions");
        btn.setAttribute("class", "bar-transitions");
    });   
}