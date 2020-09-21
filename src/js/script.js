import $ from 'jquery';

const main = () => {
    fetch('https://taskbot-sample.azurewebsites.net/?q=list')
        .then(response => response.json())
        .then(data => {
            const clubListElement = document.querySelector('review-list');
            clubListElement.reviews = data;
        })
        .catch(error => alert(error));


    let showQR = true;
    let left = '&lsaquo;'; // <
    let right = '&rsaquo;';// >

    let qr = $('#qr');
    $('#toggle-qr p').on('click', event => {
        if (showQR) {
            qr.hide();
            showQR = false;
            event.target.innerHTML = left;
        }
        else {
            qr.show();
            showQR = true;
            event.target.innerHTML = right;
        }
    })

    $('input[type="submit"]').on('click', event => {
        event.preventDefault();

        let success = true;
        let name = $('#txtName').val();
        let email = $('#txtEmail').val();
        let message = $('#txtMessage').val();

        if (name == null || name == '') {
            success = false;
            $('#error-msg').html('Name cannot be empty!');
        }
        else if (email == null || email == '') {
            success = false;
            $('#error-msg').html('Email cannot be empty!');
        }
        else if (message == null || message == '') {
            success = false;
            $('#error-msg').html('Message cannot be empty!');
        }

        if (success) {
            alert('Your message has been sent!');
            $('#txtName').val('');
            $('#txtEmail').val('');
            $('#txtMessage').val('');
            $('#error-msg').html('');
        }

    });


}

export default main;