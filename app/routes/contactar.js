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
    }
});
export default ContactarRoute;