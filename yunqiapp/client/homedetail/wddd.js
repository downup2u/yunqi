  Template.wddd.helpers({
      'curtab':function(){
            console.log("curtab:"+Session.get("curtab"));
            return Session.get("curtab");
      },
 });
 
 
 Template.allorders.helpers({
      'allorders':function(){
         var currentUserId = Meteor.userId();
         var orders = Order.find({createuser:currentUserId});
         console.log("allorders:"+orders.count());
         return orders;
      },
 });
 
  Template.alltobedeliveryorders.helpers({
      'allorders':function(){
         var currentUserId = Meteor.userId();
         var orders = Order.find({createuser:currentUserId,orderstatus:'neworder'});
         console.log("alltobedeliveryorders:"+orders.count());
         return orders;
      },
 });
 
  Template.allclosedorders.helpers({
      'allorders':function(){
         var currentUserId = Meteor.userId();
         var orders = Order.find({createuser:currentUserId,orderstatus:'closed'});
         console.log("allclosedorders:"+orders.count());
         return orders;
      },
 });