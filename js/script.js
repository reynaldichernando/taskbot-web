window.addEventListener('DOMContentLoaded', function(){
    let showQR = true;
    let left = '&lsaquo;'; // <
    let right = '&rsaquo;';// >

    let qr = document.querySelector('#qr');
    document.querySelector('#toggle-qr p').addEventListener('click', function(event){
        if(showQR){
            qr.style.display = 'none';
            showQR = false;
            event.target.innerHTML = left;
        }
        else {
            qr.style.display = 'flex';
            showQR = true;
            event.target.innerHTML = right;
        }
    })

    document.querySelector('input[type="submit"]').addEventListener('click', function(event){
        event.preventDefault();

        let success = true;
        let name = document.querySelector('#txtName').value;
        let email = document.querySelector('#txtEmail').value;
        let message = document.querySelector('#txtMessage').value;

        if(name == null || name == ''){
            success = false;
            document.querySelector('#error-msg').innerHTML = 'Name cannot be empty!';
        }
        else if (email == null || email == '') {
            success = false;
            document.querySelector('#error-msg').innerHTML = 'Email cannot be empty!';
        }
        else if (message == null || message == '') {
            success = false;
            document.querySelector('#error-msg').innerHTML = 'Message cannot be empty!';
        }

        if(success) {
            alert('Your message has been sent!');
            document.querySelector('#txtName').value = '';
            document.querySelector('#txtEmail').value = '';
            document.querySelector('#txtMessage').value = '';
        }

    });
});