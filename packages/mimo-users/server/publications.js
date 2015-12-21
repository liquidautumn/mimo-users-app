Meteor.publish(null, function () {
  return Meteor.users.find({ _id: this.userId }, { fields: {
    'roles': 1
  }});
});

Meteor.publish('users', function () {
  if (!Roles.userIsInRole(this.userId, ['admin'])) {
    this.stop();
    return;
  }

  return Meteor.users.find({}, { fields: {
    'roles': 1,
    'emails': 1
  }});
});
