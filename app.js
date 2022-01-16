const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function(){
    // console.log(sidebar.classList);

    // short way 

    sidebar.classList.toggle("show-sidebar"); 

    // long way 
    // if(sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar")
    // }
    // else{
    //     sidebar.classList.add("show-sidebar")
    // }
});

// closing the sidebar with the "X" icon
closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});