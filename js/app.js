$(function() {
//first, create a set of questions, answers and results
  var personalityQuiz = {
    questions: [
      {
        title: "1. Kim chciałeś zostać jako dziecko?",
        answers: [
          {
            answer: "Podróżnikiem",
            result: "1"
          },
          {
            answer: "Informatykiem ",
            result: "2"
          },
          {
            answer: "Nauczycielem",
            result: "3"
          },
          {
            answer: "Biznesmanem",
            result: "4"
          },
          {
            answer: "Architektem",
            result: "5"
          },
          {
            answer: "Sportowcem",
            result: "6"
          },
          {
            answer: "Fotografem",
            result: "7"
          }
        ]
      },
      {
        title: "2. Które z tych miejsc wydaje ci się atrakcyjne do wykonywania pracy?",
        answers: [
          {
            answer: "Hotel",
            result: "1"
          },
          {
            answer: "Firma związana z IT",
            result: "2"
          },
          {
            answer: "Szkoła",
            result: "3"
          },
          {
            answer: "Duża firma",
            result: "4"
          },
          {
            answer: "Firma tworząca projekty budowlane",
            result: "5"
          },
          {
            answer: "Centrum fitness",
            result: "6"
          },
          {
            answer: "Galeria sztuki",
            result: "7"
          }
        ]
      },
      {
        title: "3. Która odpowiedź najlepiej do ciebie pasuje",
        answers: [
          {
            answer: "Nie potrafię siedzieć w miejscu",
            result: "1"
          },
          {
            answer: "Mam analityczny umysł",
            result: "2"
          },
          {
            answer: "Lubię rozmawiać z ludźmi",
            result: "3"
          },
          {
            answer: "Nie boję się trudnych zadań",
            result: "4"
          },
          {
            answer: "Jestem bardzo dokładny w tym co robię",
            result: "5"
          },
          {
            answer: "Lubię pomagać ludziom",
            result: "6"
          },
          {
            answer: "Lubię tworzyć coś kreatywnego",
            result: "7"
          }
        ]
      },
      {
        title: "4. Co lubisz robić w wolnym czasie",
        answers: [
          {
            answer: "Spaceruję",
            result: "1"
          },
          {
            answer: "Spędzam czas przy komputerze",
            result: "2"
          },
          {
            answer: "Spotykam się ze znajomymi",
            result: "3"
          },
          {
            answer: "Piszę bloga lub opowiadania",
            result: "4"
          },
          {
            answer: "Rozwijam swoje zainteresowania",
            result: "5"
          },
          {
            answer: "Uprawiam sport",
            result: "6"
          },
          {
            answer: "Maluję lub rysuję",
            result: "7"
          }
        ]
      },
      {
        title: "5. Czego chciałbyś się uczyć",
        answers: [
          {
            answer: "Języków obcych i kultury innych krajów",
            result: "1"
          },
          {
            answer: "Programowania robotów",
            result: "2"
          },
          {
            answer: "Jak pomóc innym rozwiązywać ich problemy",
            result: "3"
          },
          {
            answer: "Chciałbym mieć większą wiedzę związaną z ekonomią i marketingiem",
            result: "4"
          },
          {
            answer: "Jak gospodarować przestrzenią miejską",
            result: "5"
          },
          {
            answer: "Chciałbym być mistrzem w jakimś sporcie",
            result: "6"
          },
          {
            answer: "Chcę rozwijać swoje zdolności plastyczne",
            result: "7"
          }
        ]
      },
      {
        title: "6. Twoi przyjaciele powiedzieli by o tobie że jesteś:",
        answers: [
          {
            answer: "Komunikatywny",
            result: "1"
          },
          {
            answer: "Odpowiedzialny",
            result: "2"
          },
          {
            answer: "Opiekuńczy",
            result: "3"
          },
          {
            answer: "Zorganizowany",
            result: "4"
          },
          {
            answer: "Perfekcjonistą",
            result: "5"
          },
          {
            answer: "Aktywny",
            result: "6"
          },
          {
            answer: "Kreatywny",
            result: "7"
          }
        ]
      },
      {
        title: "7. Co przeszkadzałoby ci najbardziej w przyszłej pracy",
        answers: [
          {
            answer: "Monotonia",
            result: "1"
          },
          {
            answer: "Hałas",
            result: "2"
          },
          {
            answer: "Brak kontaktu z innymi ludźmi",
            result: "3"
          },
          {
            answer: "Kiedy ktoś narzucał by mi co mam robić",
            result: "4"
          },
          {
            answer: "Gdybym nie mógł odpowiadać za końcowy efekt pracy",
            result: "5"
          },
          {
            answer: "Siedzenie przy biurku cały dzień",
            result: "6"
          },
          {
            answer: "Brak możliwości wyrażenia siebie",
            result: "7"
          }
        ]
      },
      {
        title: "8. Jakie masz oczekiwania wobec swojej przyszłej pracy",
        answers: [
          {
            answer: "Chcę dużo podróżować i poznawać nowych ludzi",
            result: "1"
          },
          {
            answer: "Chcę móc poznawać najnowsze technologie",
            result: "2"
          },
          {
            answer: "Chcę móc pomagać innym",
            result: "3"
          },
          {
            answer: "Chcę być niezależny i zarządzać innymi osobami",
            result: "4"
          },
          {
            answer: "Chcę być odpowiedzialny za duże projekty",
            result: "5"
          },
          {
            answer: "Chcę żeby praca była moją pasją",
            result: "6"
          },
          {
            answer: "Chcę rozwijać moje talenty",
            result: "7"
          }
        ]
      },
      {
        title: "9. Z jakimi osobami lubisz pracować w grupie",
        answers: [
          {
            answer: "Komunikatywnymi",
            result: "1"
          },
          {
            answer: "Logicznie myślącymi",
            result: "2"
          },
          {
            answer: "Wyrozumiałymi",
            result: "3"
          },
          {
            answer: "Ambitnymi",
            result: "4"
          },
          {
            answer: "Zorganizowanymi",
            result: "5"
          },
          {
            answer: "Sumiennymi",
            result: "6"
          },
          {
            answer: "Kreatywnymi",
            result: "7"
          }
        ]
      },
      {
        title: "10. Które osiągnięcie byłoby dla ciebie najbardziej satysfakcjonujące",
        answers: [
          {
            answer: "Wymyślenie maszyny, która w minutę przenosiłaby nas w dowolne miejsce na ziemi",
            result: "1"
          },
          {
            answer: "Stworzenie robota ze sztuczną inteligencją zbliżoną do człowieka",
            result: "2"
          },
          {
            answer: "Odkrycie leku na rana o 100% skuteczności",
            result: "3"
          },
          {
            answer: "Stworzenie maszyny do podróży w czasie",
            result: "4"
          },
          {
            answer: "Wymyślenie nowej metody na pozyskanie czystej, bezpiecznej i taniej energii",
            result: "5"
          },
          {
            answer: "Odkrycie leku na szybkie i bezpieczne odchudzanie",
            result: "6"
          },
          {
            answer: "Nawiązanie kontaktu z pozaziemską cywilizacją",
            result: "7"
          }
        ]
      },
      {
        title: "11. Jakie słowo kojarzy ci się z twoją wymarzoną pracą",
        answers: [
          {
            answer: "Spełnienie",
            result: "1"
          },
          {
            answer: "Rozwój",
            result: "2"
          },
          {
            answer: "Autorytet",
            result: "3"
          },
          {
            answer: "Prestiż",
            result: "4"
          },
          {
            answer: "Duma",
            result: "5"
          },
          {
            answer: "Pomaganie",
            result: "6"
          },
          {
            answer: "Wolność",
            result: "7"
          }
        ]
      },
      {
        title: "12. Dlaczego chcesz iść na studia",
        answers: [
          {
            answer: "Chcę poznawać nowych ludzi",
            result: "1"
          },
          {
            answer: "Chce w trakcie studiów zdobyć doświadczenie do przyszłej pracy",
            result: "2"
          },
          {
            answer: "Chcę nauczyć się jak lepiej współpracować z ludźmi",
            result: "3"
          },
          {
            answer: "Chce zdobyć konkretny zawód, po którym jest praca",
            result: "4"
          },
          {
            answer: "Chce być ekspertem w danej dziedzinie",
            result: "5"
          },
          {
            answer: "Chcę rozwijać swoje pasje",
            result: "6"
          },
          {
            answer: "Chcę wykorzystać mój talent",
            result: "7"
          }
        ]
      }
    ],
    results: ["1", "2", "3", "4", "5", "6", "7"],
    descriptions: [
      "Studiuj turystykę - Podstawowym założeniem programu nauczania naszej uczelni jest odejście od kształcenia teoretycznego i położenie wyraźnego nacisku na wiedzę specjalistyczną, przygotowującą Cię do podjęcia zatrudnienia w sektorze usług turystycznych.",
      "Zostań inżynierem - Studia przygotują Cię z zakresu metod projektowania, nauczą pracy w zespole, ergonomii pracy oraz wspomagania komputerowego. Umożliwią praktyczne poznanie najnowszych technologii oraz obszarów ich zastosowań, w bezpośrednim kontakcie z ich producentami i dostawcami.",
      "Dołącz do humanistów - Studia dla osób o wysokich kompetencjach komunikacyjnych i wrażliwości społecznej, zorientowanych na pracę z ludźmi i dla ludzi. Oparte o zapotrzebowanie rynku pracy na wykwalifikowanych praktyków z zakresu nauk społecznych.",
      "Dołącz do menedżerów - Ofertę edukacyjną dla Ciebie współtworzą ekonomiści, liderzy regionalnej przedsiębiorczości oraz instytucje wspierające biznes, wskazując te obszary rynku, na które jest największe zapotrzebowanie na specjalistów z określonych dziedzin.",
      "Buduj i projektuj - Oferta kierowana jest do osób kreatywnych z wyobraźnią. Podejmując studia na tych obszarach zyskujesz praktyczne kształcenie w zakresie m.in. kształtowania przestrzeni i krajobrazu, technologii budowlanych i materiałoznawstwa, projektowania wnętrz i designu.",
      "Działaj w sektorze medycznym - Wybierz studia z pasją, poparte wyselekcjonowaną i praktyczną wiedzą umożliwiającą odnalezienie zupełnie nowych i pożądanych przez pracodawców obszarów zatrudnienia w działalności medycznej, sportowej czy rekreacyjnej.",
      "Pracuj w branży kreatywnej - Kompetencje uzyskane podczas toku nauki uczynią z Ciebie preferowanego kandydata do pracy w dynamicznie rozwijających się firmach i spółkach z kapitałem zagranicznym, ale też w środkach masowego przekazu, centrach finansowych, firmach transportowych, doradztwie czy fundacjach.",
	  "Ta sama liczba odpowiedzi"
    ]
  };

  //function allowing to mix the questions and answers so the quiz is more interesting
  function randomize(elements) {
    for (var i = 0; i < elements.length; i++) {
      var j = Math.floor(Math.random() * elements.length);
      var temp = elements[i];
      elements[i] = elements[j];
      elements[j] = temp;
    }
    return elements;
  }
  //variables you will need for the quiz:
  var index = 0; // this is the first question index;
  var quiz = personalityQuiz;
  var questions = quiz.questions;
  var questionSet = questions.length;
  var collectedAnswers = []; //this is the array where the answers are stored, then counted and depending on the occurence of each, result is established
  var newAnswers = collectedAnswers;
  var startingBtn = $("#start");
  // first initiate the quiz
  startingBtn.on("click", function(event) {
    $(this).remove();
    $(this).parent().remove();
    var testBoard = $("<div>");
    testBoard.addClass("board");
    testBoard.appendTo($("body"));
    testBoard.attr("id", "testBoard");

    var button = $("<button>start test</button>");
    button.appendTo(testBoard);
    button.attr("class", "startTest");
  });


  //the functions you need for the quiz once it has started
  function createQuestion() {
    if (index < questionSet) {
      var answers = questions[index].answers;
      randomize(answers);

      var title = $("<h5>", {
        class: "title"
      });
      title.appendTo(testBoard);
      var quizDiv = $("<div>", {
        class: "quizDiv"
      });
      quizDiv.insertAfter(title);
      title.text(questions[index].title);
      for (var i = 0; i < answers.length; i++) {
        var label = $("<label>");
        label.appendTo(quizDiv);
      }

      var labels = quizDiv.find("label");
      for (var i = 0; i < labels.length; i++) {
        $(labels[i]).text(answers[i].answer); //the label text matches the answer
        $(labels[i]).attr("data", answers[i].result);
      }

      labels.each(function(index2, value) {
        var input = $("<input>");
        input.attr("type", "radio");
        input.attr("name", "one");
        input.prependTo($(this));
      });

      var inputs = quizDiv.find("input");
      inputs.on("change", function(event) {
        $(this).parent().addClass("checked");
        $(this).parent().siblings("label").removeClass(); //this is how you color only the checked answer and know which it was
      });

      var button = $("<button>", {
        class: "quizButton"
      });
      button.appendTo(quizDiv);
      button.text("next");
    } else {
      showResults();
    }
  }

  function showResults() {
    var resultsBoard = $("<div>", {
      class: "resultsBoard"
    });
    resultsBoard.appendTo($("body"));
    $("quizDiv").children().not(resultsBoard).hide();
    var resultsParagraph = $("<p>", {
      class: "resultsParagraph"
    });
    resultsParagraph.appendTo(resultsBoard);
    var result0 = collectedAnswers.filter(function(item) {
      return item === quiz.results[0];
    }).length;
    var result1 = collectedAnswers.filter(function(item) {
      return item === quiz.results[1];
    }).length;
    var result2 = collectedAnswers.filter(function(item) {
      return item === quiz.results[2];
    }).length;
    var result3 = collectedAnswers.filter(function(item) {
      return item === quiz.results[3];
    }).length;
    var result4 = collectedAnswers.filter(function(item) {
      return item === quiz.results[4];
    }).length;
    var result5 = collectedAnswers.filter(function(item) {
      return item === quiz.results[5];
    }).length;
    var result6 = collectedAnswers.filter(function(item) {
      return item === quiz.results[6];
    }).length;
    var result7 = collectedAnswers.filter(function(item) {
      return item === quiz.results[7];
    }).length;

    if (result0 > result1 && result0 > result2 && result0 > result3 && result0 > result4 && result0 > result5 && result0 > result6) {
      resultsParagraph.text(quiz.descriptions[0]);
    } else if (result1 > result0 && result1 > result2 && result1 > result3 && result1 > result4 && result1 > result5 && result1 > result6) {
      resultsParagraph.text(quiz.descriptions[1]);
    } else if (result2 > result0 && result2 > result1 && result2 > result3 && result2 > result4 && result2 > result5 && result2 > result6) {
      resultsParagraph.text(quiz.descriptions[2]);
    } else if (result3 > result0 && result3 > result1 && result3 > result2 && result3 > result4 && result3 > result5 && result3 > result6) {
      resultsParagraph.text(quiz.descriptions[3]);
    } else if (result4 > result0 && result4 > result1 && result4 > result2 && result4 > result3 && result4 > result5 && result4 > result6) {
      resultsParagraph.text(quiz.descriptions[4]);
    } else if (result5 > result0 && result5 > result1 && result5 > result2 && result5 > result3 && result5 > result4 && result5 > result6) {
      resultsParagraph.text(quiz.descriptions[5]);
    } else if (result6 > result0 && result6 > result1 && result6 > result2 && result6 > result3 && result6 > result4 && result6 > result5) {
      resultsParagraph.text(quiz.descriptions[6]);
    } 
  }



//if you do not choose an answer- alert is shown and the quiz is halted
  function createAlertBox(element) {
    var alertBox = $("<div>", {
      class: "alertBox"
    });
    var alertP = $("<p>");
    alertBox.prependTo(element);
    alertP.appendTo(alertBox);
    alertP.text("Before moving forward choose an answer!");

    var hideAlertBtn = $("<button>", {
      class: "hideAlertBtn"
    });
    hideAlertBtn.appendTo(alertBox);
    hideAlertBtn.text("OK");
  }

  //test starts
  $("body").on("click", ".startTest", function() {
    $(this).remove();
    randomize(questions);
    createQuestion();
  });

  $("body").on("click", ".quizButton", function() {
    var labels = $(this).siblings("label");
    //console.log(labels);
    var checked = labels.find("input:checked");
    //console.log(checked);
    var labelText = checked.parent().text();
    //console.log(labelText);
    var dataText = checked.parent().attr("data");
    if (index < questionSet) {
      //you cannot move on if no answer is given
      if (dataText === undefined) {
        createAlertBox($("#testBoard"));
      } else {
        index++;
        collectedAnswers.push(dataText);
        console.log(collectedAnswers, collectedAnswers.length);
        createQuestion();
        $(this).parent().hide();
        $(this).parent().prev().hide();
      }
      //once the questions are all answered, the results are generated
        
    } else{
      if(quiz.descriptions !== 1){   
          //no i to kurwa nie działa -_-"

      }else{
        showResults();
        }

    

    }
  });

  $("body").on("click", ".hideAlertBtn", function() {
    $(this).parent().remove();
  });
 });