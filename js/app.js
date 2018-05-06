$(function() {

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
  

  var databaseJSON = "https://raw.githubusercontent.com/Datenshi666/json/master/data.json";
  var personalityQuiz;
  var quiz;
  var questions;
  var questionSet;

  $.getJSON(databaseJSON, function(json) {
    personalityQuiz = json;
    quiz = personalityQuiz.personalityQuiz;
    questions = quiz.questions;
    questionSet = questions.length;
  });
  
  var waga = [
    {
      count: 0,
      weight: 0
    },
    {
      count: 0,
      weight: 0
    },
    {
      count: 0,
      weight: 0
    },
    {
      count: 0,
      weight: 0
    },
    {
      count: 0,
      weight: 0
    },
    {
      count: 0,
      weight: 0
    },
    {
      count: 0,
      weight: 0
    }
  ];
  var index = 0; // this is the first question index;
  var collectedAnswers = []; //this is the array where the answers are stored, then counted and depending on the occurence of each, result is established
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
      // console.log(answers);
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

    max = 0;
    count = 0;
    for (var i = 0; i < 7; i++) {
      if (waga[i].count > max) {
        max = waga[i].count;
        count = 1;
      } else if (waga[i].count === max) {
        count++;
      }
    }
    if (count === 1) {
      for (var i = 0; i < 7; i++) {
        if (waga[i].count === max) {
          resultsParagraph.text(quiz.answers[1].descriptions[i]);  
          break;
        }
      }
    } else {
      maxWeight = 0;
      for (var i = 0; i < 7; i++) {
        if (waga[i].count === max && waga[i].weight > maxWeight) {
          maxWeight = waga[i].weight;
        }
      }
      for (var i = 0; i < 7; i++) {
        if (waga[i].weight === maxWeight) {
          resultsParagraph.text(quiz.answers[1].descriptions[i]);
        }
      }
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
    //randomize(questions);
    createQuestion();
  });

WEIGHT = 1;
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
        waga[dataText - 1].count++;
        waga[dataText - 1].weight += WEIGHT;
        WEIGHT *= 2;
        console.log(waga);
        collectedAnswers.push(dataText);
        createQuestion();
        $(this).parent().hide();
        $(this).parent().prev().hide();
      }
      //once the questions are all answered, the results are generated
        
    } else {
      showResults();
    }
  });

  $("body").on("click", ".hideAlertBtn", function() {
    $(this).parent().remove();
  });
 });