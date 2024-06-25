const quotes = [
    {
        quote: '"' + "사람이 자신의 몸이 가질 수 있는 아름다움과 강함을 알지 못하고 늙어 버린다는 것은 안타까운 일이다" + '"',

        author: "소크라테스"
    },

    {
        quote: '"' + "우리가 반복적으로 하는 것이 우리를 만든다. 그러므로 우수하다는 것은 행동이 아닌 습관이다" + '"',

        author: "아리스토텔레스"
    },

    {
        quote: '"' + "운동은 몸의 건강을 위해 가장 중요한 것일 뿐 아니라, 다이나믹하고 창조적인 지적 활동을 위한 기반이기도 한다" + '"',

        author: "존 F. 케네디"
    },

    {
        quote: '"' + "나는 운동을 한 후 후회한 적 없다. 하지만 운동을 하지 않은 후에는 언제나 후회했다" + '"',

        author: "작자 미상"
    },

    {
        quote: '"' + "운동을 하고 싶을 때 하는 사람은 운동을 하기 싫어도 하는 사람을 이길 수 없다" + '"',

        author: "앤드류 테이트"
    },

    {
        quote: '"' + "우리가 늙어서 운동을 그만 두는 것이 아니라, 우리가 운동을 그만두기 때문에 늙는 것이다" + '"',

        author: "케네스 쿠퍼"
    }
]

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
