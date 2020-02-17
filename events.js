// Product info: Press title to show text
/*$(document).ready(function(){
  $(".ingredientTitle").click(function(a){
    $(this).next().slideToggle(200);
  });
});*/
$(document).on("click",".ingredientTitle",function(){
    $(this).next().slideToggle(200);
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
function addIngredients(productNumber)
{
  var a;
  var b;
  if (productNumber == 1)
  {
    a = "SITRUUNARUOHO";
    b = "Sitruunaruoho tai sitruunaheinä on arvostettu ja monipuolinen kasvi, joka kasvaa tropiikissa kahden metrin korkuiseksi. Sitruunaruoho kuuluu cymbog on - sukuun, jossa on yli 50 eri lajoa . Suomessa ei juurikaan tehdä eroja eri lajien välillä ja yleinen nimi on sitruunaruoho. C ymbogon citratus on se yleinen syötävä sitruunaruoho , kun taas Cymbogon nardus (jäkkisitrusheinä tai sitronellaheinä) on suosittua kosmetiikassa ja jopa hyönteisten k arkottajana. Cymbogon narduksella on purppuranväriset varre t. Siitä saadaan eteeristä öljyö , jota käytetään saippuoissa, kynttilöissä ja aromaterapiassa. Tärkeimmät kemialliset aineet ovat sitraali eli lemonaali ja geranioli, jotka ovat antiseptisiä. Sit raali antaa sitrusmaisen tuoksun ja sama aine tta on myös sitruunamelissassa. Sitraalia ja geraniolia käytetään paljon parfyymeissa. Eteerinen öljy saadaan tuoreista varsis ta ja lehdistä höyrytislaamalla.";
  }
  else if (productNumber == 2)
  {
    a = "MUSTAHERUKKA";
    b = "Mustaherukkaan (ribes nigrum) kuuluu 150 eri lajia, joita tavataan Euroopassa ja Pohjois - Amerikassa. Se on kotoisin pohjoisesta Euroopasta ja Aasiasta. Sitä viljeltiin jo 1000 - luvulla Venäjän luostareissa. Mustaherukassa olevat fenoliset yhd isteet pystyvät estämään useiden eri bakteerien sitoutumisen elimistö ön. Mustikan, mustaherukan , variksenmarjan ja puolukan polyfenolit (antosyaanit, proantosyanidit ja flavonolit) torjuvat suun bakteereja ja estävät karieksen ja plakin muodostumista hampa isiin. Mustaherukan siemenistä puristettu öljy sopii kuiville hiuksille ja iholle. Se sisältää gammalinoleenihappoa, joka on omega - 6 rasvahappo.";
  }

  var title = document.createElement("h2");
  title.classList.add('ingredientTitle');
  var titleText = document.createTextNode(a);
  title.appendChild(titleText);

  var element = document.getElementById("ingredients");
  element.appendChild(title);

  var text = document.createElement("p");
  text.classList.add('ingredientText');
  var ingredientText = document.createTextNode(b);
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
