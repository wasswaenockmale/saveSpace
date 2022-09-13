const doc = document.body;

// Add something when someone scrolls the on the body.
doc.onscroll = ()=>{
    const nav = document.getElementById("navbar")
    nav.classList.add("one")
    console.log("It works")
}