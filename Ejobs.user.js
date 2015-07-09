// ==UserScript==
// @name         Ejobs
// @namespace    http://www.ejobs.ro/
// @version      0.1
// @description  Jobs Enhanced Finder is using user script manager for Blink-based browser,Tampermonkey, 
//               to filter the jobs from a given website after the criteria of interest - 
//               the actual version is filtering the jobs from www.ejobs.ro using as criteria of selection. 
// @author       Cosmina
// @match        https://www.ejobs.ro/locuri-de-munca/*
// @grant        none
// ==/UserScript==

function filterJobs() {
  var jobTitle = document.getElementsByClassName("title"),
      reg = /javascript|Front.?end|web designer/i;	
  for (var i = 0; i < jobTitle.length; i++) {
    var a = jobTitle[i],
        li = a.parentNode.parentNode.parentNode.parentNode,
        jobName = a.innerHTML;				      
    if ("LI" === li.tagName && jobName.search(reg) === -1) {
      li.style.display="none";
    }
  }
}

window.onload = function () {
  var buttonFilter = $("<button>Filtreaza Joburi</button>").css({
    "font-size": "14px", 
    "color": "#FFF",
    "background-color": "transparent",
    "width": "130px",
    "border": "none",
    "font-family": "Roboto, Arial, sans-serif",
    "padding": "13px 0 0 5px"
  }).click(filterJobs);
  $("#navbar").append(buttonFilter);
};
