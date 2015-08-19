// On Client and Server
//Players = new Meteor.Collection('players');
// name is the field of the documents to search over
Order.initEasySearch('productname');

EasySearch.createSearchIndex('order', {
  field: [
    'orderno',
  ],
  collection: Meteor.users,
  use: 'mongo-db',
  limit: 20,
  query: function (searchString, opts) {
    // Default query that is used for searching
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    // Make the emails searchable
    query.$or.push({
      emails: {
        $elemMatch: {
          orderno: { '$regex' : '.*' + searchString + '.*', '$options' : 'i' }
        }
      }
    });

    return query;
  }
});