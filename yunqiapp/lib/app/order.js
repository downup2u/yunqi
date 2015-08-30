

EasySearch.createSearchIndex('order', {
  field: [
    'orderno',
  ],
  collection: Orders,
  limit: 20,
  query: function (searchString, opts) {
    console.log(searchString);
    if(searchString.length == 0) {
			searchString = { '$regex' : '.*' + searchString + '.*', '$options' : 'i' };
		}
    // Default query that is used for searching
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
    return query;
  },
  sort: function() {
		return { "createtime": -1 }
	}
});

if(Meteor.isClient){
	
};


if(Meteor.isServer){

	Meteor.methods({
		'insertOrder': function(orderData){
		//var currentUserId = Meteor.userId();
  	Orders.insert(orderData);
		}
	});
	
	
};