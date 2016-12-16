// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
console.log("Sanity Check: JS is working!");
var currQuestion = 0;

$(document).ready(function() {

    var data = $.ajax({
        method: 'GET',
        url: '/api',
        type: 'json'
    });

    $('#htmlBtn').on('click', function(event) {
        event.preventDefault();
        window.location.href = "/html";
    });
    //
    // $('#cssBtn').on('click', function(event) {
    //     event.preventDefault();
    //     window.location.href = "/css";
    // });
    //
    // $('#javascriptBtn').on('click', function(event) {
    //     event.preventDefault();
    //     window.location.href = "/js";
    // });

    $('#yesBtn').on('click', function(event) {
        event.preventDefault();
        window.alert('You have found your answer!');
    });

    $('.question-form').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/api',
            type: 'json',
            data: $(this).serialize(),
            success: postQuestion
        });
    });

    $('#noBtn').on('click', function(event) {
        event.preventDefault();
        currQuestion++;
        switch (window.location.pathname) {
          case '/html':
            runQuestions(data.responseJSON[0], currQuestion-1);
            break;
          case '/css':
            runQuestions(data.responseJSON[1], currQuestion-1);
          case '/js':
            runQuestions(data.responseJSON[2], currQuestion-1);
        }
    });

    function runQuestions(data, currQuestion) {
      console.log(data);
        $('#relatedLink').empty();
        $('#duckBubble').empty();
        $('#duckBubble').prepend(data.questions[currQuestion].text);
        $('#relatedLink').append('<a href="' + data.questions[currQuestion].relatedLinks + '">Learn More!</a>');
    }

    function postQuestion(data) {
        console.log(data);
    }


});
