
// На два, один для API другой для бизнес логики.

// fetchData - это API Repository
// getData - Presentator.

module.exports = class Exchange {
  // Это в отдельный модуль.
  async fetchData() {
    const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await res.json()

    return Object.values(data.Valute)
  }

  async getData() {
    // Вызывает API запрос
    const list = await this.fetchData()

    // Преобразует запрос
    return list.map(item => {
      // Посчитать разницу между текущим курсом и предыдущим.
      item.Diff = +(item.Value - item.Previous).toFixed(4)

      return item
    })
  }
}


// Конфигурация проекта для тестирования утилиты tree из предыдущих заданий.
// Добиться code coverage 95%.
// Можно использовать пакет для моков файловой системы.

// 255 -> 11111111
// 254 -> 11111110
// 252 -> 11111100
