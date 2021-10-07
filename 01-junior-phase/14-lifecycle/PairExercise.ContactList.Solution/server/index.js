const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { db, Contact } = require('./db');
const app = express();
const PORT = 3000;

// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/contacts', async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({
      attributes: ['id', 'name', 'email', 'phone'],
    });
    res.json(contacts);
  } catch (err) {
    next(err);
  }
});

app.get('/api/contacts/:contactId', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.contactId);
    res.json(contact);
  } catch (err) {
    next(err);
  }
});

app.put('/api/contacts/:contactId', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.contactId);
    await contact.update(req.body);
    res.sendStatus(204)
  } catch (err) {
    next(err);
  }
});

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Internal server error');
});

(async function startServer() {
  try {
    await db.sync();
    console.log('The database is synced!');
    app.listen(PORT, () =>
      console.log(`

        Listening on port ${PORT}
        http://localhost:3000/

      `)
    );
  } catch (err) {
    console.error(err);
  }
})();
