class SentenceIterator {
  constructor(sentence) {
      this.words = sentence.split(' ');
      this.index = 0;
  }

  next() {
      if (this.index < this.words.length) {
          return { value: this.words[this.index++], done: false };
      } else {
          return { value: undefined, done: true };
      }
  }

  [Symbol.iterator]() {
      return this;
  }
}

const sentence = "This is an example sentence";
const sentenceIter = new SentenceIterator(sentence);

for (let word of sentenceIter) {
  console.log(word);
}
