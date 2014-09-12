import Ember from "ember";
var Person = Ember.Object.extend({
    firstName : "",
    lastName : "",
    email : ""
});


var FarmaciaRoute = Ember.Route.extend({
	
	model: function(){
      return Person.create();
	},
    setupController : function(controller, model){
        controller.set("model", model);
    },
    afterModel: function(model) {
    //var artistName = this.modelFor('artist').get('name');
    //$(document).attr('title', artistName + ' songs - Rock & Roll');
    document.title = "NeliBox Sistemas Gestion de Farmacias";
    }
});

export default FarmaciaRoute;