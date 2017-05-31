$(document).ready(function() {
    //trigger upload
    $('#upload-file-one, #upload-file-one-mob, #add-doc-type-one, #add-doc-type-one-mob').click(function() {
        if (this.id == 'upload-file-one' || this.id == 'add-doc-type-one') {
            $('#browse-upload-one').trigger('click');
        } else if (this.id == 'upload-file-one-mob' || this.id == 'add-doc-type-one-mob') {
            $('#browse-upload-one-mob').trigger('click');
        }
        return false;
    });
    $('#upload-file-two, #upload-file-two-mob, #add-doc-type-two, #add-doc-type-two-mob').click(function() {
        if (this.id == 'upload-file-two' || this.id == 'add-doc-type-two') {
            $('#browse-upload-two').trigger('click');
        } else if (this.id == 'upload-file-two-mob' || this.id == 'add-doc-type-two-mob') {
            $('#browse-upload-two-mob').trigger('click');
        }
        return false;
    });
    $('#upload-file-three, #upload-file-three-mob, #add-doc-type-three, #add-doc-type-three-mob').click(function() {
        if (this.id == 'upload-file-three' || this.id == 'add-doc-type-three') {
            $('#browse-upload-three').trigger('click');
        } else if (this.id == 'upload-file-three-mob' || this.id == 'add-doc-type-three-mob') {
            $('#browse-upload-three-mob').trigger('click');
        }
        return false;
    });
    $('#upload-file-four, #upload-file-four-mob, #add-doc-type-four, #add-doc-type-four-mob').click(function() {
        if (this.id == 'upload-file-four' || this.id == 'add-doc-type-four') {
            $('#browse-upload-four').trigger('click');
        } else if (this.id == 'upload-file-four-mob' || this.id == 'add-doc-type-four-mob') {
            $('#browse-upload-four-mob').trigger('click');
        }
        return false;
    });
    $('#upload-file-five, #upload-file-five-mob, #add-doc-type-five, #add-doc-type-five-mob').click(function() {
        if (this.id == 'upload-file-five' || this.id == 'add-doc-type-five') {
            $('#browse-upload-five').trigger('click');
        } else if (this.id == 'upload-file-five-mob' || this.id == 'add-doc-type-five-mob') {
            $('#browse-upload-five-mob').trigger('click');
        }
        return false;
    });

    //remove
    $('.remove-doc').on('click', function () {
        var id = $(this).attr("id");
        if ($(this).closest(".doc-type-1").has("[id^='doc-type-1-row-']").length > 0) {
            var name = $("#doc-type-1-row-" + id).html();
            alert(name);
        }else{
            var name = $("#doc-type-2-row-" + id).html();
            alert(name);
        }
    });

    //view document
 /*var fileName = "Documantation.pdf";
    $("btnShow").on('click', function () {
      $("#dialog").dialog({
        modal: true,
        width: 540,
        height: 450,
        buttons: {
          Close: funtion(){
            $(this).dialog('close');
          }
        },
        open: function(){
          var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"500px\" height=\"300px\">";
          object += "If you are unable to view file, you can download from <a href=\"{FileName}\">here</a>";
          object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
          object += "</object>";
          object = object.replace(/{FileName}/g, "Downloads/" + fileName);
          $("#dialog").html(object);
        }
      });
    });
*/

    var current = 1;
    var typeVal = 0;
    var uploadArrayDocTypeOne = [];
    var uploadArrayDocTypeOneMob = [];
    $("#add-doc-type-one, #add-doc-type-one-mob, #add-doc-type-two, #add-doc-type-two-mob").click(function() {
        if(this.id == "add-doc-type-one" || this.id == "add-doc-type-one-mob"){
          typeVal = 1;
        }else if(this.id == "add-doc-type-two" || this.id == "add-doc-type-two-mob"){
          typeVal = 2;
        }
          var previous = (current == 0) ? $("#doc-type-"+typeVal+"-row-1") : $("#doc-type-"+typeVal+"-row-"+current);
          var previousMob = (current == 0) ? $("#doc-type-"+typeVal+"-row-1-mob") : $("#doc-type-"+typeVal+"-row-"+current+"-mob");
          current++;
          var newRowString = '<div id="doc-type-'+typeVal+'-row-'+current+'" class="row doc-type-'+typeVal+'">'+
            '<div class="col l1 m1 s1 mobile-no-padding">'+
            '<div class="row">'+
            '<div class="col l12 m12 s12 column-height">'+
            '<div class="col l12 m12 s12 padding-left-md mobile-no-padding">'+
            '<div class="text-left">'+
            '<div id="" class="text-center success-tick-cont tick-one hide">'+
              '<div class="fa fa-check success-ticked"></div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+

            '<div class="col l11 m11 s11 mobile-no-padding successful-upload-one hide">'+
              '<div class="row">'+
                '<div class="col l12 m12 s12 column-height">'+
                '<div class="col l12 m12 s12 margin-left-md">'+
                '<div class="text-left">'+
                  '<a id="name-doc-one" class="name-doc hide gray-text">filename_some documents.pdf</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
              '</div>'+

              '<div class="row">'+
                '<div class="col l10 m8 s8 column-height margin-left-md">'+

                  '<div class="col l1 m4 s6">'+
                  '<div class="text-left">'+
                    '<a id="view-doc-one" class="view-doc view-or-change-one hide turquoise-text">VIEW</a>'+
                  '</div>'+
                  '</div>'+

                  '<div class="col l1 m8 s6">'+
                  '<div class="text-left">'+
                    '<a id="remove-doc-one" class="remove-doc view-or-change-one hide turquoise-text">REMOVE</a>'+
                  '</div>'+
                  '</div>'+

                '</div>'+
              '</div>'+

            '</div>'+
          '</div>';

          var newRowStringMob = '<div id="doc-type-'+typeVal+'-row-'+current+'-mob" class="row doc-type-'+typeVal+'">'+
            '<div class="col l1 m1 s1 mobile-no-padding">'+
            '<div class="row">'+
            '<div class="col l12 m12 s12 column-height">'+
            '<div class="col l12 m12 s12 padding-left-md mobile-no-padding">'+
            '<div class="text-left">'+
            '<div id="" class="text-center success-tick-cont tick-one hide">'+
              '<div class="fa fa-check success-ticked"></div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+

            '<div class="col l11 m11 s11 mobile-no-padding successful-upload-one-mob hide">'+
              '<div class="row">'+
                '<div class="col l12 m12 s12 column-height">'+
                '<div class="col l12 m12 s12 margin-left-md">'+
                '<div class="text-left">'+
                  '<a id="name-doc-one-mob" class="name-doc hide gray-text">filename_some documents.pdf</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
              '</div>'+

              '<div class="row">'+
                '<div class="col l10 m8 s8 column-height margin-left-md">'+

                  '<div class="col l1 m4 s6">'+
                  '<div class="text-left">'+
                    '<a id="view-doc-one-mob" class="view-doc view-or-change-mob-one hide turquoise-text">VIEW</a>'+
                  '</div>'+
                  '</div>'+

                  '<div class="col l1 m8 s6">'+
                  '<div class="text-left">'+
                    '<a id="remove-doc-one-mob" class="remove-doc view-or-change-mob-one hide turquoise-text">REMOVE</a>'+
                  '</div>'+
                  '</div>'+

                '</div>'+
              '</div>'+

            '</div>'+
          '</div>';
          $(newRowString).insertAfter(previous);
          $(newRowStringMob).insertAfter(previousMob);
    });
    var countChange = 0;
    //animate and show/hide
    $("#browse-upload-one, #browse-upload-one-mob, #browse-upload-two, #browse-upload-two-mob, #browse-upload-three, #browse-upload-three-mob, #browse-upload-four, #browse-upload-four-mob, #browse-upload-five, #browse-upload-five-mob").change(function() {
        var str;
        if(this.id == "browse-upload-one" || this.id == "browse-upload-two" || this.id == "browse-upload-three" || this.id == "browse-upload-four" || this.id == "browse-upload-five"){
          var tmp = this.id.split("-");
          str = String(tmp.pop());
        }else{
          if(this.id == "browse-upload-one-mob"){
            str = "one";
          }else if (this.id == "browse-upload-two-mob"){
            str = "two";
          }else if (this.id == "browse-upload-three-mob") {
            str = "three";
          }else if (this.id == "browse-upload-four-mob"){
            str = "four";
          }else if (this.id == "browse-upload-five-mob"){
            str = "five";
          }
        }

        if(this.files.length == 0)
        {
            //alert('cancel was pressed');
        }
        else
        {
            $('#wrapper-'+str+',#wrapper-'+str+'-mob').removeClass("clicked");
            $('#wrapper-'+str+',#wrapper-'+str+'-mob').removeClass("success");
            $('.view-or-change-'+str+',.view-or-change-mob-'+str+',#name-doc-'+str+',#name-doc-'+str+'-mob,#card-panel-footer-'+str+',#card-panel-footer-'+str+'-mob, .tick-'+str+', .successful-upload-'+str+', .successful-upload-'+str+'-mob').addClass('hide').fadeOut(1000);
            $('#wrapper-'+str+' .upload-file,#wrapper-'+str+'-mob .upload-file').removeClass("hide");
            setTimeout((function() {
              $('#wrapper-'+str+',#wrapper-'+str+'-mob').addClass("clicked");
              $('#header-'+str+',#header-'+str+'-mob').fadeOut();
              $('.view-or-change-'+str+',.view-or-change-mob-'+str).addClass('hide').fadeOut(1000);
            }), 0.1);

            setTimeout((function() {
                $('.view-or-change-'+str+',.view-or-change-mob-'+str+',#name-doc-'+str+',#name-doc-'+str+'-mob,#card-panel-footer-'+str+',#card-panel-footer-'+str+'-mob, .tick-'+str+', .successful-upload-'+str+', .successful-upload-'+str+'-mob').removeClass('hide').fadeIn(1000);
                $('#card-'+str+' .collapse-card__heading').trigger('click');
                $('#wrapper-'+str+' .upload-file,#wrapper-'+str+'-mob .upload-file').addClass("hide");
                $('#wrapper-'+str+',#wrapper-'+str+'-mob').addClass("success");
                $('#header-'+str+',#header-'+str+'-mob').fadeIn();
                //$('#upload-file-'+str+' .success-tick,#upload-file-'+str+'-mob .success-tick').css("display", "block");
                $('#upload-file-'+str+', #upload-file-'+str+'-mob').css("pointer-events", "none");
                $('#bottom_section .btn-orange').removeClass('hide').fadeIn(1000);

                uploadArrayDocTypeOne[countChange] = $('#browse-upload-'+str).val();
                uploadArrayDocTypeOneMob[countChange] = $('#browse-upload-'+str+'-mob').val();
                countChange++;
                for (var i = 0; i < uploadArrayDocTypeOne.length; i++) {
                  $('#doc-type-1-row-'+countChange+' #name-doc-'+str).text(uploadArrayDocTypeOne[i]);
                }
                for (var i = 0; i < uploadArrayDocTypeOneMob.length; i++) {
                  $('#doc-type-1-row-'+countChange+'-mob #name-doc-'+str+'-mob').text(uploadArrayDocTypeOneMob[i]);
                }
            }), 2600);
        }

        if (this.id == 'browse-upload-one' || this.id == 'browse-upload-one-mob') {
          $('#upload-page #card-two, #upload-page #card-two-mob, #upload-page #separator').addClass('hide').fadeOut(1000);
        }

        if (this.id == 'browse-upload-two' || this.id == 'browse-upload-three' || this.id == 'browse-upload-two-mob' || this.id == 'browse-upload-three-mob') {
          $('#upload-page #card-one, #upload-page #card-one-mob, #upload-page #separator').addClass('hide').fadeOut(1000);
        }
    });

    });
