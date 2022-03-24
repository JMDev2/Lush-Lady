$(document).ready(function () {

    //toggle what to do.

    // Blowdry
    $('#blowdry').click(function () {
        $('#blowdry-content').show(function () {
           $('#blowdry').hide('slow');
        });
    });
    
    $('#blowdry-content').click(function () {
        $('#blowdry').show(function () {
            $('#blowdry-content').hide('slow');
        });
    });

    // Swimming
    $('#swimming').click(function () {
        $('#swimming-content').show(function () {
            $('#swimming').hide('slow');
        });
    });
    $('#swimming-content').click(function () {
        $('#swimming').show(function () {
            $('#swimming-content').hide('slow');
        });
    });

    // change
    $('#change').click(function () {
        $('#change-content').show(function () {
            $('#change').hide('slow');
        });
    });
    $('#change-content').click(function () {
        $('#change').show(function () {
            $('#change-content').hide('slow');
        });
    });


    // split
    $('#split').click(function () {
        $('#split-content').show(function () {
            $('#split').hide('slow');
        });
    });
    $('#split-content').click(function () {
        $('#split').show(function () {
            $('#split-content').hide('slow');
        });
    });


    // Curls
    $('#curls').click(function () {
        $('#curls-content').show(function () {
            $('#curls').hide('slow');
        });
    });
    $('#curls-content').click(function () {
        $('#curls').show(function () {
            $('#curls-content').hide('slow');
        });
    });


    // Dandruff
    $('#dandruff').click(function () {
        $('#dandruff-content').show(function () {
            $('#dandruff').hide('slow');
        });
    });
    $('#dandruff-content').click(function () {
        $('#dandruff').show(function () {
            $('#dandruff-content').hide('slow');
        });
    });

})