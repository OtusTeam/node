import {Command} from '@oclif/core'

export default class Greet extends Command {
  static description = 'Greet someone'

  static args = [{name: 'name'}]

  async run() {
    const {args} = this.parse(Greet)
    this.log(`Hello, ${args.name || 'world'}!`)
  }
}
