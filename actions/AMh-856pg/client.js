function(properties, context) {


  //Load any data 



  //Do the operation
    
    window.onbeforeunload = null;

    if (properties.sandbox_ou_live === 'Sandbox')
    	
    {
        
    	document.location.href = 'https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=' + properties.codigo_checkout;
        
	}
    
    else
        
    {
        document.location.href = 'https://pagseguro.uol.com.br/v2/checkout/payment.html?code=' + properties.codigo_checkout; 
            
    }
}