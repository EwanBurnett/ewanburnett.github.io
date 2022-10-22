
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
        
        switch(index){
            case(0):
                document.getElementById('desc_project1').style.display = "block";
                document.getElementById('desc_project2').style.display = "none";
                document.getElementById('desc_project3').style.display = "none";
                document.getElementById('desc_project4').style.display = "none";
            break;
            case(1):
            document.getElementById('desc_project1').style.display = "none";
            document.getElementById('desc_project2').style.display = "block";
            document.getElementById('desc_project3').style.display = "none";
            document.getElementById('desc_project4').style.display = "none";
            break;
            case(2):
            document.getElementById('desc_project1').style.display = "none";
            document.getElementById('desc_project2').style.display = "none";
            document.getElementById('desc_project3').style.display = "block";
            document.getElementById('desc_project4').style.display = "none";
            break;
            case(3):
            document.getElementById('desc_project1').style.display = "none";
            document.getElementById('desc_project2').style.display = "none";
            document.getElementById('desc_project3').style.display = "none";
            document.getElementById('desc_project4').style.display = "block";
            break;
            default:
                break;
        }
      }
    }
  });
