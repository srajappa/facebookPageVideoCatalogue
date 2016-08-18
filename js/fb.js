$(window).load(function(){
        $('#basicModal').modal('show');
    });

    $(window).scroll(function() {
      if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
          //alert("bottom!");
          //Add the videos dynamicallys
      }
   });

   var itr = 0;
    function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response.authResponse.accessToken);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        //testAPI();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
      }
    }


    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '630325513798928',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.5' // use graph api version 2.5
      });

      // Now that we've initialized the JavaScript SDK, we call
      // FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.

      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });

    };


    function fb_login(){
        FB.login(function(response) {

            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                //console.log(response); // dump complete info
                var aToken = response.authResponse.accessToken; //get access token
                var user_id = response.authResponse.userID; //get FB UID
                //console.log(response.authResponse.accessToken);



                FB.api('/8245623462/videos',
                'get',
                {access_token: aToken, fields: 'title,description,length,embed_html,is_instagram_eligible'},
                function(response) {

                  if (response && !response.error) {
                    /* handle the result */
                    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                    //console.log(JSON.stringify(response));
                    $('#basicModal').modal('hide');
                    //alert("HI");
                    //console.log(response.authResponse.accessToken);

                    console.log(response.data[0].title +"-------------- here is one data");

                    //diVo = $("<div>"+response.data[0].embed_html+"</div>");

                    //RENDERING ON page, maybe I can call a function

                    // var link0 = $(response.data[0].embed_html);
                    // link0.attr('width',800);
                    // link0.attr('height',400);
                    // $("#video-block").html(link0);
                    // $('#info-block').html(response.data[0].title);
                    //getFrames(response);
                    var iframeLink =[];
                    for(var i=0; i < response.data.length; i++){
                      iframeLink.push(response.data[i].embed_html);
                    }
                    getFrames(response,iframeLink);
                    // for(var i = 0; i<=response.data.length; i++){
                    //   // console.log(response.data[i]);
                    //   iframeLink = $(response.data[i].embed_html);
                    //   iframeLink.attr('width',800);
                    //   iframeLink.attr('height',400);
                    //   console.log(iframeLink);
                    //   $('#addr'+(i)).html("<div class = \"col-lg-6 vidOne\" id=\"info-block\">"+ response.data[i].title +"</div> <div class = \"col-lg-6 infoOne\" id=\"video-block\">"+iframeLink+"</div>");
                    //
                    //   $('#allInfo').append('<div class = "row" id="addr'+(i+1)+'"></div>');
                    // }
                  }
                });

                // FB.api('/VID_ID/likes');
                // FB.api('/VID_ID/comments');

            } else {
                //user hit cancel button
                console.log('User cancelled login or did not fully authorize.');

            }
        }, {
            scope: 'public_profile,email'
        });
    }

    function getFrames(response, iframeLink){
      for(var i = 0; i<response.data.length; i++){
        var link0 = iframeLink[i];
        //console.log(link0);
        //Adding the information here
        //CREATE Seprate strings and then combine them to .html file
        var thingy = "<table class=\"table table-bordered table-hover\"><thead><tr><th class=\"text-center\">Param</th><th>Values</th></tr></thead><tbody>";

        console.log("XJKLSJJLJDLSJJSDJJDSLKJDSLKJLDSJLKSDJFJL");
        //console.log(response.data[i]);
        for(var j in response.data[i]){
          if(j==='embed_html') continue;
          //console.log(response.data[i].j);
          thingy+="<tr><td>"+j+"</td><td>"+response.data[i][j]+"</td></tr>";
        }

        thingy+="</tbody></table>";

        $('#addr'+(i)).html("<div class = \"col-lg-8 vidOne\" id=\"info-block\">"+ thingy +"</div> <div class = \"col-lg-4 infoOne\" id=\"video-block\">"+link0+"</div>");

        $('#allInfo').append('<div class = "row" id="addr'+(i+1)+'"></div>');
      }
    }

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
