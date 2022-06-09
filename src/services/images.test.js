const {makeImageName} = require('./images');

describe ('test sobre funciones de imagenes', function() {
    it ('devuelve un string formateado', function() {
        const texto = 'imagen.jpg';
        expect(texto).toBe('imagen.jpg'); 
    })
})