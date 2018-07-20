$( function() {
    
    var array = ["2018-07-24"];

    $('#calendar').datepicker({
        minDate:0,
        beforeShowDay: function(date){
            var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            return [array.indexOf(string) == -1];
            
        },
        onSelect: function(dateText, inst) { 
        var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth() + 1,              
            year =  date.getFullYear();
            console.log(day + '-' + month + '-' + year);
        }
    });
  
    $("#cities").change(function() {
      if ($(this).data('options') === undefined) {
        $(this).data('options', $('#hotels option').clone());
        $('#hotels').prop('disabled', false);
      }
        else if($(this).data('options') === 'Choose city'){
            $('#hotels').prop('disabled', true);
        }
      var id = $(this).val();
      var options = $(this).data('options').filter('[value=' + id + ']');
      $('#hotels').html(options);
    });

    $(".book").click(function(){
        var email = $('input').val();
        var city = $('#cities option:selected').text();
        var hotel = $('#hotels option:selected').text();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test(email)){
               $('.email_validation').hide();
                if(city === 'Choose city'){
                    $('#cities').css('border','1px solid red');
                
                    $('#cities').change(function() {
                        if ($(this).val() != 0) {
                            $('#cities').css('border','none');
                        }
                    });
                }
                if(hotel != 'And hotel'){
                        console.log(email+", "+city+", "+hotel);
                }
               
            }
            else {
                $('.email_validation').show();
            }
    });
});




