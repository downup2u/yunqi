Template.addredpackage.events({
    "click .btnaddredpackage": function () {
           console.log("click btn add redpackage");
          // event.preventDefault();
          // var productname= $('#productname').val();
          // var productprice= $('#productprice').val();
          // var stockqty= $('#stockqty').val();
          // var productDoc = {
          //     productname:productname,
          //     productprice:productprice,
          //     stockqty:stockqty,
          //     createtime:moment().format('YYYY-MM-DD HH:mm:ss'),
          //     isonline:true
          // }
          // console.log("insert product:" + EJSON.stringify(productDoc));
          // Meteor.call("insertProduct",productDoc);
          // Products.insert(productDoc);        
          Router.go("/admin/navredpackages");
    
    },    
  });