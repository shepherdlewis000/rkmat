$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();
    
    const successBox =
    `<div class="successBox rounded d-inline-block border border-success text-success" 
      style="padding: 0 0 3px 3px; width: 367.5px; height: 84.33px;">
      <div class="row text-success" style="padding-top:9px;">
        <div class="col-2" style="padding-left: 15px">
          <!-- <div class="icon-holder"style="width:100%; text-align: center;"> -->
          <div class="icon-holder" 
            style="width:100%; text-align:center; padding: 8px 0 0 22px">
            <div class="circle-loader" style="margin: 0 0 0 0;" >
              <div class="checkmark draw"></div>
            </div>
          </div> <!-- end div.icon-holder -->
        </div> <!-- end col-2 (1st column) -->
            
            <div class="col-10 text-center">
                <div class="text-success" style="margin-left:7px;">
                    <div class="d-flex align-items-center" style=
                        "padding-left: 47.74px; 
                        padding-right: 24px;
                        margin-top: 9px; 
                        font-size: 37px;"
                    >
                        <div
                          id="sentButton"
                          class="d-inline-block" 
                          style="padding-bottom: 6px"
                        >
                          Sending...
                        </div>
                    </div>
                </div>
            </div> <!-- end col-10 (2nd column)-->
        </div> <!-- end div.row -->
    </div> <!-- end div.success-box -->`;

    const loadingBox =
    `<!-- Below is loading-box -->
        <div 
            class="loading-box rounded d-inline-block bg-warning border border-dark text-dark"
        >
            <div class="row" style="margin-top: 2px; margin-left: 1px; margin-bottom: 6.04px">
                <div class="col-2 d-flex align-items-center">
                    <div class="icon-holder" style="width:100%; text-align: center;">
                        <i class="fas fa-cog fa-spin fa-3x"></i>
                    </div>
                </div> <!-- end col-2 (1st column) -->
                <div class="col-10 text-center">
                    <div class="text-dark">
                        <div class="d-flex" style=
                            "padding-left: 47.74px; 
                            padding-right: 42.68px; 
                            padding-top: 6px; 
                            font-size: 37px;"
                        >
                            <div class="d-inline-block" 
                                style="padding-top:7px; padding-bottom: 6px">
                                Loading...
                            </div>
                        </div>
                    </div>
                </div> <!-- end col-10 (2nd column)-->
            </div> <!-- end div.row -->
        </div> <!-- end div.loading-box -->`;
    
    const timeoutBox =
        `<div class="timeout-box rounded d-inline-block 
        text-danger border border-danger" style="width:367.5px;height:84.33px;">
      <div class="row"
        style="padding-top:7.89px;
        padding-bottom:0.965px">
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
                    "font-size: 1.26rem; 
                    padding-left: 0px; 
                    padding-top: 0rem;"
            >
                Error submitting form
            </div> 
          </div> <!-- end col-12 -->
          <div class="col-12 text-center">
            <div style=
                "font-size:0.8rem; 
                line-height: 63%; 
                padding-top: 0.36rem; 
                padding-bottom:0.11rem;">
              <em class="text-danger">Did you complete the captcha?</em>
            </div>
          </div> <!-- end col-12 -->         
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
    </div> <!-- end .timeout-box -->`;
    
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
        
    // when the form is submitted
  $('#contact-form').on('submit', function (e) {
            e.target.
            const getCurrChoice = () => $("input[type=hidden][name=captcheck_selected_answer]").val();
            const getSessionCode = () => $("input[type=hidden][name=captcheck_session_code]").val();
    
            // Validator allowed, so all fields (except possibly captcheck) are filled 
            if (!e.isDefaultPrevented()) {
                
                //console.log("contact.js:146 captcheck sessioncode is: " + getSessionCode());
                //console.log("contact.js:147 captcheck currChoice is: " + getCurrChoice());
                // we know it's undefined initially... undefined? or null?
                //if (getCurrChoice() == undefined) console.log("contact.js:149");
                //else if (getCurrChoice() == null) console.log("contact.js:150 null");

                //console.log("selected_answer: " + $("input[type=hidden][name=captcheck_selected_answer]").val());
                // Hmmm... currChoice shows as undefined initially. Even when a choice was made. 
                //var currChoice = $("input[type=hidden][name=captcheck_selected_answer]").val();
            
                $('#contact-form').find('.messages').html(loadingBox);
                //const currChoice = getCurrChoice();
                //console.log("contact.js:157 captcheck currChoice on entering: " + currChoice);

                // if currChoice still unavailable after 5 seconds, show timeoutBox
                const myto = setTimeout(() => {
                    //const currChoice2 = getCurrChoice();
                    //console.log("contact.js:163 currChoice is now: " + currChoice2);
                    //console.log("contact.js:159 still no currChoice, issuing timeoutBox");
                    $('#contact-form').find('.messages').html(timeoutBox);    
                    return null;
                }, 5000);

                /* SEE OLD ALERT USAGE HERE THAT WROTE TO messages AT BOTTOM OF THIS PAGE */
            
                // POST values in the background the the php script
                $.ajax({
                    type: "POST",
                    url: 'contact.php',
                    enctype: 'multipart/form-data',
                    data: $(this).serialize(),
                    success: function (data) {
                        console.log("contact.js:227 success called in ajax (can still be danger or success alert)");
                        clearTimeout(myto); // Cancel the timeout ajax failed msg
                        console.log("contact.js:228 data is console.dir'ed below:"); // currChoice STILL undef
                      console.dir(data);// this is abbreviating!
                      console.log(data);
                      /* Problem here is that it's spitting out
                      "<br /> arrow <b>Notice</b> Undefined index: captcheck_selected_answer in 
                      <b>/home/rkmasonry/public_html/contact.php</b> on line <b>1</br><br />..."
                      */
                      $('#contact-form').find('.messages').html(successBox);
                      console.log("contact.js:231 should have just spit out successBox....");
                        const animateSend = setTimeout(() => {
                          if (data.type === 'danger') {
                            console.log("contact.js:234 data.type is danger.");
                                $('#contact-form').find('.messages').html(badCaptchaBox);
                            }
                          else if (data.type === 'success') {
                                console.log("contact.js:239 data.type is success.")
                                $('.circle-loader').toggleClass('load-complete');
                                $('.checkmark').toggle();
                                $('#sentButton').text("Sent!");
                                $('#submit_button').hide('slow');
                                $('#captcheck_container').hide('slow');
                                // empty the form
                                $('#contact-form')[0].reset();
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
                            console.log("line 256 in contact.js")
                            // inject the alert to .messages div in our form
                            $('#contact-form').find('.messages').html(alertBox);
                            $('#submit_button').hide('slow');
                            $('#captcheck_container').hide('slow');
                            // empty the form
                            $('#contact-form')[0].reset();
                        }
                    }
                });
                return false;
            }
        })
});

                // format of sessioncode: 161007e8c7d518107a0b7aecd7b7895e7e20f6062f468b23869.23421285

                // OLD Alert from line 167 or so
                /*if (!currChoice) {
                    console.log("no captcheck choice made? Display loading widget"); 
                    // let's compose Bootstrap loading alert box HTML
                    var loadingAlertBox = '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                        "You must complete the Captcha challenge below!" + '</div>';
                    // inject the alert to .messages div in our form
                    $('#contact-form').find('.messages').html(loadingAlertBox);
                    // this alert would stay up until ajax call returns anyway
                } //end if*/
