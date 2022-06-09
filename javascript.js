function afficherdateheure() {

    var x = new Date();

    var annee = x.getFullYear();

    var mois = x.getMonth();

    var jours = x.getDay();
    var y =x.getDate();

    var Mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]
    mois = Mois[mois];

    var JOURS = ["dimanche", "Lundi", "Mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    jours = JOURS[jours];

    var heure =x.getHours();
    var minute =x.getMinutes();
    var secondes =x.getSeconds();
    if(secondes<10) {
        secondes= "0"+ secondes
    }
    if(minute<10){
        minute="0"+minute
    }
    if(heure<10  ){
        heure="0" + heure
    }
    if(heure==24){
        heure=0
    }

    document.getElementById('dateheure').innerHTML = jours + " " +y+" "+ mois + " " + annee +" " +heure+":"+minute +":"+secondes ;



}
function afficherchaquesecondeheure() {


    afficherdateheure()
}
function setCookie(nobrevisiteur, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    console.log(d,value);
    let expires = "expires="+ d.toUTCString();
    document.cookie = nobrevisiteur + "=" + cvalue + ";" + exdays + ";path=/";
  }

                               // 3-fetch sert a appeler une adresse 4- await = avant de paaser a la suite tu ne peux pas excecuter cette tant que la ligne precedente n a pas ete excecuter

                                       // 5-json permet de reconvertir ce que retourne l api en objet comprehensible par javascript 

function prise_en_charge(){


    
}