Template.neworder.helpers({
  neworderFormSchema: function() {
    return Schema.Order;
  }
});

AutoForm.hooks({
  neworderForm: {
    onSubmit: function (doc) {
      var productlistsession = Session.get("productlistsession");
            if(productlistsession == null){
                productlistsession = [];
            }
            var amount = 0;
            for( j in productlistsession){
                amount += (productlistsession[j].productprice * productlistsession[j].qty);
            };
    

			var currentUserId = Meteor.userId();
			var orderData = {
				createuser:currentUserId,
				contactname:doc.contactname,
				contacttel:doc.contacttel,
				deliveryaddress:doc.deliveryaddress,
				yunqimemo:doc.yunqimemo,
				wanttime:doc.wanttime,
				paytype:doc.paytype,
				paytypestring:"paytypestring",
                orderstatus:'neworder',
                orderstatusstring:'待支付',
                orderamount:amount,
                createtime:new Date(),
                orderproductlists:productlistsession
			};
   		Meteor.call('insertOrder', orderData);
       Router.go('/profile')
      return false
    },
    onSuccess: function (operation, result, template){
      
    },
    onError: function (operation, error, template){
     
        // var vc = AutoForm.getValidationContext("SignInForm");
        
        // if (typeof error.reason === 'string') {
        //   if (error.reason.indexOf('Email already exists') !== -1) {
        //     vc.addInvalidKeys([{name: 'username', type: 'alreadyExists'}]);
        //   } else if (error.reason.indexOf('User not found') !== -1) {
        //     vc.addInvalidKeys([{name: 'username', type: 'userNotFound'}]);
        //   }else{
        //     vc.addInvalidKeys([{name: 'username', type: 'invalidLogin'}]);
        //   }
        // }
     
    }
  }
});
