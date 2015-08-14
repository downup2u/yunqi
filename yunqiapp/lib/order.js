Order = new Mongo.Collection('order');

if(Meteor.isClient){
	
};


if(Meteor.isServer){

	Meteor.methods({
		'insertOrder': function(orderData){
		var currentUserId = Meteor.userId();
		Order.insert(orderData);
		}
	});
	
	
};