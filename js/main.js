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
    window.open(`https://www.qwant.com/?q=${document.querySelector("#query").value}&t=web`, "_self");
  }