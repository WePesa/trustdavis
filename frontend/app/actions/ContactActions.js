var constants = require("../constants");

var ContactActions = {
  addContact: function(contact) {
    this.dispatch(constants.contact.ADD_CONTACT, contact);
  },

  removeContact: function(contact) {
    this.dispatch(constants.contact.REMOVE_CONTACT, contact);
  },

  renameContact: function(contact) {
    this.dispatch(constants.contact.RENAME_CONTACT, contact);
  }
};

module.exports = ContactActions;