
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var mean_radius = $('.validate-input input[name="mean_radius"]');
    var mean_texture = $('.validate-input input[name="mean_texture"]');
    var mean_perimeter = $('.validate-input input[name="mean_perimeter"]');
    var mean_area = $('.validate-input input[name="mean_area"]');
    var mean_smoothness = $('.validate-input input[name="mean_smoothness"]');

    $('.validate-form').on('submit',function(){
        var check = true;

        if($(mean_radius).val().trim().match(/^([0-9_\-\.]+)$/) == null){
            showValidate(mean_radius);
            check=false;
        }

        if($(mean_texture).val().trim().match(/^([0-9_\-\.]+)$/) == null){
            showValidate(mean_texture);
            check=false;
        }

        if($(mean_perimeter).val().trim().match(/^([0-9_\-\.]+)$/) == null){
            showValidate(mean_perimeter);
            check=false;
        }

        if($(mean_area).val().trim().match(/^([0-9_\-\.]+)$/) == null){
            showValidate(mean_area);
            check=false;
        }

        if($(mean_smoothness).val().trim().match(/^([0-9_\-\.]+)$/) == null){
            showValidate(mean_smoothness);
            check=false;
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);