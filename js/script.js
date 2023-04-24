$(document).ready(function() {
    var number = 0;
    var number_buttons = $(".select-number-button");
    var submit_button = $("#submit-button");
    var thankyou = $("#thankyou-card");
    var ratingCard = $("#rating-card");
    

    thankyou.hide();
    submit_button.text("Submit");
    

    number_buttons.on("click", function() {
        number_buttons.removeClass("selected");
        $(this).addClass("selected");
        number = $(this).text().trim();
      });

    submit_button.on("click", function() {
        $('#rating-number').text(number);
        ratingCard.hide();
        thankyou.show();

      });

});
