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
let infoActivated = false;
let lastDetectedMarker;

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
  document.getElementById("productDescription").innerHTML = products[markerNumber].productDescription;
  document.getElementById("help").innerText = products[markerNumber].InfoButtonText;
  for (var x of products[markerNumber].ingredients) {
    addIngredients(x.name, x.info, x.imagesrc);
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
function addIngredients(name, info, imagesrc)
{
  var title = document.createElement("h3");
  title.classList.add('ingredientTitle');
  var titleText = document.createTextNode(name);
  title.appendChild(titleText);

  //get article to which other items are added
  var article = document.getElementById("ingredients");
  article.appendChild(title);

  // create section for image and text of the ingredient
  var section = document.createElement("section");
  section.classList.add('ingredientText');
  article.appendChild(section);

  //add image and add it to the section
  var image = document.createElement("img");
  image.src = imagesrc;
  image.style.width = '100%';
  section.appendChild(image);

  //add text and add it to the section
  var text = document.createElement("p");
  text.innerHTML = info;
  /*
  var ingredientText = document.createTextNode(info);
  text.appendChild(ingredientText);
  */
  section.appendChild(text);
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

        // update variable so info window can load right product
        lastDetectedMarker = markerValue;
        document.getElementById("btns-wrap").style.display = "flex";

				// TODO: Add your own code here to react to the marker being found.
        if (markerValue == 0)
        {
          var audio = new Audio('Sound_2.mp3');
          audio.play();

          //play animations


          //changeProductInfo(markerValue);
        }
        else if (markerValue == 1)
        {
          var audio2 = new Audio('Sound_2.mp3');
          audio2.play();
          //changeProductInfo(markerValue);
        }
        else if (markerValue == 3)
        {
          // funtio tästä
          var children = marker.children;
          for (var i = 0; i < children.length; i++)
            {
              children[i].setAttribute('animation-mixer', {clip: '*'});

            }
        }

        else if (markerValue == 4)
        {
          //debug tuote vaihto testiä
          lastDetectedMarker = 0;

          {

            var children = marker.children;
            for (var i = 0; i < children.length; i++)
              {
                children[i].setAttribute('animation-mixer', {clip: '*'});

              }
          }
        }
			});

			marker.addEventListener('markerLost', function() {
				// TODO: Add your own code here to react to the marker being lost.

			});
		}
  });
