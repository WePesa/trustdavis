Contacts = new Mongo.Collection("contacts");

Contacts.attachSchema(
  new SimpleSchema({
    name: {
      type: String,
      label: "Contact Alias"
    },
  })
);

Contacts.allow({
  insert: function(userId, doc) {
    return userId && doc && userId === doc.userId;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return !_.contains(fieldNames, 'status') && userId && doc && userId === doc.userId;
  },
  remove: function(userId, doc) {
    return userId && doc && userId === doc.userId;
  },
  fetch: ['userId']
});

