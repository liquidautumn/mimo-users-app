Meteor.users.after.insert(function (userId, user) {
  if (Meteor.users.find({}, {limit:2}).count() > 1) {
    Roles.addUsersToRoles(user._id, ['user'])
  } else {
    Roles.addUsersToRoles(user._id, ['admin'])
  }
});
