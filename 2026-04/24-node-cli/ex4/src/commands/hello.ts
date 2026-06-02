import { Command } from '@oclif/core'

export default class Greet extends Command {
  static args = [{name: 'name'}]

  static description = 'Greet someone'

  async run() {
    const {args} = this.parse(Greet)
    this.log(`Hello, ${args.name || 'world'}!`)
  }
}
