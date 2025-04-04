let jus_ele=document.getElementById("jus-sy")
jus_ele.addEventListener("click",()=>{
    
    document.getElementById("toggle").classList.remove("disnone");
    document.getElementById("bt").classList.remove("bi-justify");
})

document.getElementById("close").addEventListener("click",()=>{
    
    document.getElementById("toggle").classList.add("disnone");
    document.getElementById("bt").classList.add("bi-justify");
    
})

document.getElementById('down').addEventListener("click",()=>{
    const link = document.createElement('a');
    link.href = 'prakash.pdf';  // Make sure the file path is correct
    link.download = 'prakash.pdf'; // Ensures the file is downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

