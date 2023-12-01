//////Sesion 1 Subir un fichero atraves de una pagina web a un servidor\\\\\\\\\\


//////////////////Ejemplo-1\\\\\\\\\\\\\\\\\\\\

////--------------------------------------------------------------------------------------------------------------------------\\\\

//var http = require('http');
//var formidable = require('formidable');
//var fs = require('fs');
//var mv = require('mv');

//http.createServer(function(req,res){


//if(req.url == '/fileupload'){

    //var form = new formidable.IncomingFrom();
    //form.parse(req,function(err,fields,files){
        //var oldpath =files.filetupload.filepath;
        //var newpath = 'C:\Users\gonza\OneDrive\Documentos\Asir 2º AÑO\IAW\node\sesion1' + files.filetupload.originalFilename;
        //mv(oldpath,newpath,function (err){
            //if (err)
                //throw err;
            //else{
               // res.write('File upload and moved!');
                //res.end();
            //}
        //})

    //})
//}else{
   // res.writeHead(200,{'Content-Type' : 'text/html'});
   // res.write("<h1>prueba iaw </h1>");
    //res.write('<input type = "file"  name="filetopload"><br> ');
   // res.write('<input type = "submit">');
    //res.write('</form>');
    //return res.end();
//}

//}).listen(8080);


///////////-------------------------------------------------------------------------------------------------------------------------\\\\\\\\\\\\\\


/////Ejercicio-1\\\\\\

///-----------------------------------------------------------------------------------------------------------------------------------\\\

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var mv = require('mv');

http.createServer(function(req,res){

if(req.url == '/fileupload'){

    var form = new formidable.IncomingFrom();
    form.parse(req,function(err,fields,files){
        var oldpath =files.filetupload.filepath;
        var newpath = 'C:\Users\gonza\OneDrive\Documentos\Asir 2º AÑO\IAW\node\sesion1' + files.filetupload.originalFilename;
        mv(oldpath,newpath,function (err){
            if (err)
                throw err;
            else{
                res.write('File upload and moved!');
                res.end();
            }
        })

    })
}else if (reportError.url == '/mariog'){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write("<h1>prueba iaw de mario gonzalez </h1>");
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type = "file"  name="filetopload"><br> ');
    res.write('<input type = "submit">');
    res.write('</form>');
    return res.end();
}

}).listen(8080);