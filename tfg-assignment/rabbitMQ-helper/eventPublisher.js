const amqp = require('amqplib');
const config = require('../../config.json');

const publishEvent = async (event) => {
    try {
        // Connect to RabbitMQ server
        const connection = await amqp.connect(config.rabbitMQURL);
        const channel = await connection.createChannel();

        // Declare the queue
        await channel.assertQueue('user_registration_queue', { durable: false });

        // Send the event to the queue
        channel.sendToQueue('user_registration_queue', Buffer.from(JSON.stringify(event)));

        console.log('Event published to RabbitMQ');

        // Close the connection
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error publishing event:', error);
    }
};

module.exports = { publishEvent };
