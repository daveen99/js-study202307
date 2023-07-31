
/*
    <nav class = "gnb" id = "global-nav">
        <ul class = "list-item">
            <li class = "list-item_food" titel = "korean"> 제육볶음 </li>
            <li class = "list-item_food" titel = "western"> 까르보나라 </li>
            <li class = "list-item_food" titel = "japanese"> 스시 </li>
        </ul>
    </nav>
*/

let = nav1, ul1, li1, li2, li3;
nav1 = {
    tagName: `NAV`,
    attributes: {
        id: `global-nav`,
        class: `gnb`
    },
    classList: ['gnb'],
    parentNode: body,
    children: [ul1]
};
ul1 = {
    tagName: `UL`,
    attributes: {
        class: `list-item`
    },
    classList: ['list-item'],
    parentNode: nav1,
    children: [li1, li2, li3]
};
li1 = {
    tagName: `LI`,
    attributes: {
        class: `list-item_food`,
        title: `korean`
    },
    classList: ['list-item-food'],
    textContent: `제육볶음`,
    parentNode: ul1,
    nextElementSibling: li2
};
li2 = {
    tagName: `LI`,
    attributes: {
        class: `list-item_food`,
        title: `western`
    },
    classList: ['list-item-food'],
    textContent: `까르보나라`,
    parentNode: ul1,
    nextElementSibling: li3,
    previousElementSibling: li1
};
li3 = {
    tagName: `LI`,
    attributes: {
        class: `list-item_food`,
        title: `japanese`
    },
    classList: ['list-item-food'],
    textContent: `스시`,
    parentNode: ul1
};