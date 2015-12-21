Meteor.subscribe("users");

Template.mimoUsersList.helpers({
  users: function(){
    return Accounts.users.find({})
  },

  email: function(){
    return this.emails[0].address;
  },
  role: function(){
    return this.roles[0];
  }
});
