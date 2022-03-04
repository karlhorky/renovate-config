module.exports = {
  extends: ['config:base'],
  ignorePresets: [':prHourlyLimit2'],
  packageRules: [
    {
      groupName: 'dependency upgrades - non-major',
      depTypeList: [
        'devDependencies',
        'dependencies',
        'peerDependencies',
        'resolutions',
      ],
      updateTypes: ['patch', 'minor'],
      automerge: true,
    },
    {
      groupName: 'eslint devDependencies - major',
      depTypeList: [
        'devDependencies',
        'dependencies',
        'peerDependencies',
        'resolutions',
      ],
      updateTypes: ['major'],
      matchPackageNames: ['eslint-plugin-unicorn'],
      automerge: true,
    },
    {
      description:
        'Enable major version upgrades of @types/node https://github.com/renovatebot/renovate/issues/1463#issuecomment-875014401',
      matchManagers: ['npm'],
      matchPackageNames: ['@types/node'],
      versioning: 'npm',
    },
  ],
  schedule: 'after 4pm on thursday',
  vulnerabilityAlerts: {
    schedule: null,
  },
};
