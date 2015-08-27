
Router.route('/admin', function () {
  console.log("admin index html");
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminorders', {to: 'admincontent'});
});
//发布产品
Router.route('/admin/addproduct', function () {
  console.log("admin addproduct html");
  this.render('adminproductadd');
 });
 //发布红包
 Router.route('/admin/addredpackage', function () {
  console.log("admin addredpackage html");
  this.render('addredpackage');
 });
 //发布促销
 Router.route('/admin/addsalespromotion', function () {
  console.log("admin addsalespromotion html");
  this.render('addsalespromotion');
 });
 //新增优惠券
 Router.route('/admin/addcoupon', function () {
  console.log("admin addcoupon html");
  this.render('addcoupon');
 });
 

 
 
 
 Router.route('/admin/updateproduct/:id', function () {
  console.log("admin updateproduct html");
  curproduct = Products.findOne({_id:this.params.id});
  this.render('adminproductupdate',{data:{curproduct:curproduct}});
 });


Router.route('/admin/navproducts', function () {
    console.log("admin navproducts html");
  
    var products = [];
    Products.find().forEach(function(pd){
        products.push(pd);
    });
    console.log("展示产品:" + EJSON.stringify(products));

   this.layout('adminmainlayout');
   this.render('adminnavbar', {to: 'adminnavbar'});
   this.render('adminproducts', {to: 'admincontent',data:{products:products}});
});

Router.route('/admin/navorders', function () {
  console.log("admin navorders html");
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminorders', {to: 'admincontent'});
});

Router.route('/admin/navusers', function () {
  console.log("admin navusers html");
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminusers', {to: 'admincontent'});
});

Router.route('/admin/navsalespromotions', function () {
    

  var salespromotions = [];
  SalesPromotions.find().forEach(function(sp){
      salespromotions.push(sp);
  });
  console.log("展示促销活动:" + EJSON.stringify(salespromotions));

  
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminsalespromotions', {to: 'admincontent',data:{salespromotions:salespromotions}});
});

Router.route('/admin/navcoupons', function () {
  var coupons = [];
  Coupons.find().forEach(function(cn){
      coupons.push(cn);
  });
  console.log("展示优惠券:" + EJSON.stringify(coupons));
  
  
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('admincoupons', {to: 'admincontent',data:{coupons:coupons}});
});

Router.route('/admin/navredpackages', function () {
  
  var redpackages = [];
  SystemRedPackages.find().forEach(function(rk){
      redpackages.push(rk);
  });
  console.log("展示红包:" + EJSON.stringify(redpackages));


  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminredpackages', {to: 'admincontent',data:{redpackages:redpackages}});
});

