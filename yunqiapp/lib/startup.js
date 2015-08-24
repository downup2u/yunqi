

Meteor.startup(function(){
    console.log("start up");
    if(Meteor.isClient){
        console.log("client start...0");
        Meteor.subscribe("userAddress");
     //AutoForm.setDefaultTemplate("plain");
   //  AutoForm.setDefaultTemplateForType('afFieldInput', 'plain');
       // AutoForm.setDefaultTemplate('nothing');
    //AutoForm.setDefaultTemplate('bootstrap3');
     //AutoForm.setDefaultTemplate("semanticUI");
    }
    
    if(Meteor.isServer){
     var productlistdb = 
          [ 
          {
              productname:'液化气（小）',
              productprice:30,
              stockqty:100,
          
           },
          {
              productname:'液化气（中）',
              productprice:100  ,
              stockqty:100,
            
          },
          {
              productname:'液化气（大）',
              productprice:440,
              stockqty:100,
         
          },
          {
              productname:'二甲醚（小）',
              productprice:130.00 ,
              stockqty:100,
            
         },
          {
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
    
    Meteor.publish("userAddress", function () {
        if (this.userId) {
            return Meteor.users.find({_id: this.userId});
        } else {
            this.ready();
        }
     });
 }
});