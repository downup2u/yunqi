Template.useraddress.events({
  'submit form': function(event) {
     event.preventDefault();
	   var address= $('#address').val();
	   var contactname= $('#contactname').val();
	   var contacttel= $('#contacttel').val();
     console.log("address:"+address + ",contactname:" + contactname + ",contacttel:" + contacttel);
  },
	
});