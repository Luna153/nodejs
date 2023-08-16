let btn = document.querySelector(".btn");
    let block = document.querySelector(".block");
    btn.addEventListener("click", function () {

        if (block.classList.contains("d-none")) {
            block.classList.remove("d-none");
        } else {
            block.classList.add("d-none");
        }
    })