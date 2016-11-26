// Prvi pokusaj menjanja boje radi ali odlucio sam se za X
// $('td').on('click', function(){

// 	var color =   $( this ).css( "background-color");
// 	var por =  'rgb(255, 0, 0)';
// 	// When you use rgb you need to write it with empty spaces like this "255, 0, 0" because this "255,0,0" will not work
// 	if (color === por ){
// 		$(this).css({'background-color': "white", 'color': 'red'  })
// 	}
// 	else {
// 		$(this).css({'background-color': "red", 'color': 'white' })

// 	}
// })





$( document ).ready(function() {


// Here we are selecting and deselecting numbers
$( "td" ).click(function() {
  if (
     $(this).hasClass("x-selector") || 
     (!$(this).hasClass(".x-selector") && $(this).closest("table").find(".x-selector").length < 7)
  ) {
       $( this ).toggleClass( "x-selector" );
   }
});


function lotoGenerator() {
    var array = [];
    for (var i = 0; i <=6; i++) {
        do {
            // Generate your random number > Imas bolja resenja za ovo u main2.js zadatak 13 ovo je najbolje za logiku
            var temp = Math.floor((Math.random() * 39) + 1);
            // it will find the index of element from array . if it don't find it will return -1
            // If the number already exists, the index of it on loto array will be different of -1, so it already exists
            // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
            var alreadyExists = array.indexOf(temp) !== -1;
        } while (alreadyExists); // Repeat this many times necessary to get an unique number.

        array.push(temp);
    }    
    for (var j=0; j<=6; j++){
        // Ovaj deo ispisuje brojeve u <p> element
        // eq("+j+") maltene postaje array gde se ispisuju vrednosti navodnici nemaju veze sa j oni zatvaraju <p>   i  <ul> <li>:
        // eq first child i tako slicno kao nth
        // html je JQ funkcija koja ispisuje tekst unutar objekta
        $("ul li:eq("+j+") p").html(array[j]);
    }


    // Ovaj deo je za poklapanje brojeva koji su izvuceni i koje je korisnik izabrao
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 39; j++) {
            if($("table:eq("+i+") td:eq("+j+")").hasClass("x-selector")) {
                for (var k = 0; k < array.length; k++) {
                    if($("table:eq("+i+") td:eq("+j+")").html() == array[k] ) {
                        $("table:eq("+i+") td:eq("+j+")").addClass( "guessed" );
                    }
                }
            }
        }
    }
}

$( "button#draw" ).click(function() {
    lotoGenerator();
});

$("button#again").click(function() {
    $("td").removeClass("guessed");
    $("td").removeClass("x-selector");
    $("ul li p").html("#");
});



});