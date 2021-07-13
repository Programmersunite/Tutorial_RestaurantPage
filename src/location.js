

function location(){
    
    let bookT =document.createElement("div")
    bookT.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.660738857006!2d-0.13579749867375165!3d51.49722733906759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604de8853f4bb%3A0xd1ef1aeb091658a3!2sCafenea%20Ro!5e0!3m2!1spl!2suk!4v1626204838413!5m2!1spl!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    return bookT
}
export {location}