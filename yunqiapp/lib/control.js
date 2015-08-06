Router.configure({
    layoutTemplate:'layout',
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/profile', function () {
  this.render('profile');
});

Router.route('/more', function () {
  this.render('more');
});