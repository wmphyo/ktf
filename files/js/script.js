/* global $*/

//https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
//https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object

$(function (){    
    $('#newacc').hover(function(e){
        $('.loginpnl').addClass('hide');
        $('.registerpnl').removeClass('hide');
    });
    
    $('#oldacc').hover(function(e){
        $('.registerpnl').addClass('hide');
        $('.loginpnl').removeClass('hide');
    });
});

