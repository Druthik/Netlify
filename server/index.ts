import express from 'express';
import cors from 'cors';
import { config } from './config';
import { esClient } from './services/elasticsearch';
import { chatRouter } from './routes/chat';

const app = express();

app.use(cors(config.server.cors));
app.use(express.json());

// Health check endpoint
app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

// API routes
app.use('/api/chat', chatRouter);

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(config.server.port, () => {
  console.log(`Server running on port ${config.server.port}`);
});