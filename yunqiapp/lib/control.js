
Router.route('/', function () {
  this.layout('layout');
  this.render('home', {to: 'content'});

});


Router.route('/profile', function () {
  this.layout('layout');
  this.render('profile', {to: 'content'});

});

Router.route('/more', function () {
    this.layout('layout');
    this.render('more', {to: 'content'});
});
