import Ember from "ember";
var ThingModel = Ember.Object.extend({
	nombre: "",
	apellido: "",
	email: "",
	mensaje: ""
});
var ContactarRoute = Ember.Route.extend({
    setupController : function(controller, model){
        controller.set("model", model);
        controller.set("model", ThingModel.create());
    },
    afterModel: function(model) {
    //var artistName = this.modelFor('artist').get('name');
    //$(document).attr('title', artistName + ' songs - Rock & Roll');
    document.title = "NeliBox Contactanos - Sistemas Gestion Medica Consulta Laboratorio";
  }
});
export default ContactarRoute;