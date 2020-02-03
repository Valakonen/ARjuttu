// Info screen toggle
function toggleInfo()
{
  if (document.getElementById("info").style.display == "block")
  {
    document.getElementById("info").style.display = "none";
  }
  else
  {
    document.getElementById("info").style.display = "block";
  }
};

// Register events
AFRAME.registerComponent('registerevents', {
		init: function () {
			var marker = this.el;
      var sound = document.querySelector('[sound]');

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
			});
		}
