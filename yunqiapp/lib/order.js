Order = new Mongo.Collection('order');

if(Meteor.isClient){
	Template.neworderForm.events({
		'neworder':function(){
      		event.preventDefault();
      		//var playerNameVar = event.target.playerName.value;
			var qmemo = event.target.qmemo.value;
			var qwanttime = event.target.qwanttime.value;
			var currentUserId = Meteor.userId();
			var orderData = {
				createuser:currentUserId,
				qmemo:qmemo,
				qwanttime:qwanttime,
			};
      		Meteor.call('insertOrder', orderData);
    }
  });
};


if(Meteor.isServer){

  Meteor.methods({
    'insertOrder': function(orderData){
      var currentUserId = Meteor.userId();
      Order.insert(orderData);
    }
  });
  };