# renovate-config

Use by extending in your `renovate.json`:

```json
{
  "extends": [
    "github>karlhorky/renovate-config"
  ]
}
```

## Disabled Config Blocks

Since [Shareable Config Presets don't support JSON5](https://github.com/renovatebot/renovate/issues/7674) or [JavaScript](https://github.com/renovatebot/renovate/issues/14517), it's not possible to temporarily disable parts of the config within the file.

The configuration blocks below are these blocks that should be currently disabled:

### Automerge GitHub Official Actions

Since these actions don't get major version bumps often, manually merging is probably still acceptable:

```
    {
      "groupName": "GitHub Official Actions - major",
      "depTypeList": ["action"],
      "updateTypes": ["major"],
      "matchPackageNames": ["actions/checkout", "actions/setup-node", "actions/upload-artifact"],
      "automerge": true
    },
```
