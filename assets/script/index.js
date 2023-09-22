
//Resize the Rendering Demo Canvas to fit 

window.addEventListener('resize', ResizeElement(document.getElementById("demoCanvas")));

function ResizeElement(element){
    var canvas = element;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
}

GitHubActivity.feed({
  username: "EwanBurnett",
  selector: "#feed",
  limit: 3, // optional
});


var flkty = new Flickity( '.showreel', {
  wrapAround: true, 
  autoPlay:true,
  fullscreen:true,
  cellselector: "slide",

  on: {
    change: function( index ) {
      //Change the description's text based on the corresponding index
      console.log( 'Slide changed to' + index );
      
      var wrapper = document.getElementById("project_descs");
      var div = wrapper.getElementsByClassName("desc");

      for(var i = 0; i < div.length; i++)
      {
        div[i].style.display = "none";
      }

      div[index].style.display = "block";

  
    }
  }
 });

var wrapper = document.getElementById("project_descs");
var div = wrapper.getElementsByClassName("desc");

div[0].style.display = "block";

var language;


function switchLanguage(){
  //Hide old elements
  var oldElements = document.querySelectorAll("." + this.language);
  oldElements.forEach((elem) => {
    elem.style.display = "none";
  });

  if(this.language == "en"){
    this.language = "jp";
  }
  else{
    this.language = "en";
  }

  console.log("Swapping Language to " + this.language)
  
  var languageElements = document.querySelectorAll("." + language);
  languageElements.forEach((elem) => {
    elem.style.display = "block";
  });

  
}

window.addEventListener("DOMContentLoaded", switchLanguage());