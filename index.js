const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
}

module.exports = app;