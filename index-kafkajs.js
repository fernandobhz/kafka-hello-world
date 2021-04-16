const { Kafka } = require('kafkajs');

const clientId = 'my-app';
const localhostBroker = 'localhost:9092';
const brokers = [localhostBroker];

const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

const { log } = console;

(async () => {
  await producer.connect();

  const topic = 'quickstart-events';
  const messages = process.argv.map(arg => ({ value: arg }));

  await producer.send({ topic, messages });

  await producer.disconnect();

  log('done');
})();
