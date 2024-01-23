export const tableContentRows = {
    predefinedListTitle: [
        "I Know Why The Caged Bird Sings by Maya Angelou.",
        "East of Eden by John Steinbeck.",
        "The Sun Also Rises by Ernest Hemingway.",
        "Do Androids Dream of Electric Sheep? by Philip K. Dick.",
        "The Curious Incident of the Dog in the Night-Time by Mark Haddon.",
        "Cloudy with a Chance of Meatballs by Judi Barrett.",
        "Pride and Prejudice and Zombies by Seth Grahame-Smith.",
        "The House of Mirth by Edith Wharton.",
        "Are You There, Vodka? It's Me, Chelsea by Chelsea Handler.",
        "And Then There Were None by Agatha Christie.",
        "Their Eyes Were Watching God by Zora Neale Hurston.",
        "The Devil Wears Prada by Lauren Weisberger.",
        "Brave New World by Aldous Huxley.",
        "Bury My Heart at Wounded Knee by Dee Brown.",
        "The Man Who Was Thursday by G.K. Chesterton.",
        "Love in the Time of Cholera by Gabriel García Márquez.",
        "Buddy Holly Is Alive and Well on Ganymede by Bradley Denton.",
        "Everyone Poops by Taro Gomi.",
        "As I Lay Dying by William Faulkner.",
        "All Quiet on the Western Front by Erich Maria Remarque.",
        "The Particular Sadness of Lemon Cake by Aimee Bender.",
        "And Then There Were None by Agatha Christie.",
        "Fight Club by Chuck Palahniuk.",
        "The Man Who Was Thursday: A Nightmare by G.K. Chesterton.",
        "Hard-Boiled Wonderland and the End of the World by Haruki Murakami.",
        "The Catcher in the Rye by J.D. Salinger.",
        "The Moon Is a Harsh Mistress by Robert A. Heinlein.",
        "The Haunted Vagina by Carlton Mellick III.",
        "Fear and Loathing in Las Vegas by Hunter S. Thompson.",
        "American Psycho by Bret Easton Ellis.",
        "Requiem for a Dream by Hubert Selby Jr.",
        "The Importance of Being Earnest by Oscar Wilde.",
        "The Electric Kool-Aid Acid Test by Tom Wolfe.",
        "Brave New World by Aldous Huxley.",
    ],
    predefinedListData: [
        "January 9th, 2024 at 06:00 p.m.",
        "January 8th, 2024 at 05:00 p.m.",
        "January 8th, 2024 at 04:00 p.m.",
        "January 7th, 2024 at 03:00 p.m.",
        "January 7th, 2024 at 02:00 p.m.",
        "January 6th, 2024 at 01:00 p.m.",
        "January 6th, 2024 at 12:00 p.m.",
        "January 5th, 2024 at 07:00 p.m.",
        "January 5th, 2024 at 06:00 p.m.",
        "January 4th, 2024 at 05:00 p.m.",
        "January 4th, 2024 at 04:00 p.m.",
        "January 3th, 2024 at 03:00 p.m.",
        "January 3th, 2024 at 02:00 p.m.",
        "January 2th, 2024 at 01:00 p.m.",
        "January 2th, 2024 at 12:00 p.m.",
        "January 1th, 2024 at 12:00 p.m.",
        "January 1th, 2024 at 11:00 a.m.",
        "December 30th, 2023 at 06:00 p.m.",
        "December 30th, 2023 at 05:00 p.m.",
        "December 30th, 2023 at 04:00 p.m.",
        "December 29th, 2023 at 03:00 p.m.",
        "December 29th, 2023 at 02:00 p.m.",
        "December 28th, 2023 at 01:00 p.m.",
        "December 28th, 2023 at 12:00 p.m.",
        "December 27th, 2023 at 07:00 p.m.",
        "December 27th, 2023 at 06:00 p.m.",
        "December 27th, 2023 at 05:00 p.m.",
        "December 26th, 2023 at 04:00 p.m.",
        "December 26th, 2023 at 03:00 p.m.",
        "December 26th, 2023 at 02:00 p.m.",
        "December 26th, 2023 at 01:00 p.m.",
        "December 25th, 2023 at 05:00 p.m.",
        "December 25th, 2023 at 04:00 p.m.",
        "December 25th, 2023 at 03:00 p.m.",
    ],
    predefinedListVisits: [
        "200",
        "100",
        "90",
        "80",
        "400",
        "300",
        "200",
        "100",
        "90",
        "80",
        "400",
        "300",
        "200",
        "100",
        "90",
        "80",
        "300",
        "200",
        "100",
        "90",
        "80",
        "400",
        "300",
        "200",
        "100",
        "90",
        "80",
        "400",
        "300",
        "200",
        "100",
        "90",
        "80",
        "300",
    ],
};

const tableBody = document.getElementById("tablePostManager").getElementsByTagName('tbody')[0];

for (let index = 0; index < tableContentRows.predefinedListTitle.length; index++) {
    const newRow = tableBody.insertRow(index);

    const columnTitle = newRow.insertCell(0);
    const columnData = newRow.insertCell(1);
    const columnVisits = newRow.insertCell(2);
    const columnPencil = newRow.insertCell(3);
    const columnTrashCan = newRow.insertCell(4);

    columnTitle.className = "tableTitle";
    columnTitle.setAttribute("data-select", "title");
    columnTitle.textContent = tableContentRows.predefinedListTitle[index] || '';

    columnData.className = "data";
    columnData.setAttribute("data-select", "data");
    columnData.textContent = tableContentRows.predefinedListData[index] || '';

    columnVisits.className = "visits";
    columnVisits.setAttribute("data-select", "visits");
    columnVisits.textContent = tableContentRows.predefinedListVisits[index] || '';

    columnPencil.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    columnTrashCan.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
}
