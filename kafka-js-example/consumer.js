const kafka = require('kafka-node');
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:29092' });
const consumer = new kafka.Consumer(
    client,
    [{ topic: 'PrimeiroTopico', partition: 0 }],
    {
        autoCommit: true
    }
);

consumer.on('message', function(message) {
    console.log('Mensagem recebida:', message);
});

consumer.on('error', function(err) {
    console.log('Erro do Consumidor:', err);
});