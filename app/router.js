import Ember from 'ember';

var Router = Ember.Router.extend({
  location: NeliboxENV.locationType
});

Router.map(function() {
  this.route('caracteristicas');
  this.route('detalles');
  this.route("blog", { path: "/blog" });
  this.route('contactar');
  //this.route("favorites", { path: "/favs" });
  this.route('todos');
  this.route('clinica');
  this.route('rayosx');
  this.route('farmacia');
  this.route('lab');
  this.route('consultas');
  this.route('social');
  this.route('gracias');
  this.route('mercadeo');
  this.route('videos');
  this.route('error', { path: "/*path" });
  //this.resource('posts', function() {
  //this.route('new');
  //});
});


Router.reopen({
   /* notifyGoogleAnalytics: function() {
    return ga ('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition'),*/
  notifyGoogleAnalytics: function() {
    //var url = this.get('url');
    //console.log(url);
  }.on('didTransition'),
  //location: history.pushState ? 'history' : 'hash'
  location: 'history'
});


Ember.Route.reopen({
  render: function(/*controller, model*/) {
    this._super();
    window.scrollTo(0,0);
  }
});

export default Router;
