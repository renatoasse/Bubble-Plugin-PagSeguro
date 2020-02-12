function(instance, context) {

PagSeguroDirectPayment.onSenderHashReady(function(response){
    if(response.status == 'error') {
        console.log(response.message);
        return false;
    }
    var hash = response.senderHash; //Hash estará disponível nesta variável.
    instance.publishState("pagsegurohash", hash);
});
    
    
          
}