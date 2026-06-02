my-oclif-cli-live
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-oclif-cli-live.svg)](https://npmjs.org/package/my-oclif-cli-live)
[![Downloads/week](https://img.shields.io/npm/dw/my-oclif-cli-live.svg)](https://npmjs.org/package/my-oclif-cli-live)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-oclif-cli-live
$ my-oclif-cli-live COMMAND
running command...
$ my-oclif-cli-live (--version)
my-oclif-cli-live/0.0.0 linux-x64 node-v20.14.0
$ my-oclif-cli-live --help [COMMAND]
USAGE
  $ my-oclif-cli-live COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-oclif-cli-live hello PERSON`](#my-oclif-cli-live-hello-person)
* [`my-oclif-cli-live hello world`](#my-oclif-cli-live-hello-world)
* [`my-oclif-cli-live help [COMMAND]`](#my-oclif-cli-live-help-command)
* [`my-oclif-cli-live plugins`](#my-oclif-cli-live-plugins)
* [`my-oclif-cli-live plugins add PLUGIN`](#my-oclif-cli-live-plugins-add-plugin)
* [`my-oclif-cli-live plugins:inspect PLUGIN...`](#my-oclif-cli-live-pluginsinspect-plugin)
* [`my-oclif-cli-live plugins install PLUGIN`](#my-oclif-cli-live-plugins-install-plugin)
* [`my-oclif-cli-live plugins link PATH`](#my-oclif-cli-live-plugins-link-path)
* [`my-oclif-cli-live plugins remove [PLUGIN]`](#my-oclif-cli-live-plugins-remove-plugin)
* [`my-oclif-cli-live plugins reset`](#my-oclif-cli-live-plugins-reset)
* [`my-oclif-cli-live plugins uninstall [PLUGIN]`](#my-oclif-cli-live-plugins-uninstall-plugin)
* [`my-oclif-cli-live plugins unlink [PLUGIN]`](#my-oclif-cli-live-plugins-unlink-plugin)
* [`my-oclif-cli-live plugins update`](#my-oclif-cli-live-plugins-update)

## `my-oclif-cli-live hello PERSON`

Say hello

```
USAGE
  $ my-oclif-cli-live hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ my-oclif-cli-live hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/node-cli/my-oclif-cli-live/blob/v0.0.0/src/commands/hello/index.ts)_

## `my-oclif-cli-live hello world`

Say hello world

```
USAGE
  $ my-oclif-cli-live hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ my-oclif-cli-live hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/node-cli/my-oclif-cli-live/blob/v0.0.0/src/commands/hello/world.ts)_

## `my-oclif-cli-live help [COMMAND]`

Display help for my-oclif-cli-live.

```
USAGE
  $ my-oclif-cli-live help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for my-oclif-cli-live.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.11/src/commands/help.ts)_

## `my-oclif-cli-live plugins`

List installed plugins.

```
USAGE
  $ my-oclif-cli-live plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ my-oclif-cli-live plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/index.ts)_

## `my-oclif-cli-live plugins add PLUGIN`

Installs a plugin into my-oclif-cli-live.

```
USAGE
  $ my-oclif-cli-live plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into my-oclif-cli-live.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MY_OCLIF_CLI_LIVE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MY_OCLIF_CLI_LIVE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ my-oclif-cli-live plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ my-oclif-cli-live plugins add myplugin

  Install a plugin from a github url.

    $ my-oclif-cli-live plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ my-oclif-cli-live plugins add someuser/someplugin
```

## `my-oclif-cli-live plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ my-oclif-cli-live plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ my-oclif-cli-live plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/inspect.ts)_

## `my-oclif-cli-live plugins install PLUGIN`

Installs a plugin into my-oclif-cli-live.

```
USAGE
  $ my-oclif-cli-live plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into my-oclif-cli-live.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MY_OCLIF_CLI_LIVE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MY_OCLIF_CLI_LIVE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ my-oclif-cli-live plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ my-oclif-cli-live plugins install myplugin

  Install a plugin from a github url.

    $ my-oclif-cli-live plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ my-oclif-cli-live plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/install.ts)_

## `my-oclif-cli-live plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ my-oclif-cli-live plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ my-oclif-cli-live plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/link.ts)_

## `my-oclif-cli-live plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-oclif-cli-live plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-oclif-cli-live plugins unlink
  $ my-oclif-cli-live plugins remove

EXAMPLES
  $ my-oclif-cli-live plugins remove myplugin
```

## `my-oclif-cli-live plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ my-oclif-cli-live plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/reset.ts)_

## `my-oclif-cli-live plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-oclif-cli-live plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-oclif-cli-live plugins unlink
  $ my-oclif-cli-live plugins remove

EXAMPLES
  $ my-oclif-cli-live plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/uninstall.ts)_

## `my-oclif-cli-live plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-oclif-cli-live plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-oclif-cli-live plugins unlink
  $ my-oclif-cli-live plugins remove

EXAMPLES
  $ my-oclif-cli-live plugins unlink myplugin
```

## `my-oclif-cli-live plugins update`

Update installed plugins.

```
USAGE
  $ my-oclif-cli-live plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/update.ts)_
<!-- commandsstop -->
