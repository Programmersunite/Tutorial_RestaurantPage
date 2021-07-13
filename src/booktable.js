
function bookTable(){
    
    let bookT =document.createElement("div")
    bookT.innerHTML = '<form><label for="cars">Choose menu</label><select id="cars" name="cars"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select><input type="submit" value="Submit"></form>'
    return bookT
}
export {bookTable}