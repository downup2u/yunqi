
Router.route('/admin', function () {
  console.log("admin index html");
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminorders', {to: 'admincontent'});
});

Router.route('/admin/navproducts', function () {
  console.log("admin navproducts html");
  this.layout('adminmainlayout');
  this.render('adminnavbar', {to: 'adminnavbar'});
  this.render('adminproducts', {to: 'admincontent'});
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

