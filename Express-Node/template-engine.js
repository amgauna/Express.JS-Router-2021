var express = require('express');
var app = express();

//  Definir o diretório para conter os modelos ('views')
app.set('views', path.join(__dirname, 'views'));

// Definir o motor de visualização para usar, neste caso 'some_template_engine_name'
app.set('view engine', 'some_template_engine_name');
