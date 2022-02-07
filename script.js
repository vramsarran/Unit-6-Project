$(".start-button").click(function() {
    $(".firstImage").slideUp();
    $(".title").hide();
    $(".start-button").hide();
    $(".first-step").text("Kevin is about to conduct one of the city's biggest heist, stealing The Starry Night, a famous painting from the Museum of Modern Art located in Manhattan City. It's a painting by Vincent van Gogh and it's worth over 100 million dollars. Doubleclick the button to see what happens when Kevin is about to enter the museum at night!");
    $(".button1").show();
});

$(".next-button").dblclick(function(){
    $(".system").slideDown();
    $(".next-button").hide();
    $(".first-step").hide();
    $(".decision").text("The system was hacked successfully allowing Kevin to enter the museum but he's having second thoughts. What do you think, should he go in or get out of there?");
    $(".button2").show();
});

$(".no").click(function(){
    $(".system").slideUp();
    $(".decision").hide();
    $(".yes").hide();
    $(".no").hide();
    $(".result").text("Oh no, Kevin lost the 100 million! Try going in next time.😉");
});

$(".yes").mouseenter(function(){
    $(".system").slideUp();
    $(".decision").hide();
    $(".yes").hide();
    $(".no").hide();
    $(".results").text("Great Choice! You've entered the Museum of Modern Art. Now double click on the display to pick up the Starry Night.");
    $(".Museum").slideDown("");
});

$(".Museum").dblclick(function(){
    $(".Image").show();
    $(".next-step").text("Now click on the painting to see what happens next!");
});
$(".Image").click(function(){
    $(".Image").slideUp();
    $(".Museum").hide();
    $(".next-step").hide();
    $(".results").hide();
    $(".next-step2").text("Uh Oh, the alarm has set off, what should Kevin do now?😢 Should he go right or left? Click on the best direction.");
    $(".alarm").show();
    $(".button3").show();
    
});

$(".yes1").click(function(){
    $(".alarm").hide();
    $(".next-step2").hide();
    $(".yes1").hide();
    $(".yes2").hide();
    $(".saved").text("Yes, you did it! Kevin managed to escape with a whopping 100 million dollars painting!🍾✨🎆");
    $(".celebrate").show("");
    
});
$(".yes2").click(function(){
    $(".alarm").hide();
    $(".next-step2").hide();
    $(".yes1").hide();
    $(".yes2").hide();
    $(".yikes").text("Oh No! Kevin has been caught up in the laser and the police has arrived. This grand heist was unsuccessful, try again next time!😄");
    $(".trapped").toggle();
});