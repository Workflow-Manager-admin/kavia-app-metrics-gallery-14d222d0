const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Kavia Gallery API',
      version: '1.0.0',
      description: 'API for metrics gallery backend (serves health + metrics REST endpoints)',
    },
    tags: [
      {
        name: 'Health',
        description: 'API for service health check'
      },
      {
        name: 'Metrics',
        description: 'API for retrieving app generation metrics'
      }
    ]
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
