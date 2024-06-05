function Man() {
    Name = localStorage.getItem("name")
    document.getElementById("User").innerHTML = Name
    if(Name == "aayush!" || Name == "sharvi!"){
        document.getElementById("ima").src = "hid.jfif"
        document.getElementById("Dif").innerHTML = "Aayush & Sharvi Lovers!!!"
        document.body.style.backgroundColor = "#2b2b2b";
        document.getElementById("Dif").style.color = "pink"
        document.body.style.Color = "white";
    }
    else{
        const images = ['im1.jfif', 'im2.jfif', 'im3.jfif', 'im4.jfif', 'im5.jfif', 'im6.jfif', 'im7.jfif', 'im8.jfif', 'im9.jfif', 'im10.jfif', 'im11.jfif', 'im12.jfif', 'im13.jfif', 'im14.jfif'];
        const definr = ['Astethic','Annoying','always lighten up','introvert','Cool Guy','Always happy!!','Cry baby','Ugly!!','Always Sleepy','Savage replyer','Selfie lover!!!','presidential','Yapper never keeps quiet','Always confused']
        const lin = images.length;
        const def = Math.floor(Math.random() * lin);
        const text = definr[def];
        console.log(def);
        const im = images[def];
        document.getElementById("ima").src = im;
        document.getElementById("Dif").innerHTML = text
    } 
}