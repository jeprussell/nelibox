export default DS.RESTSerializer.extend({  
    primaryKey: '_id'
});
// serializers/geoip.js
//export default DS.RESTSerializer.extend({
//	 normalizePayload: function(geoip, payload) {
//    var ip = geoip.ip;
//    return {
//      ip: payload
//    }
//  }

//	serializeIntoHash: function(hash, type, record, options) {
//    Ember.merge(hash, this.serialize(record, options));
//  }


/*	extract: function(loader, json, type, record) {
    var root = 'geoip';

    if (json[root]) {
      if (record) { loader.updateId(record, json[root]); }
      this.extractRecordRepresentation(loader, type, json[root]);
    }
  }*/
  
  /*  serializeIntoHash: function(data, type, record, options) {
    var root = Ember.String.decamelize(type.typeKey);
    data[root] = this.serialize(record, options);
    //console.log(record);
	}*/
	
	//normalizePayload: function(type, payload) {
    //var geoip = type.geoip;
    //return {
    //  geoip: payload
	//  }
	//	}
	/*primaryKey: function(type) {
    // If the type is `BlogPost`, this will return
    // `blog_post_id`.
    var typeString = type.toString().split(".")[1].underscore();
    return typeString + "_id";
	},*/
//	serializeIntoHash: function(hash, type, record, options) {
//    Ember.merge(hash, this.serialize(record, options));
//	}
//});

/* export default DS.ActiveModelSerializer.extend({
 primaryKey: '_id',
  normalizeId: function() {
   // console.log('normalizeId was called');
    return this._super.apply(this, arguments);
  },
  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
	}
}).create();*/


/*
extractArray: function(store, type, payload, id, requestType) {
        payload.forEach(function(element, key){
            element.id = element[type.idField];
        });
        var newPayload = {};
        newPayload[Ember.String.pluralize(type.typeKey)] = payload;
        return this._super(store, type, newPayload, id, requestType);
    }
*/