// Code goes here
//pisalem kod w angielskim jezyku
'use strict';

var packArray;
var choose;
var par;
var cardNumber;
var packNumber

function getStart () {
//tworzenie struktury dannych
////////////////////////////////////////////////////////////

//tablica parametrow
var parNumber = 4; //par - parametr
    par = [parNumber];

for (var i = 0; i < parNumber; i++)
  {
    par[i] = 3;
  }

//stworzylem tablice talij
//na ten przypadek
//jezeli zachcemy stworzyc je kilka 
//////////////////////////////

    packNumber = +prompt("ilosc talii", 1); //pack - talia 
    packArray = [packNumber];

for (var i = 0; i < packNumber + 1; i++)
  {
    packArray[i] = {};
  }

    cardNumber = prompt("ilosc kart", 1); //liczba kart w talii

for (var i = 0; i < cardNumber; i++)
  {
    
    var cardOrder = "karta numer " + (i + 1);
    packArray[0][cardOrder] = {};
    
    //tworzenie tresci karty: opis, metody zmieniajace parametry i td.
    packArray[0][cardOrder].description = "opis karty numer " + (i + 1);
    
    //metody zwracaja undefined, poniewaz w js nie ma funkcji void
    packArray[0][cardOrder].caseYes = function () {
       alert("metoda caseYes()");
       for (var i = 0; i < parNumber; i++)
        {
          par[i] = par[i] + 1;
        }
        return 1;
      };
      
    packArray[0][cardOrder].caseNo = function () {
       alert("metoda caseNo()");
       for (var i = 0; i < parNumber; i++)
        {
          par[i] = par[i] - 1;
        }
        return 0;
      };
  }
}
//////////////////////////////////////////////////////////// 
function main () {
while (true) {
    random();
    for (var key in packArray[1]) {
      alert(key);
      if (!(par[0]!==0&&par[0]!==100&&par[1]!==0&&par[1]!==100&&par[2]!==0&&par[2]!==100&&par[3]!==0&&par[3]!==100)) {
      break;
      }
      
      var choose = undefined;
      while (choose!==0&&choose!==1) {
      
        choose = +prompt(packArray[1][key].description, "wybierz Tak - 1, czy Nie - 0");

        if (choose === 1) {
          packArray[1][key].caseYes();  
        }
        
        else if (choose === 0) {
          packArray[1][key].caseNo();
        }
      }
      delete packArray[1][key];
    }

    if (!(par[0]!==0&&par[0]!==100&&par[1]!==0&&par[1]!==100&&par[2]!==0&&par[2]!==100&&par[3]!==0&&par[3]!==100)) {
      break;
    }
  }
}
////////////////////////////////////////////////////////////
function random () {
   var order = [cardNumber];                                //tablica "rand[]" umozliwia zapisanie numerow kart,
   var isOkay = false;                                                           //ktore juz byly wylosowane
   for (var i = 0; i < cardNumber; i ++) {
        
          while (!isOkay) {
              order[i] = Math.floor(Math.random() * cardNumber) + 1;
              isOkay = true;
              
              for (var k = 0; k < cardNumber; k++) {         //sprawdza, czy nie zostal juz wylosowany
                if (k == i) continue;
                if (order[i] == order[k]) {                  //taki samy numer karty jak wczesniej
                  isOkay = false;
                  break;
                }
              }
          }
          
          isOkay = false;
        
              for (var key in packArray[0]) {                   //szuka karte ktora jest na miejscu 
                                                                //okreslonym przez zmienna "order[i]"
                  if (key == ("karta numer " + order[i])) break;
                }
        
        var cardOrder = "karta numer " + order[i];
        packArray[1][cardOrder] = {};
        
        packArray[1][cardOrder].description = packArray[0][key].description;
        packArray[1][cardOrder].caseYes = packArray[0][key].caseYes;
        packArray[1][cardOrder].caseNo = packArray[0][key].caseNo;
        
    }
    
   /* for (var key in packArray[1])
      {
        alert(key);
        alert(packArray[1][key].description);
      }*/
}//wywolywana w ciele main()

choose = +prompt('czesc, witam Cie w grze :) chcesz zaczac?', "wybierz Tak - 1, czy Nie - 0");
while (choose) {
getStart();
main();
choose = +prompt('Czy chcesz zagrac ponownie?', "wybierz Tak - 1, czy Nie - 0");
}


















