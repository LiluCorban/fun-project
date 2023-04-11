import card1 from "../Assets/img/card1.png"
import card2 from "../Assets/img/card2.png"
import card3 from "../Assets/img/card3.png"


let state = {
    header:{
        links:[
            {name:"PARTIES",
            address: "/main"},
            {name:"HOW IT WORKS",
            address: "/how-it-works"},
            {name: "PRICING",
             address: "/pricing"},
            {name: "BLOG",
             address: "/blog"},
            {name: "RESOURCES",
                address: "/resources"},
            {name: "LOG IN",
                address: "/login"}

              ]
    },
    main: {
            section3:
            [
                {
                    img: card1,
                    head: "Dinner for Two",
                    description: "A romantic night in with your Valentine.",
                    buttons: ["DATE NIGHT", "ANNIVERSARY", "FORMAL", "MILESTONE"]
                },
                {
                    img: card2,
                    head: "Dinner for Two",
                    description: "A special brunch to celebrate Valentine's Day with the lovely ladies in your life.",
                    buttons: ["BRUNCH", "CASUAL", "SPECIAL EVENT", "WINTER"]
                },
                {
                    img: card3,
                    head: "Sushi Night",
                    description: "Our take on an evening rolling your own sushi, sipping tea and sake, and basking in a serene setting inspired by Japan.",
                    buttons: ["SIMPLE", "FALL", "FORMAL", "SPRING"]
                },
                {
                    img: card1,
                    head: "Fa La La La Festivities",
                    description: "Our take on an evening rolling your own sushi, sipping tea and sake, and basking in a serene setting inspired by Japan.",
                    buttons: ["SIMPLE", "FALL", "FORMAL", "SPRING"]
                },

            ]
    }

}

export default state;