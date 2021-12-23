$('#mc-embedded-subscribe').click(function(){
    
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $('#mce-EMAIL').val();
    console.log(email);
    var valid = emailReg.test(email);

    if(!!email && valid){
        
        var currentBtn = $(this);
        $(currentBtn).text('Loading...');
        $(currentBtn).prop('disabled', true);

        $.ajax({
            url: 'https://smarteemailsubscription20211223151923.azurewebsites.net/api/SubscribeToEmail',
            type: 'POST',
            data: email,
            success: function(){
                $(currentBtn).prop('disabled', false);
                $(currentBtn).text('Subscribe');             
                alert("Email subscription successful");
            },
            error: function(){
                $(currentBtn).prop('disabled', false);
                $(currentBtn).text('Subscribe');
                alert("Error occurred while subscribing to email");
            }
        })
    }else{
        alert("Invalid Email Address");
    }    
})