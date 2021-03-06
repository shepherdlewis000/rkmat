/*!
 * betterRating jQuery Plugin
 * Author: @malithmcr
 * Email : malith.priyashan.dev@gmail.com
 * Licensed under the MIT license
 */

/*
    This plugin allow you to create beautiful rating form. already styled.
*/

; (function ($) {
        const badCaptchaBox =
        `<div class="badcaptcha-box rounded d-inline-block 
        text-danger bg-white border border-danger" 
        style="width:367.5px;height:84.33px;">
      <div class="row"
        style="padding-top:9.89px;
        padding-bottom:2.965px">
        <div class="col-2 d-flex align-items-center"
            style="padding-left:12px; padding-right:8px;">
          <div class="inline-block icon-holder" 
            style=
                "width:100%; 
                text-align: center;
                padding-left:18px;
                padding-bottom: 5px;"
            >
            <i class="fas fa-exclamation-circle fa-3x"></i>
          </div> 
        </div> <!-- end col-2 -->
        <!-- start div.col-10 (second column) -->
        <div class="col-10">
          <div class="col-12 text-center">
            <div class="font-weight-bold d-inline-block 
                text-danger" 
                style=
                    "font-size: 1.1rem; 
                    padding-left: 0px; 
                    padding-top: 0rem;"
            >
                Captcha verification failed
            </div> 
          </div> <!-- end col-12 -->
          <div class="col-12 text-center">
            <div style=
                "font-size:0.8rem; 
                line-height: 63%; 
                padding-top: 0.16rem; 
                padding-bottom:0.31rem;"
            >
                <em class="text-danger">Answer wrong or other error</em> <!-- 27 chars -->
            </div>
          </div>       
          <div class="col-12">
            <div class="text-center" 
                style=
                    "margin-bottom: 0.5rem;
                    ">
              <a class="link text-primary" 
                style="font-size:0.84rem;">
                Try captcha again after clicking here
              </a>
            </div>
          </div> <!-- end col-12 -->
        </div> <!-- end col-10 (second column) -->
      </div> <!-- end div.row -->
    </div >`;


    $.fn.extend({
        betterRating: function( options ) {
            /**
             * @option : wrapper - rating list wrapper div
             * @option : icon - fontAwesome icon name
             */
            this.defaultOptions = {
                wrapper: '#list',
                icon: 'fa fa-star',
            };
            var settings = $.extend({}, this.defaultOptions, options);
            this.getRating(settings);
            return this.each(function() {
                var $this = $(this);
            });
        },
        getRating: function(settings) {
                var self = this;

                $('.rating i').on('click', function(){
                    $('#rating-count').val($(this).data('rate'));
                    $(this).parent().find('i:lt(' + ($(this).index() + 1) + ')').addClass('selected');
                });

                $('.rating i').on('mouseover', function(){
                    $(this).parent().children('.rating i').each(function(e){
                        $(this).removeClass('selected');
                      });
                    $(this).parent().find('i:lt(' + ($(this).index() + 1) + ')').addClass('hover');
                  }).on('mouseout', function(){
                    $(this).parent().children('.rating i').each(function(e){
                      $(this).removeClass('hover');
                    });
                  });

            $(this).submit(function (event) {
                    
                    event.preventDefault();
                    var formData = $(this).serializeArray();
                    
                    // We hafta make sure >=1 star
                    if (formData[1].value == 0) {
                        console.log("Eq 0");
                        var alertBox =
                        `<div class="alert-danger alert-dismissable">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;
                            </button>
                            The star rating cannot be blank. You must assign one to five stars!
                        </div>`;
                        
                        console.log("better-rating.js:59 composed danger alert bc rating is zero")
                        $('#better-rating-form').find('.messages').html(alertBox);
                            //$('#submit_button').hide('slow');
                            //$('#captcheck_container2').hide('slow');
                            // empty the form
                            //$('#better-rating-form')[0].reset();
                        return;
                    }
                    
                console.log(formData); // Can still get here if captcheck is not done
                
                $.ajax({
                    type: "POST",
                    url: 'submit-review.php',
                    data: $(this).serialize(),
                    success: function (data) {
                        console.log("better-rating.js137 success entry");
                        //clearTimeout(myto); // Cancel the timeout ajax failed msg
                        console.log("better-rating.js:139 ajax success and "); // currChoice STILL undef
                        //console.log("currChoice is: " + getCurrChoice() + " and data is below:");
                        console.dir(data);
                        var successBox =
                        `           <div class="alert-successs alert-dismissable">
                                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;
                                        </button>
                                        Your review has been recorded. Thanks so much for your time!
                                    </div>`;
                        $('#better-rating-form').find('.messages').html(successBox);
                        const animateSend = setTimeout(() => {
                            if (data.type === 'danger') {
                                $('#better-rating-form').find('.messages').html(badCaptchaBox);
                            }
                            else if (data.type === 'success') {
                                //$('.circle-loader').toggleClass('load-complete');
                                //$('.checkmark').toggle();
                                /* $('#sentButton').text("Sent!"); */
                                $('#submit_button').hide('slow');
                                $('#captcheck_container2').hide('slow');
                                // empty the form
                                $('#better-rating-form')[0].reset();
                                var successAlert =
                        `           <div class="alert-successs alert-dismissable">
                                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;
                                        </button>
                                        Your review has been recorded. Thanks so much for your time!
                                    </div>`;

                            }
                        }, 2000);

                        // data = JSON object that contact.php returns
                        // we recieve the type of the message: success x danger and apply it to the 
                        var messageAlert = 'alert-' + data.type;
                        var messageText = data.message;

                        // let's compose Bootstrap alert box HTML
                        var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                        // If we have messageAlert and messageText
                        if (messageAlert && messageText) {
                            console.log("line 175 in better-rating.js")
                            // inject the alert to .messages div in our form
                            $('#better-rating-form').find('.messages').html(alertBox);
                            $('#submit_button').hide('slow');
                            $('#captcheck_container2').hide('slow');
                            // empty the form
                            $('#better-rating-form')[0].reset();
                        }
                    }
                    });
                    return false;

                    
                    //$('#better-rating-list').append(self.template(formData));
                });
                
        },

        /** creation of the list template*/
        template: function(data) {
                var rating = '<i class="fa fa-star selected" data-rate="1"></i>';
                for(var i =1; i < data[1].value; i++) {
                    rating += '<i class="fa fa-star selected" data-rate="1"></i>';
                }
                var list = '<li>';
                list += '<div class="profile-rating-wrapper">';
                list += ' <div class="profile-pic"><img src="images/profile_pic.png" alt="" /></div>';
                list += '<div class="name">'+data[0].value+' Wrote:</div>';
                list += '<div class="rating">'
                list += rating;
                list += '</div>';
                list += '</div>';
                list += '<div class="content">';
                list += '<p>'+data[2].value+'</p>';
                list += '</div>';
                list += '</li>';
                return list;
        }

    });

})(jQuery);