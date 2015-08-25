

Meteor.startup(function(){
    console.log("start up");
    if(Meteor.isClient){
        console.log("client start...0");
        Meteor.subscribe("userData");
        Meteor.subscribe("redpackage");
        
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
    
    //系统红包
    var systemredpackage = {
        title:'这是个测试红包',
        systemuserid:'0',
        amountcount:10,
        leftcount:10,
        money:10,
        createtime:'2015-08-25 13:24:21',
        starttime:'2015-08-25 00:00:00',
        endtime:'2015-08-30 13:24:21',
    };
    if(SystemRedPackages.find().count() === 0){
        SystemRedPackages.insert(systemredpackage);
    }
    
    //发布用户数据
    Meteor.publish("userData", function () {
        if (this.userId) {
            return Meteor.users.find({_id: this.userId});
        } else {
            this.ready();
        }
     });
     //发布红包
     Meteor.publish("redpackage", function () {
        return SystemRedPackages.find();
     });
     
 }
});