$(document).ready(function () {
    $('#userSignInput').keyup(function () {
        var inputLength = $(this).val().length;

        $('#tilePreview').text($(this).val());

        $('#tiles').text(inputLength);
        updatePrice(inputLength);


        $('#userFontInput').on('click', function (e) {
            var fontChecked = $(this).is(':checked');
            var colorChecked = $('#userColorInput').is(':checked');

            updatePrice($('#userSignInput').val().length, fontChecked, colorChecked);
        })


    });


    $('#userColorInput').on('click', function (e) {
        var colorChecked = $(this).is(':checked');
        var fontChecked = $('#userFontInput').is(':checked');

        updatePrice($('#userSignInput').val().length, fontChecked, colorChecked);
    });


    $('#confirmOrder').on('click', function (e) {
        event.preventDefault();


        $('#priceCheck').animate({
            right: '0px'
        }, 250);

    }); //Conform Order Closing Tag



    //Gathering the data needed to send to my pricing function

    function updatePrice(signLength, fontUpgrade, colorUpgrade) {
        var costPerTile = 5;

        //Computation booleans that total the cost based on upgrades
        if (fontUpgrade) {
            costPerTile = 6;
            $('#tilePreview').css('font-family', 'openSansCond');
        } else {
            costPerTile = 5;
            $('#tilePreview').css('font-family', '');
        }

        if (colorUpgrade) {
            colorCost = 5;
            $('#tilePreview').css('color', 'green');
        } else {
            colorCost = 0;
            $('#tilePreview').css('color', 'white');
        }

        var subTotal = signLength * costPerTile + colorCost;
        var shipping = 7;

        if (signLength != 0) {
            shipping = 7;
        } else {
            shipping = 0;
        }

        var grandTotal = subTotal + shipping;

        $('#subTotal').text('$' + subTotal);
        $('#shipping').text('$' + shipping);
        $('#grandTotal').text('$' + grandTotal);

        return grandTotal;
    }


    $('#priceYes').on('click', function (e) {

        $('#priceCheck').animate({
            right: '-700px'
        }, 250);

        $('#userSignInput').val('');

        $('#userFontInput').prop('checked', false);

        $('#userColorInput').prop('checked', false);
        location.reload();

    });

    $('#priceNo').on('click', function (e) {

        $('#priceCheck').animate({
            right: '-700px'
        }, 250);
    });

});
