Router.configure({
  layoutTemplate: 'layout_default'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/historia', function () {
  this.render('historia');
});
Router.route('/economia', function () {
  this.render('economia');
});
Router.route('/empresa', function () {
  this.render('empresa');
});
Router.route('/clients', function () {
  this.render('clients');
});
