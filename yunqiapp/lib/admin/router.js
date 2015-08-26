
Router.route('/admin', function () {
  console.log("admin index html");
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminorders', {to: 'admincontent'});
});

Router.route('/admin/addproduct', function () {
  console.log("admin addproduct html");
  this.render('adminproductadd');
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
  console.log("admin navsalespromotions html");
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminsalespromotions', {to: 'admincontent'});
});

Router.route('/admin/navcoupons', function () {
  console.log("admin navcoupons html");
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('admincoupons', {to: 'admincontent'});
});

Router.route('/admin/redpackages', function () {
  console.log("admin redpackages html");
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminredpackages', {to: 'admincontent'});
});

