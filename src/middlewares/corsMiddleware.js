import cors from 'cors';

const corsMiddleware = cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization,x-api-key'
});

export default corsMiddleware;