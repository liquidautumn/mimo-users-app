Package.describe({
  name: 'app:lib',
  summary: 'Application libs',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  var packages = [
    'meteor-base',
    'mobile-experience',
    'mongo',
    'blaze-html-templates',
    'session',
    'jquery',
    'tracker',
    'standard-minifiers',
    'es5-shim',
    'ecmascript',
    'accounts-password',
    'accounts-ui',
    'alanning:roles@1.2.14',
    'matb33:collection-hooks'
  ];

  api.use(packages);

  api.imply(packages);

  api.export([
    'Meteor',
    'Template',
    'Roles',
    'Accounts'
  ]);
});
