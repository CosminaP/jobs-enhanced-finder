// ==UserScript==
// @name         Best Jobs
// @namespace    www.bestjobs.ro
// @version      0.1
// @description  Best Jobs
// @author       Dee&&Mandark
// @match        http://www.bestjobs.ro/legal/confidential
// @grant        none
// ==/UserScript==

var searchParams = 'YToxNTp7czo3OiJjYWNoZWl0IjtiOjE7czo3OiJrZXl3b3JkIjtzOjA6IiI7czo1OiJvcmRlciI7czowOiIiO3M6NjoiaWRvcmFzIjthOjE6e2k6MDtpOjEwO31zOjExOiJtYWluZG9tYWlucyI7YToxOntpOjA7aTo0O31zOjg6Im5jYXJpZXJhIjthOjE6e2k6MDtpOjE7fXM6NzoidHlwZUFyciI7aTowO3M6Njoic3RyaWN0IjtpOjA7czoxMToidmlzaXRlZEpvYnMiO047czoxNzoiY29udGFjdGVkSWRvZmVydGUiO2E6MDp7fXM6NjoiaWdub3JlIjtpOjE7czoxNToiYmxvY2tlZEFjY291bnRzIjthOjA6e31zOjE0OiJleGNsdWRlX29mZXJ0ZSI7YTowOnt9czo4OiJzaW1pbGFycyI7YTowOnt9czo2OiJmYWNldHMiO2I6MTt9';

function filterPages() {
  $(".bjnewcontent").html("");
  $(".bjnewcontainer").css({"background-color" : "#fff"});
  $("head").append('<style>.job-card-inner:hover { background-color:#f9f4f4; }</style>');

  for (var i = 0; i < 50 ; i++){
    $.post("http://www.bestjobs.ro/search/_getmorejobs?page=" + i + '&searchParams=' + searchParams).done(function(info){
      $(".bjnewcontent").append(info);
        var jobTitle = $(".job-link"),    
         reg = /javascript|Front.?end|web designer/i;
      for (var i = 0;  i< jobTitle.length ; i++){
         var a = jobTitle[i],
          hideItem = a.parentNode.parentNode,
          jobName = a.innerHTML;	
        if (jobName.search(reg) === -1) {			
             hideItem.style.display = "none";
		}
		 hideItem.style.position = "relative";
		 hideItem.style.left = "0px";
		 hideItem.style.top = "0px";
    } 
      $("div .job-card-inner").css({
        "cursor": "pointer"
      }); 
     $("div").removeClass("in-item is-hidden box-item job-card");
     $("a").removeClass("logo-link");
     $("#sticky-mobileapp").css("visibility","hidden"); 
     $("img").addClass("restyleImg");
     $(".restyleImg").css({
        "width" : "6%",
        "height": "3%",
        "float" : "right",
        "clear" : "both",
        "margin": "1% 30% 0 0",
        "border-radius" : "53px 10px 71px 10px",
        "-moz-border-radius" : "53px 10px 71px 10px",
        "-webkit-border-radius" : "53px 10px 71px 10px",
        "border" : "0px outset #ccc"
      }); 
     $(".bjnewcontent").css({
         "margin": "auto",
         "width" : "50%"      
      });
     $(".job-card-inner").css({
        "margin-top" : "0.7%" , 
        "border" : "1px solid #ccc",
        "padding" : "10px 0 10px 45px",
        "box-shadow": "3px 3px 21px #888888"
      }); 
     $(".job-card-action").css("postion", "relative"); 
      $(".apply-msg-row").css({
        "position": "absolute",
        "bottom" : "34%",
        "right": "5%"});
     $(".link-icon").css({
       "float": "right"
     });
     $("span").removeClass("applyjob savejob removejob star platinum"); 
     $(".job-company").css({
       "font-size": "14px"
     });
     $(".job-link").css({
       "font-size": "12px",
       "color" : "red",
       "text-shadow": "3px 2px 7px rgba(150, 150, 150, 0.5)"
     }); 
    }); 
  }
  $(".bjnewbottom").hide();
  $(".bjnewcontent").css("padding","5% 0 5% 5%");   
  $("title").html("Jobs Names"); 
};

window.onload = function () {
  filterPages();      
};

