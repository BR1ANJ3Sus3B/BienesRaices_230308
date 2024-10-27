import express from 'express'
//? Ejemplo de activacion de HOT RELOAD 
//console.log("Hola desde NodeJS, est en hot reload")
//?Importa la liberacion para crear un servidor web -commonsJS / ECMA script6
//? Instanciar nuestra aplicacion web 

const port = 3001;
const app= express();

app.listen(port,()=> 
console.log(`La aplicacion ha iniciado en el puerto: ${port}`))
//? Routing -Enrutacion para peticiones
app.get("/", function(req, res){
    res.send("Hola desde la web en NodeJS")
})
app.get("/QuienEres",function(req, res){
    res.json({
        "Nombre" : "Brian Jesus Mendoza Marquez",
        "Carrera" : "TI DSM",
        "Grado" : "4",
        "Grupo" : "B"
    })
})