$(function() {
//first, create a set of questions, answers and results

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

  //variables you will need for the quiz:
  var index = 0; // this is the first question index;
  var collectedAnswers = []; //this is the array where the answers are stored, then counted and depending on the occurence of each, result is established

  var startingBtn = $("#start");
  
  // first initiate the quiz
  startingBtn.on("click", function(event) {
    console.log("sdsd");
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
    } else {
      resultsParagraph.text(quiz.descriptions[7]);
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
    } else {
      showResults();
    }
  });

  $("body").on("click", ".hideAlertBtn", function() {
    $(this).parent().remove();
  });
 });