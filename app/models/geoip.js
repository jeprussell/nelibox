// models/geoip.js
export default DS.Model.extend({
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
});


/*var serializer = DS.ActiveModelSerializer.extend({
  primaryKey: '_id',
  normalizeId: function() {
   // console.log('normalizeId was called');
    return this._super.apply(this, arguments);
  }
}).create();*/