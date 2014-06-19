import Ember from "ember";
export default Ember.Route.extend({
	 model: function() {
  //   return this.store.find('geo');
  // return this.store.find('geo', {'type' : 'custom_post_type_slug'});
  // this.store.push('geo');
  // Usando esto nos retorna la posicion del server
  // return this.store.find('geo');
  	return Ember.$.getJSON('http://freegeoip.net/json/');
  	
  	//return Ember.$.getJSON('http://freegeoip.net/json/', function (items) {
           // console.log(items);
     //       return items;
     //  return geo.findAll();     
		//	});

//	var geodata = Ember.$.getJSON('http://freegeoip.net/json/');

//	geodata.forEach(function(item) {
//	console.log(item, this.indexOf(item));
//	}, geodata)
//	[1,2,3].forEach(function(item) {
//  console.log(item);
//});	

//return Ember.$.getJSON('http://freegeoip.net/json/').forEach(function (items) {
//           console.log(items);
  //          return items;
//			});

  // return this.get('store').find('geo');
  /*this.store.push('geo', {
      id: 1,
      ip:"192.168.0.1",
      area_code: 1,
      city: "Fewer Moving Parts",
      country_code: "David Bazan",
      country_name: 10
    });*/
   // 
  }
  //,
  //controllerName: 'geo',
  //renderTemplate: function(controller){
  // You have to pass the controller to render or it will generate a new controller
  //  this.render({ controller: controller, into: 'application', outlet: 'modal' });
  //}
});
