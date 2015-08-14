    Template.wyxd.helpers({
      'orderamount':function(){
          var productlistsession = Session.get("productlistsession");
          if(productlistsession == null){
            return 0;
          }
          var amount = 0;
          for( j in productlistsession){
               amount += (productlistsession[j].productprice * productlistsession[j].qty);
          };
          return amount;
      },
         
	});
    
     Template.wyxd.events({  
        'click #btnfinish': function(event, template) {
            // 1. Collect the username and password from the form
         var deliveryaddress = template.find('#deliveryaddress').value;//送气地址
         var contactname = template.find('#contactname').value;//联系人
         var contacttel   = template.find('#contacttel').value;//联系联系电话人  
         var yunqimemo = template.find('#yunqimemo').value;//备注
         //Router.go("/homedetail/wyxd");
         
         console.log("deliveryaddress:" + deliveryaddress);
        console.log("contactname:" + contactname);
        console.log("contacttel:" + contacttel);
        console.log("yunqimemo:" + yunqimemo);
         console.log("click finished");
        }
    
    });