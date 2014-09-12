import Ember from "ember";
var BlogRoute = Ember.Route.extend({
  redirect: function() {
  	document.title = "NeliBox Sistemas Gestion - Blog";
    window.location.replace("http://blog.nelibox.com");
    $('head meta[name="description"]').attr('content', "NeliBox Blog Gestion Medica Consultas Clinicas");
  }
});

export default BlogRoute;