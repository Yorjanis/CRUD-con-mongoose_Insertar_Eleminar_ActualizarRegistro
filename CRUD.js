var User = require('./models.js')

module.exports.insertarRegistro = function(callback){
let Mateo = new User({nombre: "Fernando", edad: 40, peso: 68})

Mateo.save((error) => {
if(error)callback(error)
callback(null, "Registro guardado")	
})

}

	module.exports.eliminarRegistro = function(callback){
	User.remove({edad:28},(error) =>{
	if(error)callback(error)
    callback(null, "Se elemino corectamente el registro")
	})
    }
module.exports.consultarYActualizar = function(callback){
User.find({}).exec((error, result) =>{
	if(error)callback(error)
	console.log(result)	
      User.update({nombre: "Stiven"}, {peso:40}, (error, result)=>{
		  if(error)callback(error)
			  callback(null, result)
})
})
}
