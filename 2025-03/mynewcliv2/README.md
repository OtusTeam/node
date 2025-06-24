mynewcliv2
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcliv2.svg)](https://npmjs.org/package/mynewcliv2)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcliv2.svg)](https://npmjs.org/package/mynewcliv2)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mynewcliv2
$ mynewcliv2 COMMAND
running command...
$ mynewcliv2 (--version)
mynewcliv2/0.0.0 linux-x64 node-v22.15.0
$ mynewcliv2 --help [COMMAND]
USAGE
  $ mynewcliv2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mynewcliv2 hello PERSON`](#mynewcliv2-hello-person)
* [`mynewcliv2 hello world`](#mynewcliv2-hello-world)
* [`mynewcliv2 help [COMMAND]`](#mynewcliv2-help-command)
* [`mynewcliv2 plugins`](#mynewcliv2-plugins)
* [`mynewcliv2 plugins add PLUGIN`](#mynewcliv2-plugins-add-plugin)
* [`mynewcliv2 plugins:inspect PLUGIN...`](#mynewcliv2-pluginsinspect-plugin)
* [`mynewcliv2 plugins install PLUGIN`](#mynewcliv2-plugins-install-plugin)
* [`mynewcliv2 plugins link PATH`](#mynewcliv2-plugins-link-path)
* [`mynewcliv2 plugins remove [PLUGIN]`](#mynewcliv2-plugins-remove-plugin)
* [`mynewcliv2 plugins reset`](#mynewcliv2-plugins-reset)
* [`mynewcliv2 plugins uninstall [PLUGIN]`](#mynewcliv2-plugins-uninstall-plugin)
* [`mynewcliv2 plugins unlink [PLUGIN]`](#mynewcliv2-plugins-unlink-plugin)
* [`mynewcliv2 plugins update`](#mynewcliv2-plugins-update)

## `mynewcliv2 hello PERSON`

Say hello

```
USAGE
  $ mynewcliv2 hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ mynewcliv2 hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/2025-03/mynewcliv2/blob/v0.0.0/src/commands/hello/index.ts)_

## `mynewcliv2 hello world`

Say hello world

```
USAGE
  $ mynewcliv2 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ mynewcliv2 hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/2025-03/mynewcliv2/blob/v0.0.0/src/commands/hello/world.ts)_

## `mynewcliv2 help [COMMAND]`

Display help for mynewcliv2.

```
USAGE
  $ mynewcliv2 help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mynewcliv2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.28/src/commands/help.ts)_

## `mynewcliv2 plugins`

List installed plugins.

```
USAGE
  $ mynewcliv2 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mynewcliv2 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/index.ts)_

## `mynewcliv2 plugins add PLUGIN`

Installs a plugin into mynewcliv2.

```
USAGE
  $ mynewcliv2 plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into mynewcliv2.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MYNEWCLIV2_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MYNEWCLIV2_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ mynewcliv2 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ mynewcliv2 plugins add myplugin

  Install a plugin from a github url.

    $ mynewcliv2 plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ mynewcliv2 plugins add someuser/someplugin
```

## `mynewcliv2 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mynewcliv2 plugins inspect PLUGIN...

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
  $ mynewcliv2 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/inspect.ts)_

## `mynewcliv2 plugins install PLUGIN`

Installs a plugin into mynewcliv2.

```
USAGE
  $ mynewcliv2 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into mynewcliv2.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MYNEWCLIV2_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MYNEWCLIV2_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ mynewcliv2 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ mynewcliv2 plugins install myplugin

  Install a plugin from a github url.

    $ mynewcliv2 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ mynewcliv2 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/install.ts)_

## `mynewcliv2 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ mynewcliv2 plugins link PATH [-h] [--install] [-v]

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
  $ mynewcliv2 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/link.ts)_

## `mynewcliv2 plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ mynewcliv2 plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mynewcliv2 plugins unlink
  $ mynewcliv2 plugins remove

EXAMPLES
  $ mynewcliv2 plugins remove myplugin
```

## `mynewcliv2 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ mynewcliv2 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/reset.ts)_

## `mynewcliv2 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ mynewcliv2 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mynewcliv2 plugins unlink
  $ mynewcliv2 plugins remove

EXAMPLES
  $ mynewcliv2 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/uninstall.ts)_

## `mynewcliv2 plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ mynewcliv2 plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mynewcliv2 plugins unlink
  $ mynewcliv2 plugins remove

EXAMPLES
  $ mynewcliv2 plugins unlink myplugin
```

## `mynewcliv2 plugins update`

Update installed plugins.

```
USAGE
  $ mynewcliv2 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.40/src/commands/plugins/update.ts)_
<!-- commandsstop -->
