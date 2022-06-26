window.addEventListener("load", () => {
    document.querySelector("#form").addEventListener("submit", submit);
    document.querySelector("#searchBtn").addEventListener("submit", submit);

    document.querySelector("#form").addEventListener("input", () => {
        if(document.querySelector("#query").value){
            document.querySelector("#searchBtn").classList.add("shown");
        } else {
            document.querySelector("#searchBtn").classList.remove("shown");
        }
    });
});

function submit(event) {
    event.preventDefault();
    window.open(`https://google.com/search?q=${document.querySelector("#query").value}&ia=web`, "_self");
  }
