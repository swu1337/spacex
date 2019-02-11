window.onload = () => {
    console.log(`Test`);

    document.querySelector(".menu").onclick = () => {
        let header = document.querySelector("header");
        console.log(header);
        let icn = document.querySelector(".icn-menu");

        if(header.classList.contains("open")) {
            header.classList.remove("open");
            icn.classList.remove('fa-times');
            icn.classList.add('fa-bars');
        } else {
            header.classList.add("open");
            icn.classList.remove('fa-bars');
            icn.classList.add('fa-times');
        }
    }
}
