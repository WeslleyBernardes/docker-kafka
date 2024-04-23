const kafka = require('kafka-node');
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:29092' });
const producer = new kafka.Producer(client);

const payloads = [
    { topic: 'PrimeiroTopico', messages: 'Hello Kafka' },
    // Adicione mais mensagens aqui se necessário
];

producer.on('ready', function() {
    producer.send(payloads, function(err, data) {
        if (err) {
            console.log('Erro ao enviar mensagem:', err);
        }
        console.log('Mensagem enviada:', data);
        process.exit();
    });
});

producer.on('error', function(err) {
    console.log('Erro do Produtor:', err);
});