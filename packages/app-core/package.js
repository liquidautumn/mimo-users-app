Package.describe({
  name: 'app:core',
  summary: 'Application core',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  var packages = [
      'app:lib',
      'mimo:users'
    ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'index.html'
  ], 'client');
});
