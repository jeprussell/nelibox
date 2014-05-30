//export default DS.FixtureAdapter.extend();
// adapters/application.js
export default DS.RESTAdapter.extend({
	//console.log('normalizeId was called');
	//namespace: 'geoip',
	bulkCommit: false,
	host: 'http://freegeoip.net/json/',
	/*serializer: DS.Serializer.extend({
       primaryKey: function(type){
         return '_id';
       },*/
	//corsWithCredentials: true,
	headers: {
    "API_KEY": "secret key",
    "ANOTHER_HEADER": "Some header value"
	}
});

//Adapter.map('geoip', {
//  primaryKey: '_id'
//});