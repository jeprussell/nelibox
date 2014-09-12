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
	    document.title = "NeliBox Detalles de Sistema Clinico Laboratorios Medicos Consultas RayosX Radiologia";
	    $('head meta[name="description"]').attr('content', "NeliBox detales de pantallas de procesos importantes de los Modulos del Sistema de Gestion Medica"); 
    }
});