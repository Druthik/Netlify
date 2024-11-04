import { Router } from 'express';
import { queryElasticsearch } from '../services/elasticsearch';
import { queryOllama } from '../services/ollama';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { question } = req.body;
    
    // Get data from Elasticsearch
    const esData = await queryElasticsearch(question);
    
    // Get AI response from Ollama
    const aiResponse = await queryOllama(JSON.stringify(esData), question);
    
    res.json({
      response: aiResponse,
      data: esData
    });
  } catch (error) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

export const chatRouter = router;