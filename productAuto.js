(function (){   
  setTimeout(function(){
    var imagen=skuJson_0.skus[0].image.slice(0,skuJson_0.skus[0].image.indexOf("?"));
    
    var precio =skuJson_0.skus[0].bestPrice.toString().slice(0,-2)
    var data = {"@context": "https://schema.org/","@type": "Product","name": skuJson_0.name,"image": imagen,"description":$('.productDescriptionShort').text(), "sku": skuJson_0.skus[0].sku, "mpn": skuJson_0.productId, "brand": {"@type": "Thing", "name": "Vélez"}, "offers": {"@type": "Offer", "itemCondition": "https://schema.org/UsedCondition", "availability" : "http://schema.org/InStock", "priceCurrency": "COP","price":precio, "url" : "https://www.velez.com.co/ofertas"}, "url" : window.location.href}  
    var script = document.createElement('script');
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data);
    document.getElementsByTagName('head')[0].appendChild(script);

  },100)
}) (document);


(function (){   
  setTimeout(function(){
    
    var imagen=skuJson_0.skus[0].image.slice(0,skuJson_0.skus[0].image.indexOf("?")),
    availability="http://schema.org/OutOfStock",
    precio= '0'
    if(skuJson_0.skus[0].listPrice!=0){
        var antes=skuJson_0.skus[0].bestPrice.toString().slice(0,-2),
        despues=skuJson_0.skus[0].bestPrice.toString().slice(-2),
        precio =antes+'.'+despues,
        availability="http://schema.org/InStock"
    }
    var data = {"@context": "https://schema.org/","@type": "Product","name": skuJson_0.name,"image": imagen,"description":$('.productDescriptionShort').text(), "sku": skuJson_0.skus[0].sku, "mpn": skuJson_0.productId, "brand": {"@type": "Thing", "name": "Kutiz Beauté"}, "offers": {"@type": "Offer", "itemCondition": "https://schema.org/UsedCondition", "availability" : availability, "priceCurrency": "BRL","price":precio, "url" : "https://www.kutiz.com.br/especiais/promocoes"}, "url" : window.location.href}  
    var script = document.createElement('script');
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data);
    document.getElementsByTagName('head')[0].appendChild(script);    

  },100)
}) (document);
