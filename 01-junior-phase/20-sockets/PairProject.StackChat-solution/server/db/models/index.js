const Message = require('./message');
const Channel = require('./channel');
const Author = require('./author');

Channel.hasMany(Message, {
  onDelete: 'cascade',
  hooks: true
});

Author.hasMany(Message);

Message.belongsTo(Channel);
Message.belongsTo(Author);

module.exports = {
  Channel,
  Message,
  Author
};
