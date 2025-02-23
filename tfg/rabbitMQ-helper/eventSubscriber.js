const amqp = require('amqplib');
const fs = require('fs');
const config = require('../config.json');

const startEventSubscriber = async () => {
    try {
        // Connect to RabbitMQ server
        const connection = await amqp.connect(config.rabbitMQURL);
        const channel = await connection.createChannel();

        // Declare the queue
        await channel.assertQueue('user_registration_queue', { durable: false });

        // Set up event handling
        channel.consume('user_registration_queue', (msg) => {
            const event = JSON.parse(msg.content.toString());
            logEventToFile(event);
        }, { noAck: true });

        console.log('Event subscriber listening for user registration events');

    } catch (error) {
        console.error('Error starting event subscriber:', error);
    }
};

const logEventToFile = (event) => {
    const logMessage = `Event Type: ${event.eventType}, Data: ${JSON.stringify(event.eventData)}\n`;
    const logFilePath = __dirname + `../logs/user_registration_events.log`;

    // Append the log to a file (you can customize the file path)
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) throw err;
        console.log('Event logged to file');
    });
};

module.exports = { startEventSubscriber };
