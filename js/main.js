var manoAjax = new XMLHttpRequest();                            //sukuriamas XMLHTTP uzklausos objektas


manoAjax.onreadystatechange = function(){                   //sukuriama callback funkcija

    if(manoAjax.readyState === 4 && manoAjax.status === 200) {         //uzklausos busena "DONE"
        var receptai = JSON.parse(manoAjax.responseText);     //konvertuoja i JS objekta
        var sarasas = '<ul id="receptu_sarasas">';



        for (var i = 0; i < receptai.length; i++) {           // sukuriamas receptu sarasas su klasemis

                sarasas += '<li class="saraso_receptai">';
                sarasas += receptai[i].meals;
                sarasas += '</li>';
        }
        sarasas += '</ul>';
        document.querySelector('.receptai').innerHTML = sarasas;


    }
};

manoAjax.open('GET', 'https://themealdb.com/api/json/v1/1/search.php?s='+text);                //atidaroma uzklausa
manoAjax.send();                                                                                //siunciama uzklausa




var butn = document.querySelector("button");
var input = document.querySelector('input');

butn.addEventListener("click",function(){    //"ivykiu klausymas", parpaudus mygtuka "rodyti", ivykdoma funkcija
    var text = input.value;
    var receptuSar = document.querySelectorAll('.saraso_receptai');

    for(var i=0; i < receptuSar.length; i++){

    }
});







