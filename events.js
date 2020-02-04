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

			marker.addEventListener('markerFound', function() {
				var markerId = marker.id;
				console.log('markerFound', markerId);
				// TODO: Add your own code here to react to the marker being found.
        sound.components.sound.playSound();
			});

			marker.addEventListener('markerLost', function() {
				var markerId = marker.id;
				console.log('markerLost', markerId);
				// TODO: Add your own code here to react to the marker being lost.
        sound2.components.sound.playSound();
			});
		}
  });
