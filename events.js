// Info screen toggle
function toggleInfo()
{
  var sound = document.querySelector('[sound]');

  if (document.getElementById("info").style.display == "block")
  {
    document.getElementById("info").style.display = "none";
  }
  else
  {
    document.getElementById("info").style.display = "block";
  }
  sound.components.sound.playSound();
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
      var sound = document.querySelector('#audioentity1');
      var sound2 = document.querySelector('#audioentity2');
      var audio = new Audio('Sound_2.mp3');
      var audio2 = new Audio('Sound_1.wav');


			marker.addEventListener('markerFound', function() {
				var markerValue = marker.getAttribute("value");

				// TODO: Add your own code here to react to the marker being found.
        if (markerValue == 0)
        {
          audio.play();
          //sound2.components.sound.playSound();
        }
        else if (markerValue == 1)
        {
          audio2.play();
          //sound.components.sound.playSound();
        }

			});

			marker.addEventListener('markerLost', function() {
				// TODO: Add your own code here to react to the marker being lost.

			});
		}
  });
