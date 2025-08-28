import {CheckersFabric, IType} from "./checkers";

const c200 = CheckersFabric.getChecker(IType.check200)
const chtml = CheckersFabric.getChecker(IType.checkHTML)
CheckersFabric.getChecker(IType.check200)
CheckersFabric.getChecker(IType.check200)

c200.check(
    {
        url: 'https://ya.ru',
    })
    .then((r) => console.log('c200', r))

chtml.check(
    {
        url: 'https://ya.ru',
        html: 'Вы не робот'
    })
    .then((r) => console.log('chtml', r))


