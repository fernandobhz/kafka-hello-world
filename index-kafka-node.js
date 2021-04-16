const kafka = require('kafka-node'); // kafkajs
const client = new kafka.KafkaClient();
const producer = new kafka.Producer(client);

const { log } = console;

log('starting');

producer.on('ready', () => {
  log('ready');

  producer.send(
    [
      {
        topic: 'quickstart-events',
        messages: process.argv,
      },
    ],
    (err, data) => {
      log('send callback', { err, data });
      client.close();
    }
  );
});

producer.on('error', (err) => log({ err }));

log('bottom');

// key id 
// json as message
// source