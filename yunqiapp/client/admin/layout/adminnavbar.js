Template.adminnavbar.onRendered(function () {
   // $('#admin-offcanvas').offCanvas('open');
    console.log("Template.adminnavbar.onRendered");
});

Template.adminnavbar.helpers({
  navlists: function () {
    var navlists = [
        {
          navurl:'/admin/navproducts',
          navico:'am-icon-rocket',
          navtitle:'产品管理'            
        },
        {
          navurl:'/admin/navorders',
          navico:'am-icon-bolt',
          navtitle:'订单管理'            
        },
        {
          navurl:'/admin/navusers',
          navico:'am-icon-user-md',
          navtitle:'用户管理'            
        },
        {
          navurl:'/admin/navsalespromotions',
          navico:'am-icon-gift',
          navtitle:'促销管理'            
        },
        {
          navurl:'/admin/navcoupons',
          navico:'am-icon-ticket',
          navtitle:'优惠券管理'            
        },
        {
          navurl:'/admin/navredpackages',
          navico:'am-icon-tablet',
          navtitle:'红包管理'            
        },
    ];
    return navlists;
  }
});