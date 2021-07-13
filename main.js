/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/booktable.js":
/*!**************************!*\
  !*** ./src/booktable.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bookTable": () => (/* binding */ bookTable)
/* harmony export */ });

function bookTable(){
    
    let bookT =document.createElement("div")
    bookT.innerHTML = '<form><label for="cars">Choose menu</label><select id="cars" name="cars"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select><input type="submit" value="Submit"></form>'
    return bookT
}


/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "location": () => (/* binding */ location)
/* harmony export */ });


function location(){
    
    let bookT =document.createElement("div")
    bookT.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.660738857006!2d-0.13579749867375165!3d51.49722733906759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604de8853f4bb%3A0xd1ef1aeb091658a3!2sCafenea%20Ro!5e0!3m2!1spl!2suk!4v1626204838413!5m2!1spl!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    return bookT
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
function menu(){
    
    let fullmenu =document.createElement("div")
    fullmenu.innerHTML = "<ul><li>Jedzonko</li><li>Drugie jedzonko</li></ul>"
    return fullmenu
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _booktable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booktable */ "./src/booktable.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location */ "./src/location.js");





const contentDiv = document.querySelector(".content")

const header = document.createElement('header')
header.innerHTML = "The restaurtan"

const nav = document.createElement("div")
nav.innerHTML= "Navigation"

const tab = document.createElement("div")
tab.id="tab"
let menuTab = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menu)()
let locationTab = (0,_location__WEBPACK_IMPORTED_MODULE_2__.location)()

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
btnLocation.addEventListener("click", ()=>{addMenu((0,_location__WEBPACK_IMPORTED_MODULE_2__.location)())} )

const btnBookTable = document.createElement("button")
btnBookTable.innerHTML = "Book a table"
btnBookTable.addEventListener("click", ()=>{addMenu((0,_booktable__WEBPACK_IMPORTED_MODULE_1__.bookTable)())} )

nav.appendChild(btnMenu)
nav.appendChild(btnBookTable)
nav.appendChild(btnLocation)
contentDiv.appendChild(header)
contentDiv.appendChild(nav)
contentDiv.appendChild(tab)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXRvcmlhbF9yZXN0YXVyYW50cGFnZS8uL3NyYy9ib29rdGFibGUuanMiLCJ3ZWJwYWNrOi8vdHV0b3JpYWxfcmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vdHV0b3JpYWxfcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90dXRvcmlhbF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90dXRvcmlhbF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHV0b3JpYWxfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90dXRvcmlhbF9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R1dG9yaWFsX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVBO0FBQ0EseVZBQXlWO0FBQ3pWO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUNVO0FBQ0Y7OztBQUduQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsMkNBQUk7QUFDbEIsa0JBQWtCLG1EQUFROztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxpQkFBaUI7OztBQUd4RDtBQUNBO0FBQ0EsMkNBQTJDLFFBQVEsbURBQVEsSUFBSTs7QUFFL0Q7QUFDQTtBQUNBLDRDQUE0QyxRQUFRLHFEQUFTLElBQUk7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBib29rVGFibGUoKXtcbiAgICBcbiAgICBsZXQgYm9va1QgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBib29rVC5pbm5lckhUTUwgPSAnPGZvcm0+PGxhYmVsIGZvcj1cImNhcnNcIj5DaG9vc2UgbWVudTwvbGFiZWw+PHNlbGVjdCBpZD1cImNhcnNcIiBuYW1lPVwiY2Fyc1wiPjxvcHRpb24gdmFsdWU9XCJ2b2x2b1wiPlZvbHZvPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImZpYXRcIj5GaWF0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+PC9zZWxlY3Q+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvZm9ybT4nXG4gICAgcmV0dXJuIGJvb2tUXG59XG5leHBvcnQge2Jvb2tUYWJsZX0iLCJcblxuZnVuY3Rpb24gbG9jYXRpb24oKXtcbiAgICBcbiAgICBsZXQgYm9va1QgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBib29rVC5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ5OTMuNjYwNzM4ODU3MDA2ITJkLTAuMTM1Nzk3NDk4NjczNzUxNjUhM2Q1MS40OTcyMjczMzkwNjc1OSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDg3NjA0ZGU4ODUzZjRiYiUzQTB4ZDFlZjFhZWIwOTE2NThhMyEyc0NhZmVuZWElMjBSbyE1ZTAhM20yITFzcGwhMnN1ayE0djE2MjYyMDQ4Mzg0MTMhNW0yITFzcGwhMnN1a1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiPjwvaWZyYW1lPidcbiAgICByZXR1cm4gYm9va1Rcbn1cbmV4cG9ydCB7bG9jYXRpb259IiwiZnVuY3Rpb24gbWVudSgpe1xuICAgIFxuICAgIGxldCBmdWxsbWVudSA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZ1bGxtZW51LmlubmVySFRNTCA9IFwiPHVsPjxsaT5KZWR6b25rbzwvbGk+PGxpPkRydWdpZSBqZWR6b25rbzwvbGk+PC91bD5cIlxuICAgIHJldHVybiBmdWxsbWVudVxufVxuZXhwb3J0IHttZW51fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHttZW51fSBmcm9tIFwiLi9tZW51XCJcbmltcG9ydCB7Ym9va1RhYmxlfSBmcm9tIFwiLi9ib29rdGFibGVcIlxuaW1wb3J0IHtsb2NhdGlvbn0gZnJvbSBcIi4vbG9jYXRpb25cIlxuXG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbmhlYWRlci5pbm5lckhUTUwgPSBcIlRoZSByZXN0YXVydGFuXCJcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubmF2LmlubmVySFRNTD0gXCJOYXZpZ2F0aW9uXCJcblxuY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxudGFiLmlkPVwidGFiXCJcbmxldCBtZW51VGFiID0gbWVudSgpXG5sZXQgbG9jYXRpb25UYWIgPSBsb2NhdGlvbigpXG5cbmZ1bmN0aW9uIGFkZE1lbnUgKGYpe1xuICAgdGFiLmlubmVySFRNTD1cIlwiXG4gIC8vbGV0IG5ld1RhYkNvbnRlbmV0ID0gZigpXG4gIC8vIGNvbnNvbGUubG9nKFwiZHVwYVwiKVxuICAgIHRhYi5hcHBlbmRDaGlsZChmKVxuXG4gICAvLyBjb250ZW50RGl2LmFwcGVuZENoaWxkKGYpXG59XG5cbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuTWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIlxuYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PnthZGRNZW51KG1lbnVUYWIpfSApXG5cblxuY29uc3QgYnRuTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5idG5Mb2NhdGlvbi5pbm5lckhUTUwgPSBcIldoZXJlIHRvIGZpbmQgdXNcIlxuYnRuTG9jYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57YWRkTWVudShsb2NhdGlvbigpKX0gKVxuXG5jb25zdCBidG5Cb29rVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5idG5Cb29rVGFibGUuaW5uZXJIVE1MID0gXCJCb29rIGEgdGFibGVcIlxuYnRuQm9va1RhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e2FkZE1lbnUoYm9va1RhYmxlKCkpfSApXG5cbm5hdi5hcHBlbmRDaGlsZChidG5NZW51KVxubmF2LmFwcGVuZENoaWxkKGJ0bkJvb2tUYWJsZSlcbm5hdi5hcHBlbmRDaGlsZChidG5Mb2NhdGlvbilcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXYpXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKHRhYilcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==