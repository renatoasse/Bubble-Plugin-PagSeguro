function(instance, properties, context) {


  //Load any data 



  //Do the operation

    
    // A session ID, necessary in some actions. Grab this from this API's data source.

PagSeguroDirectPayment.setSessionId(properties.session_id);

PagSeguroDirectPayment.getBrand({
    cardBin: properties.card_number.substring(0, 6),
    success: function(response) {
      //bandeira encontrada
        instance.data.cardBrand = response.brand.name;

    },
    error: function(response) {

    },
    complete: function(response) {
      //tratamento comum para todas chamadas

    }
});


PagSeguroDirectPayment.createCardToken({
   cardNumber: properties.card_number, // Número do cartão de crédito
   brand: instance.data.cardBrand, // Bandeira do cartão
   cvv: properties.cvv, // CVV do cartão
   expirationMonth: properties.expiration_month, // Mês da expiração do cartão
   expirationYear: properties.expiration_year, // Ano da expiração do cartão, é necessário os 4 dígitos.
   success: function(response) {
		instance.publishState("credit_card_token", response.card.token);
        instance.triggerEvent("credit_card_token_generated", function(err){console.log(err)})
        // Retorna o cartão tokenizado.
   },
   error: function(response) {
		    // Callback para chamadas que falharam.

   },
   complete: function(response) {
        // Callback para todas chamadas.

   }
});



}