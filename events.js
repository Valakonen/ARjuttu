// Product info: Press title to show text
$(document).ready(function(){
  $(".ingredientTitle").click(function(a){
    $(this).next().slideToggle(200);
  });
});

// Info screen toggle
function toggleInfo()
{
  var audioInfoBtn = new Audio('Sound_2.mp3');

  if (document.getElementById("info").style.display == "block")
  {
    document.getElementById("info").style.display = "none";
  }
  else
  {
    document.getElementById("info").style.display = "block";
  }
  audioInfoBtn.play();
};

window.addEventListener('camera-init', (data) => {
    console.log('camera-init', data);
})

window.addEventListener('camera-error', (error) => {
    console.log('camera-error', error);
})

// Register events
AFRAME.registerComponent('registerevents', {
		init: function () {
			var marker = this.el;

			marker.addEventListener('markerFound', function() {
				var markerValue = marker.getAttribute("value");

				// TODO: Add your own code here to react to the marker being found.
        if (markerValue == 0)
        {
          var audio = new Audio('Sound_2.mp3');
          audio.play();
          //sound2.components.sound.playSound();
        }
        else if (markerValue == 1)
        {
          var audio2 = new Audio('Sound_2.mp3');
          audio2.play();
          //sound.components.sound.playSound();
        }

			});

			marker.addEventListener('markerLost', function() {
				// TODO: Add your own code here to react to the marker being lost.

			});
		}
  });
