my-cli-16-04-2026
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-cli-16-04-2026.svg)](https://npmjs.org/package/my-cli-16-04-2026)
[![Downloads/week](https://img.shields.io/npm/dw/my-cli-16-04-2026.svg)](https://npmjs.org/package/my-cli-16-04-2026)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-cli-16-04-2026
$ my-cli-16-04-2026 COMMAND
running command...
$ my-cli-16-04-2026 (--version)
my-cli-16-04-2026/0.0.0 linux-x64 node-v22.21.1
$ my-cli-16-04-2026 --help [COMMAND]
USAGE
  $ my-cli-16-04-2026 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-cli-16-04-2026 hello PERSON`](#my-cli-16-04-2026-hello-person)
* [`my-cli-16-04-2026 hello world`](#my-cli-16-04-2026-hello-world)
* [`my-cli-16-04-2026 help [COMMAND]`](#my-cli-16-04-2026-help-command)
* [`my-cli-16-04-2026 plugins`](#my-cli-16-04-2026-plugins)
* [`my-cli-16-04-2026 plugins add PLUGIN`](#my-cli-16-04-2026-plugins-add-plugin)
* [`my-cli-16-04-2026 plugins:inspect PLUGIN...`](#my-cli-16-04-2026-pluginsinspect-plugin)
* [`my-cli-16-04-2026 plugins install PLUGIN`](#my-cli-16-04-2026-plugins-install-plugin)
* [`my-cli-16-04-2026 plugins link PATH`](#my-cli-16-04-2026-plugins-link-path)
* [`my-cli-16-04-2026 plugins remove [PLUGIN]`](#my-cli-16-04-2026-plugins-remove-plugin)
* [`my-cli-16-04-2026 plugins reset`](#my-cli-16-04-2026-plugins-reset)
* [`my-cli-16-04-2026 plugins uninstall [PLUGIN]`](#my-cli-16-04-2026-plugins-uninstall-plugin)
* [`my-cli-16-04-2026 plugins unlink [PLUGIN]`](#my-cli-16-04-2026-plugins-unlink-plugin)
* [`my-cli-16-04-2026 plugins update`](#my-cli-16-04-2026-plugins-update)

## `my-cli-16-04-2026 hello PERSON`

Say hello

```
USAGE
  $ my-cli-16-04-2026 hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ my-cli-16-04-2026 hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/24-node-cli/my-cli-16-04-2026/blob/v0.0.0/src/commands/hello/index.ts)_

## `my-cli-16-04-2026 hello world`

Say hello world

```
USAGE
  $ my-cli-16-04-2026 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ my-cli-16-04-2026 hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/24-node-cli/my-cli-16-04-2026/blob/v0.0.0/src/commands/hello/world.ts)_

## `my-cli-16-04-2026 help [COMMAND]`

Display help for my-cli-16-04-2026.

```
USAGE
  $ my-cli-16-04-2026 help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for my-cli-16-04-2026.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.44/src/commands/help.ts)_

## `my-cli-16-04-2026 plugins`

List installed plugins.

```
USAGE
  $ my-cli-16-04-2026 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ my-cli-16-04-2026 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.61/src/commands/plugins/index.ts)_

## `my-cli-16-04-2026 plugins add PLUGIN`

Installs a plugin into my-cli-16-04-2026.

```
USAGE
  $ my-cli-16-04-2026 plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into my-cli-16-04-2026.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MY_CLI_16_04_2026_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MY_CLI_16_04_2026_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ my-cli-16-04-2026 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ my-cli-16-04-2026 plugins add myplugin

  Install a plugin from a github url.

    $ my-cli-16-04-2026 plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ my-cli-16-04-2026 plugins add someuser/someplugin
```

## `my-cli-16-04-2026 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ my-cli-16-04-2026 plugins inspect PLUGIN...

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
  $ my-cli-16-04-2026 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.61/src/commands/plugins/inspect.ts)_

## `my-cli-16-04-2026 plugins install PLUGIN`

Installs a plugin into my-cli-16-04-2026.

```
USAGE
  $ my-cli-16-04-2026 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into my-cli-16-04-2026.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MY_CLI_16_04_2026_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MY_CLI_16_04_2026_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ my-cli-16-04-2026 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ my-cli-16-04-2026 plugins install myplugin

  Install a plugin from a github url.

    $ my-cli-16-04-2026 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ my-cli-16-04-2026 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.61/src/commands/plugins/install.ts)_

## `my-cli-16-04-2026 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ my-cli-16-04-2026 plugins link PATH [-h] [--install] [-v]

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
  $ my-cli-16-04-2026 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.61/src/commands/plugins/link.ts)_

## `my-cli-16-04-2026 plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-cli-16-04-2026 plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-cli-16-04-2026 plugins unlink
  $ my-cli-16-04-2026 plugins remove

EXAMPLES
  $ my-cli-16-04-2026 plugins remove myplugin
```

## `my-cli-16-04-2026 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ my-cli-16-04-2026 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.61/src/commands/plugins/reset.ts)_

## `my-cli-16-04-2026 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-cli-16-04-2026 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-cli-16-04-2026 plugins unlink
  $ my-cli-16-04-2026 plugins remove

EXAMPLES
  $ my-cli-16-04-2026 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.61/src/commands/plugins/uninstall.ts)_

## `my-cli-16-04-2026 plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-cli-16-04-2026 plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-cli-16-04-2026 plugins unlink
  $ my-cli-16-04-2026 plugins remove

EXAMPLES
  $ my-cli-16-04-2026 plugins unlink myplugin
```

## `my-cli-16-04-2026 plugins update`

Update installed plugins.

```
USAGE
  $ my-cli-16-04-2026 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.61/src/commands/plugins/update.ts)_
<!-- commandsstop -->
