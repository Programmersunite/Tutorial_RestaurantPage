import {menu} from "./menu"
import {bookTable} from "./booktable"
import {location} from "./location"


const contentDiv = document.querySelector(".content")

const header = document.createElement('header')
header.innerHTML = "The restaurtan"

const nav = document.createElement("div")
nav.innerHTML= "Navigation"

const tab = document.createElement("div")
tab.id="tab"
let menuTab = menu()
let locationTab = location()

function addMenu (f){
   tab.innerHTML=""
  //let newTabContenet = f()
  // console.log("dupa")
    tab.appendChild(f)

   // contentDiv.appendChild(f)
}

const btnMenu = document.createElement('button')
btnMenu.innerHTML = "Menu"
btnMenu.addEventListener("click", ()=>{addMenu(menuTab)} )


const btnLocation = document.createElement("button")
btnLocation.innerHTML = "Where to find us"
btnLocation.addEventListener("click", ()=>{addMenu(location())} )

const btnBookTable = document.createElement("button")
btnBookTable.innerHTML = "Book a table"
btnBookTable.addEventListener("click", ()=>{addMenu(bookTable())} )

nav.appendChild(btnMenu)
nav.appendChild(btnBookTable)
nav.appendChild(btnLocation)
contentDiv.appendChild(header)
contentDiv.appendChild(nav)
contentDiv.appendChild(tab)

