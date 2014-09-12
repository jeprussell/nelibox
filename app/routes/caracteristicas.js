import Ember from "ember";
var Person = Ember.Object.extend({
    firstName : "",
    lastName : "",
    email : ""
});


export default Ember.Route.extend({
	
	model: function(){
      return Person.create();
	},
    setupController : function(controller, model){
        controller.set("model", model);
    },
    afterModel: function(model) {
	    document.title = "NeliBox Caracteristicas de Sistema Administracion medica";
	    $('head meta[name="description"]').attr('content', "Caracteristicas Software Clinico Nelibox para salud de pacientes  e historias medicas");
    }
});