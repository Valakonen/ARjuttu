// Product info: Press title to show text
/*$(document).ready(function(){
  $(".ingredientTitle").click(function(a){
    $(this).next().slideToggle(200);
  });
});*/
$(document).on("click",".ingredientTitle",function(){
    $(this).next().slideToggle(200);
});

// Get products json file
let products;
let infoActivated = false;
let lastDetectedMarker;

fetch("./products.json")
  .then(function(resp)
{
  return resp.json();
})
.then(function(data)
{
  console.log(data);
  products = data;
})

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

  if(infoActivated == false)
  {
    if(lastDetectedMarker != null)
    {
      infoActivated == true;
      changeProductInfo(lastDetectedMarker);
    }
  }
  else
  {
    infoActivated == false;
  }
};

// change product info by marker number
function changeProductInfo(markerNumber)
{
  removeIngredients();
  document.getElementById("productName").innerHTML = products[markerNumber].name;
  for (var x of products[markerNumber].ingredients) {
    addIngredients(x.name, x.info);
  }
};

// remove all ingredients
function removeIngredients()
{
  var myNodelist = document.querySelectorAll(".ingredientTitle");
  var myNodelist2 = document.querySelectorAll(".ingredientText");
  var i;
  for (i = 0; i < myNodelist.length; i++)
  {
    myNodelist[i].remove();
  }

  for (i = 0; i < myNodelist2.length; i++)
  {
    myNodelist2[i].remove();
  }
};

// add ingredients
function addIngredients(name, info)
{
  var title = document.createElement("h3");
  title.classList.add('ingredientTitle');
  var titleText = document.createTextNode(name);
  title.appendChild(titleText);

  var element = document.getElementById("ingredients");
  element.appendChild(title);

  var text = document.createElement("p");
  text.classList.add('ingredientText');
  var ingredientText = document.createTextNode(info);
  text.appendChild(ingredientText);
  element.appendChild(text);
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
        lastDetectedMarker = markerValue;

				// TODO: Add your own code here to react to the marker being found.
        if (markerValue == 0)
        {
          var audio = new Audio('Sound_2.mp3');
          audio.play();
          //changeProductInfo(markerValue);
        }
        else if (markerValue == 1)
        {
          var audio2 = new Audio('Sound_2.mp3');
          audio2.play();
          //changeProductInfo(markerValue);
        }

			});

			marker.addEventListener('markerLost', function() {
				// TODO: Add your own code here to react to the marker being lost.

			});
		}
  });
