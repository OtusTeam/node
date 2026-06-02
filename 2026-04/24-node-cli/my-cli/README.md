my-cli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-cli.svg)](https://npmjs.org/package/my-cli)
[![Downloads/week](https://img.shields.io/npm/dw/my-cli.svg)](https://npmjs.org/package/my-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-cli
$ my-cli COMMAND
running command...
$ my-cli (--version)
my-cli/0.0.0 linux-x64 node-v20.14.0
$ my-cli --help [COMMAND]
USAGE
  $ my-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-cli hello PERSON`](#my-cli-hello-person)
* [`my-cli hello world`](#my-cli-hello-world)
* [`my-cli help [COMMAND]`](#my-cli-help-command)
* [`my-cli plugins`](#my-cli-plugins)
* [`my-cli plugins add PLUGIN`](#my-cli-plugins-add-plugin)
* [`my-cli plugins:inspect PLUGIN...`](#my-cli-pluginsinspect-plugin)
* [`my-cli plugins install PLUGIN`](#my-cli-plugins-install-plugin)
* [`my-cli plugins link PATH`](#my-cli-plugins-link-path)
* [`my-cli plugins remove [PLUGIN]`](#my-cli-plugins-remove-plugin)
* [`my-cli plugins reset`](#my-cli-plugins-reset)
* [`my-cli plugins uninstall [PLUGIN]`](#my-cli-plugins-uninstall-plugin)
* [`my-cli plugins unlink [PLUGIN]`](#my-cli-plugins-unlink-plugin)
* [`my-cli plugins update`](#my-cli-plugins-update)

## `my-cli hello PERSON`

Say hello

```
USAGE
  $ my-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ my-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/node-cli/my-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `my-cli hello world`

Say hello world

```
USAGE
  $ my-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ my-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/node-cli/my-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `my-cli help [COMMAND]`

Display help for my-cli.

```
USAGE
  $ my-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for my-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.11/src/commands/help.ts)_

## `my-cli plugins`

List installed plugins.

```
USAGE
  $ my-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ my-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/index.ts)_

## `my-cli plugins add PLUGIN`

Installs a plugin into my-cli.

```
USAGE
  $ my-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into my-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MY_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MY_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ my-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ my-cli plugins add myplugin

  Install a plugin from a github url.

    $ my-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ my-cli plugins add someuser/someplugin
```

## `my-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ my-cli plugins inspect PLUGIN...

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
  $ my-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/inspect.ts)_

## `my-cli plugins install PLUGIN`

Installs a plugin into my-cli.

```
USAGE
  $ my-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into my-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MY_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MY_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ my-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ my-cli plugins install myplugin

  Install a plugin from a github url.

    $ my-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ my-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/install.ts)_

## `my-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ my-cli plugins link PATH [-h] [--install] [-v]

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
  $ my-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/link.ts)_

## `my-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-cli plugins unlink
  $ my-cli plugins remove

EXAMPLES
  $ my-cli plugins remove myplugin
```

## `my-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ my-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/reset.ts)_

## `my-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-cli plugins unlink
  $ my-cli plugins remove

EXAMPLES
  $ my-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/uninstall.ts)_

## `my-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-cli plugins unlink
  $ my-cli plugins remove

EXAMPLES
  $ my-cli plugins unlink myplugin
```

## `my-cli plugins update`

Update installed plugins.

```
USAGE
  $ my-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.8/src/commands/plugins/update.ts)_
<!-- commandsstop -->
