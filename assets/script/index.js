
//Resize the Rendering Demo Canvas to fit 

window.addEventListener('resize', 
ResizeElement(document.getElementById("demoCanvas")));


function ResizeElement(element){
    var canvas = element;
    var parent = canvas.parentElement;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
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

