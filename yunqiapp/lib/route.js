
Router.route('/', function () {
  this.layout('mainlayout');
  this.render('home', {to: 'content'});

});


Router.route('/profile', function () {
  this.layout('mainlayout');
  if (Meteor.user()) {
      console.log("login");
     this.render('profile', {to: 'content'});
  }
  else{
      console.log("not login");
      this.render('login', {to: 'content'});
   }

});

Router.route('/wjmm', function () {
    this.layout('mainlayout');
    this.render('wjmm', {to: 'content'});
});


Router.route('/createuser', function () {
    this.layout('indexdetailpagelayout',{data: {title: '注册'}});
    this.render('CreateUser', {to: 'detailpagecontent'});
});

Router.route('/more', function () {
    this.layout('mainlayout');
    this.render('more', {to: 'content'});
});

Router.route('/homedetail/producttype', function () {
    console.log("/homedetail/producttype");
    this.layout('indexdetailpagelayout');
    this.render('producttype', {to: 'detailpagecontent'});
});

Router.route('/homedetail/wyxd', function () {
    this.layout('indexdetailpagelayout',{data: {title: '我要下单'}});
    this.render('wyxd', {to: 'detailpagecontent'});
});

Router.route('/homedetail/wddd', function () {
    this.layout('indexdetailpagelayout',{data: {title: '我的订单'}});
    this.render('wddd', {to: 'detailpagecontent'});
});

Router.route('/homedetail/cxhd', function () {
    this.layout('indexdetailpagelayout',{data: {title: '促销活动'}});
    this.render('cxhd', {to: 'detailpagecontent'});
});

Router.route('/homedetail/yqcx', function () {
    this.layout('indexdetailpagelayout',{data: {title: '用气查询'}});
    this.render('yqcx', {to: 'detailpagecontent'});
});

Router.route('/homedetail/wdhb', function () {
    this.layout('indexdetailpagelayout',{data: {title: '我的红包'}});
    this.render('wdhb', {to: 'detailpagecontent'});
});

Router.route('/homedetail/yhq', function () {
    this.layout('indexdetailpagelayout',{data: {title: '优惠券'}});
    this.render('yhq', {to: 'detailpagecontent'});
});

Router.route('/profile/dz', function () {
    this.layout('indexdetailpagelayout',{data: {title: '地址'}});
    this.render('dz', {to: 'detailpagecontent'});
});

Router.route('/bz', function () {
    this.layout('indexdetailpagelayout',{data: {title: '使用帮助'}});
    this.render('bz', {to: 'detailpagecontent'});
});

Router.route('/logout', function () {
    Meteor.logout();
    this.redirect('/profile');
});