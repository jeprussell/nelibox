//export default DS.FixtureAdapter.extend();
// adapters/application.js
export default DS.RESTAdapter.extend({
	//console.log('normalizeId was called');
//	namespace: 'json',
	bulkCommit: false,
	host: 'http://freegeoip.net/json/',
	defaultSerializer: '-default',
//	serializer: DS.Serializer.extend({
  //     primaryKey: function(type){
    //     return '_id';
      // },
	//corsWithCredentials: true,
	headers: {
	//	"type": "custom_post_type_slug"
	    //"API_KEY": "secret key",
	    //"ANOTHER_HEADER": "Some header value"
	}
});

//DS.RESTAdapter.reopen({
//  host: 'http://freegeoip.net/json/',
//  namespace: 'json'
//});
//Adapter.map('geo', {
//  primaryKey: '_id'
//});

