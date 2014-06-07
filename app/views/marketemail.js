export default Ember.View.extend({
  tagName: 'iframe',
  attributeBindings: ['src','width','height','frameborder'],
  src: function(){
      //var vidId = this.getPath('content.videoId');
      return "http://news.nelibox.com/jose/img/hero-nelibox-jun-2014.html";// + vidId;
    }.property(),
    width: function(){
      return "800px";
    }.property()
//    height: function(){
//      return "1000px";
//    }.property()
//    frameborder: function(){
//      return "0";
//    }.property()
});