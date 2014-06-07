// models/geoip.js
var geo = DS.Model.extend({
	 //id: 'number',
	 ip: DS.attr('string'),
	 country_code: DS.attr('string'),
	 country_name: DS.attr('string'),
	 region_code: DS.attr('string'),
	 region_name: DS.attr('string'),
	 city: DS.attr('string'),
	 zipcode: DS.attr('string'),
	 latitude: DS.attr('string'),
	 longitude: DS.attr('string'),
	 metro_code: DS.attr('string'),
	 area_code: DS.attr('string')
//	 geo: DS.hasMany('geo')
});

/* Paso para revisar converion de Object to arraay
geo.reopenClass({
   findAll: function() {
       var result = [];
       $.ajax({
           url: 'http://freegeoip.net/json/',
           type: 'GET',
           accepts: 'application/json',
           success: function(data) {
               data.geo.forEach(function(geo11){
                  // we are iterating the enquiries in the response step by step and create corresponding objects
                  var model = geo11.create(geo11); 
                  result.addObject(model); //fill your array step by step
               });
               console.log('DEBUG: GET Enquiries OK');
           },
           error: function() {
               console.log('DEBUG: GET Enquiries Failed');
           }
       });
       return result;
   }
});*/
export default geo;
//geo.idField = 'number';
/*var serializer = DS.ActiveModelSerializer.extend({
  primaryKey: '_id',
  normalizeId: function() {
   // console.log('normalizeId was called');
    return this._super.apply(this, arguments);
  }
}).create();*/