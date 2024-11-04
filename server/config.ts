export const config = {
  elasticsearch: {
    node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
    auth: {
      username: process.env.ELASTICSEARCH_USERNAME,
      password: process.env.ELASTICSEARCH_PASSWORD
    },
    indices: {
      callLogs: 'telco_call_logs',
      trafficData: 'telco_traffic_data',
      userMetrics: 'telco_user_metrics'
    }
  },
  ollama: {
    url: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: 'llama2'
  },
  server: {
    port: process.env.PORT || 3000,
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:5173'
    }
  }
}