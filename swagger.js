const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts',
    description: 'contacts information',
  },
  host: 'cse341-webservices-fk8a.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js']; // This points to your entry point where routes are defined

/* NOTE: If your routes are defined in a separate folder like /routes/index.js, 
   you might need to use ['./routes/index.js'] instead. */

swaggerAutogen(outputFile, endpointsFiles, doc);