export default Ember.ObjectController.extend(Ember.Validations.Mixin,{
	actions: {
		Contacto: function() {
				
			var name = this.get('model.nombre');
			var lastname = this.get('model.apellido');
			var email = this.get('model.email');
			var message = this.get('model.mensaje');
			
			$.ajax({
			type: 'POST',
			url: '/front/send_form_email.php',
			data: {'name':name,'lastname':lastname, 'email':email, 'message':message},
			dataType : "json",
			success: function(html) {
				if(html.success === '1')
				{
					$('#button-send').html('Send E-Mail');
					$('#success').show();
				}
				else
				{
					$('#button-send').html('Send E-Mail');
					$('#error').show();
				}					
			},
			error: function(){
				$('#button-send').html('Send E-Mail');
				$('#error').show();
			}
		});
		this.transitionToRoute('gracias');
		}
	},
	validations: {
		nombre: {
				format: { with: /^([a-zA-Z]|\d)+$/, allowBlank: false, message: 'Por favor Letras y/o Numeros solamente'},
				length: { minimum: 3, messages: { tooShort: "3 Caracteres Minimo." } } 
        },
		apellido: {
				format: { with: /^([a-zA-Z]|\d)+$/, allowBlank: false, message: 'Por favor Letras y/o Numeros solamente'  },
				length: { minimum: 3, messages: { tooShort: "3 Caracteres Minimo." } }
		},
		email:{ 
				presence: { message: "Campo Requerido." },
				format: { with: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ , allowBlank: false, message: 'Por favor email correcto'}
				//length: { minimum: 15, messages: { tooShort: "5 Caracteres Minimo." } }	
        },
		mensaje: {
				//presence: { message: "Field is required." },
				length: { minimum: 5, messages: { tooShort: "Escribe tu Mensaje en forma Clara. Minimo 5 Letras" } }
		}
	},
	debuggingErrors: function () {
		var errors = this.get("errors");
		var flattenedArray = [];
		var properties = Ember.keys(errors);
		//var messages;
		//var modifiedMessages;

		properties.forEach(function (property) {
		var	messages = errors.get(property);
		var	modifiedMessages = messages.map(function (message) {
				return "%@: %@".fmt(property, message);
			});

			flattenedArray.pushObjects(modifiedMessages);
		});

		return flattenedArray.sort();
	}.property(
				"errors.nombre.@each",
				"errors.email.@each",
				"errors.mensaje.@each",
				"errors.apellido.@each"
	)
});