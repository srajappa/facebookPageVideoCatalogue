$(window).load(function(){
        $('#basicModal').modal('show');
    });

    $(window).scroll(function() {
      if($(window).scrollTop() + $(window).height() > $(document).height() - 60 && itr%25==0) {
          alert("bottom!");
          //Add the videos dynamically
          console.log(JSON.stringify(globalResponse));      //OK globalResponse has in it
          //console.log("~~~~~~~~~~"+globalResponse["next"]);
      }
   });

   var itr = 0;
   var globalResponse;
    function statusChangeCallback(response) {
      //console.log('statusChangeCallback');
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

                var rio2016 = 1102184159816462;
                var nba = 8245623462;
                var tasty = 1614251518827491;
                var withinTemptation = 7185342985;
                var coldplay = 15253175252;


                processPageIDs(response, aToken, nba);
                //processPageIDs(response, aToken, rio2016);




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

    function getFrames(response){
      for(var i = 0; i<response.data.length; i++){

        //Adding the information here
        //CREATE Seprate strings and then combine them to .html class
        // var thingy = "<table class=\"table table-bordered table-hover\"><thead><tr><th class=\"text-center\">Param</th><th>Values</th></tr></thead><tbody>";
        //
        //
        // for(var j in response.data[i]){
        //   if(j==='embed_html') continue;
        //   thingy+="<tr><td>"+j+"</td><td>"+response.data[i][j]+"</td></tr>";
        // }
        //
        // thingy+="</tbody></table>";
        //
        // $('#addr'+(itr++)).html("<div class = \"col-lg-8 vidOne\" id=\"info-block\">"+ thingy +"</div> <div class = \"col-lg-4 infoOne\" id=\"video-block\">"+response.data[i]["embed_html"]+"</div>");
        //
        // $('#allInfo').append('<div class = "row" id="addr'+(itr)+'"></div>');


        var thingy = "<article class=\"eachContent\" id=\"video0\"><header class=\"contentHeader\"><p><a href=\"https://www.facebook.com/"+response.data[i].from.id+"\" target=\"_blank\">"+response.data[i].from.name+"</a></p></header><div class=\"videoContent\" style=\"padding-bottom: 0.907%;\"><div class=\"actualVideo\">"+response.data[i]["embed_html"]+"</div></div><div class=\"metaDataVideo\"><ul class=\"unOrdList\">";

        for(var j in response.data[i]){
          switch(j){
            case 'title':                 thingy+="<li class=\"listValDet\"><strong>Title: </strong>"+response.data[i][j]+"</li>";
                                          break;
            case 'created_time':          var date = new Date(response.data[i][j]);
                                          thingy+="<li class=\"listValDet\"><strong>Published On: </strong>"+date.toLocaleDateString('en-US')+"</li>";
                                          break;
            case 'length':                thingy+="<li class=\"listValDet\"><strong>Length of video: </strong>"+converToHMS(response.data[i]["length"])+" </li>";
                                          //(new Date).clearTime().addSeconds(response.data[i][j]).toString('H:mm:ss')
                                          break;
            case 'is_instagram_eligible': var instShare;
                                          if(response.data[i][j]==true) instShare="✓";
                                          else instShare = "✕";
                                          thingy+="<li class=\"listValDet\"><strong>Instagram shareable: </strong>"+instShare+"</li>";
                                          break;
            case 'embed_html':
                                          break;
            case 'from':
                                          break;
            case 'content_category':      thingy+="<li class=\"listValDet\"><strong>Tag(s): </strong>"+response.data[i][j]+"</li>";
                                          break;
            case 'id':                    thingy+="<li class=\"listValDet\"><strong>Permalink: </strong><a href=\"https://www.facebook.com/"+response.data[i].from.id+"/"+response.data[i].id+"\" target=\"_blank\">LINK</a></li>";
                                          break;
            case 'description':           thingy+="<li class=\"listValDet\"><strong>Description: </strong>"+response.data[i][j]+"</li>";
            default:    break;
          }
        }


        thingy+="</ul>";
        thingy+="<div class=\"row\">";
        thingy+="<div class=\"col-lg-4\" style=\"overflow:hidden\"><strong># of Likes: </strong>"+response.data[i]["likes"]["summary"]["total_count"]+"</div>";
        thingy+="<div class=\"col-lg-4\" style=\"overflow:hidden\"><strong># of Comments: </strong>"+response.data[i]["comments"]["summary"]["total_count"]+"</div>";
        thingy+="<div class=\"col-lg-4\" style=\"overflow:hidden\"><strong># of Reactions: </strong>"+response.data[i]["reactions"]["summary"]["total_count"]+"</div>";
        thingy+="</div>";
        thingy+="</div></article>"
        $('#video'+(itr++)).html(thingy);
        $('#spineFrame').append('<article class="eachContent" id="video'+(itr)+'"></article>');
      }
    }
    //&limit=200
    function processPageIDs(response,aToken, pageID){
      //console.log("first : "+pageID);
      var pageVidString = '/'+pageID+'/videos?fields=created_time,title,description,length,is_instagram_eligible,embed_html,from,content_category,likes.summary(true).limit(0),comments.summary(true).limit(0),reactions.summary(true).limit(0)';
      FB.api(pageVidString,
      // 'get',
      // {access_token: aToken, fields: 'created_time,title,description,length,is_instagram_eligible,embed_html,from,content_category'},
      function(response) {

        if (response && !response.error) {
          /* handle the result */
        //  console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
          //console.log(JSON.stringify(response));
          $('#basicModal').modal('hide');
          //alert("HI");
          //console.log(response.authResponse.accessToken);

          //console.log(response.data[0].title +"-------------- here is one data");


          //RENDERING ON page, maybe I can call a function
          globalResponse = response;
          getFrames(response);

        }
      });
    }

    function converToHMS(seconds){
      hours = Math.floor(seconds / 3600);

      seconds %= 3600;
      minutes = Math.floor(seconds / 60);
      sec = Math.floor(seconds % 60);

      if(hours==0){
        if(minutes==0)
          return sec+" seconds";
        else {
          return minutes+" minutes and "+sec+" seconds";
        }
      }
      return hours+" hours "+minutes+" minutes and "+sec+" seconds";
    }



    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
