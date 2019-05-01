"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Mickal Austin
   Date: 4-22-19   
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
window.addEventListener("load", function () {
      calcCart();
      document.getElementById("regSubmit").onclick = sessionTest;
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;

      document.getElementById("sessionBox").addEventListener("change", calcCart);
      document.getElementById("mediaCB").onclick = calcCart;
});

function sessionTest() {
      var sesh = document.getElementById("sessionBox");
      if (sesh.selectedIndex === -1) {
            sesh.setCustomValidity("Select a Session Package")
      } else {
            sesh.setCustomValidity("");
      }
}

function calcCart() {
      var sesh = document.getElementById("sessionBox");
      sessionStorage.setItem("confName", document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value + "")
      sessionStorage.setItem("confGroup", document.getElementById("groupBox").value)
      sessionStorage.setItem("confMail", document.getElementById("mailBox").value)
      sessionStorage.setItem("confPhone", document.getElementById("phoneBox").value)
      sessionStorage.setItem("confBanquet", document.getElementById("banquetBox").value)
      var confBanquet = document.getElementById("banquetBox").value;
      sessionStorage.setItem("confBanquetCost", confBanquet * 55)
      var confBanquetCost = confBanquet * 55;
      var sessionBox = document.getElementById("sessionBox");
      if (sessionBox.selectedIndex !== -1) {
            sessionStorage.setItem("confSession", sessionBox[sessionBox.selectedIndex].innerText)
            sessionStorage.setItem("confSessionCost", sessionBox[sessionBox.selectedIndex].value)
            var confSessionCost = sessionBox[sessionBox.selectedIndex].value;
      } else {
            sessionStorage.setItem("confSession", "")
            sessionStorage.setItem("confSessionCost", 0)
            var confSessionCost = 0;
      }
      if (document.getElementById("mediaCB").checked == true) {
            sessionStorage.setItem("confPack", "yes")
            sessionStorage.setItem("confPackCost", 115)
            var confPackCost = 115;
      } else {
            sessionStorage.setItem("confPack", "no")
            sessionStorage.setItem("confPackCost", 0)
            var confPackCost = 0;
      }
      sessionStorage.setItem("confTotal", parseFloat(confSessionCost) + parseFloat(confBanquetCost) + parseFloat(confPackCost));
      writeSessionValues();
}

function writeSessionValues() {
      document.getElementById("regName").textContent = sessionStorage.getItem("confName");
      document.getElementById("regGroup").textContent = sessionStorage.getItem("confGroup");
      document.getElementById("regEmail").textContent = sessionStorage.getItem("confMail");
      document.getElementById("regPhone").textContent = sessionStorage.getItem("confPhone");
      document.getElementById("regSession").textContent = sessionStorage.getItem("confSession");
      document.getElementById("regBanquet").textContent = sessionStorage.getItem("confBanquet");
      document.getElementById("regPack").textContent = sessionStorage.getItem("confPack");
      document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal")
}