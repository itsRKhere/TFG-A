// Importing the 'app' object from the 'index' module and the 'config' JSON file.
const { app } = require('./index');
const config = require('./config.json');
const event = require('./rabbitMQ-helper/eventSubscriber');
const mongoConnection = require('./connections/db/mongodb');

// Extracting the 'PORT' value from the 'config' object.
const PORT = config.PORT;

// start event subscriber
event.startEventSubscriber();

mongoConnection.once('open', () => {
    console.log(`MongoDb connected`);

    // Starting the Express server to listen on the specified port.
    app.listen(PORT, () => {
        console.log(`Started listening on port ${PORT}!`)
    });
});
