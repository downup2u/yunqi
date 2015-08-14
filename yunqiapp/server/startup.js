

Meteor.startup(function(){
     var productlistdb = 
          [ 
          {
              _id:'1',
              productname:'液化气（小）',
              productprice:30,
              stockqty:100,
          
           },
          {
              _id:'2',
              productname:'液化气（中）',
              productprice:100  ,
              stockqty:100,
            
          },
          {
              _id:'3',
              productname:'液化气（大）',
              productprice:440,
              stockqty:100,
         
          },
          {
              _id:'4',
              productname:'二甲醚（小）',
              productprice:130.00 ,
              stockqty:100,
            
         },
          {
              _id:'5',
              productname:'二甲醚（中）',
              productprice:130.00 ,
               stockqty:100,
       
                                      }];
     
    // Products.remove();      
    if(Products.find().count() === 0){
        for (var i in productlistdb) {
            Products.insert(productlistdb[i]);
        }

    }
    // var productlistdb2 = Products.find();
    // productlistdb2.forEach(function(product){
               
    //              console.log( "cur products name:" +product.productname);  
    //              product.qty = 0;
             
    // });

});