var BlogRoute = Ember.Route.extend({
  redirect: function() {
     window.location.replace("http://blog.nelibox.com");
  }
});

export default BlogRoute;