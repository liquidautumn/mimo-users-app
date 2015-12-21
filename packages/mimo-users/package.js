Package.describe({
  name: 'mimo:users',
  summary: 'Mimo users',
  version: '0.0.1'
});


Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  api.use([
    'app:lib'
  ]);

  api.imply([
    'app:lib'
  ]);

  api.addFiles([
    'client/users.html',
    'client/usersList.html',
    'client/usersList.js'
  ], 'client');

  api.addFiles([
    'server/autoRoles.js',
    'server/publications.js'
  ], 'server');
});
