Router.configure({
  layoutTemplate: 'layout_default'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/sobre', function () {
  this.render('sobre');
});
Router.route('/producao', function () {
  this.render('producao');
});
Router.route('/empresa', function () {
  this.render('empresa');
});
Router.route('/clients', function () {
  this.render('clients');
});
