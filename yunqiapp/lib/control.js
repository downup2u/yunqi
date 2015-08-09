
Router.route('/', function () {
  this.layout('mainlayout');
  this.render('home', {to: 'content'});

});


Router.route('/profile', function () {
  this.layout('mainlayout');
  this.render('profile', {to: 'content'});

});

Router.route('/more', function () {
    this.layout('mainlayout');
    this.render('more', {to: 'content'});
});
