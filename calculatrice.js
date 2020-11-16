function afficherCalculatrice() {




    const mainContainer = document.querySelector('section');
    mainContainer.innerHTML = '';

    const table = document.createElement('table');
    table.border = "1";


    const rangee1 = document.createElement('tr');

    const colonneEntree = document.createElement('td');
    colonneEntree.style.colspan = "3";

    const output = document.createElement('input');
    output.id = "output";

    const colonneButtonEffacer = document.createElement('td');

    const buttonEffacer = document.createElement('button');
    buttonEffacer.onclick = "effacer()";
    buttonEffacer.textContent = "c";


    const rangee2 = document.createElement('tr');
    const colonneButtonAfficher1 = document.createElement('td');
    const buttonAfficher1 = document.createElement('button');
    buttonAfficher1.onclick = "afficher(1)";
    buttonAfficher1.textContent = "1";

    const colonneButtonAfficher2 = document.createElement('td');
    const buttonAfficher2 = document.createElement('button');
    buttonAfficher2.onclick = "afficher(2)";
    buttonAfficher2.textContent = "2";

    const colonneButtonAfficher3 = document.createElement('td');
    const buttonAfficher3 = document.createElement('button');
    buttonAfficher3.onclick = "afficher(3)";
    buttonAfficher3.textContent = "3";

    const colonneButtonAfficherPlus = document.createElement('td');
    const buttonAfficherPlus = document.createElement('button');
    buttonAfficherPlus.onclick = "afficher(+)";
    buttonAfficherPlus.textContent = "+";



    const rangee3 = document.createElement('tr');

    const colonneButtonAfficher4 = document.createElement('td');
    const buttonAfficher4 = document.createElement('button');
    buttonAfficher4.onclick = "afficher(4)";
    buttonAfficher4.textContent = "4";
    5

    const colonneButtonAfficher5 = document.createElement('td');
    const buttonAfficher5 = document.createElement('button');
    buttonAfficher5.onclick = "afficher(5)";
    buttonAfficher5.textContent = "5";

    const colonneButtonAfficher6 = document.createElement('td');
    const buttonAfficher6 = document.createElement('button');
    buttonAfficher6.onclick = "afficher(6)";
    buttonAfficher6.textContent = "6";

    const colonneButtonAfficherMoins = document.createElement('td');
    const buttonAfficherMoins = document.createElement('button');
    buttonAfficherMoins.onclick = "afficher(-)";
    buttonAfficherMoins.textContent = "-";


    const rangee4 = document.createElement('tr');

    const colonneButtonAfficher7 = document.createElement('td');
    const buttonAfficher7 = document.createElement('button');
    buttonAfficher7.onclick = "afficher(7)";
    buttonAfficher7.textContent = "7";

    const colonneButtonAfficher8 = document.createElement('td');
    const buttonAfficher8 = document.createElement('button');
    buttonAfficher8.onclick = "afficher(8)";
    buttonAfficher8.textContent = "8";

    const colonneButtonAfficher9 = document.createElement('td');
    const buttonAfficher9 = document.createElement('button');
    buttonAfficher9.onclick = "afficher(9)";
    buttonAfficher9.textContent = "9";

    const colonneButtonAfficherFois = document.createElement('td');
    const buttonAfficherFois = document.createElement('button');
    buttonAfficherFois.onclick = "afficher(*)";
    buttonAfficherFois.textContent = "*";


    const rangee5 = document.createElement('tr');

    const colonneButtonAfficherPoint = document.createElement('td');
    const buttonAfficherPoint = document.createElement('button');
    buttonAfficherPoint.onclick = "afficher(.)";
    buttonAfficherPoint.textContent = ".";

    const colonneButtonAfficher0 = document.createElement('td');
    const buttonAfficher0 = document.createElement('button');
    buttonAfficher0.onclick = "afficher(0)";
    buttonAfficher0.textContent = "0";

    const colonneButtonCalculer = document.createElement('td');
    const buttonCalculer = document.createElement('button');
    buttonCalculer.onclick = "calculer";
    buttonCalculer.textContent = "=";

    const colonneButtonAfficherDiviser = document.createElement('td');
    const buttonAfficherDiviser = document.createElement('button');
    buttonAfficherDiviser.onclick = "afficher(/)";
    buttonAfficherDiviser.textContent = "/";


    mainContainer.appendChild(table);
    table.appendChild(rangee1);
    table.appendChild(rangee2);
    table.appendChild(rangee3);
    table.appendChild(rangee4);
    table.appendChild(rangee5);

    rangee1.appendChild(colonneEntree);
    colonneEntree.appendChild(output);
    rangee1.appendChild(colonneButtonEffacer);
    colonneButtonEffacer.appendChild(buttonEffacer);

    rangee2.appendChild(colonneButtonAfficher1);
    colonneButtonAfficher1.appendChild(buttonAfficher1);
    rangee2.appendChild(colonneButtonAfficher2);
    colonneButtonAfficher2.appendChild(buttonAfficher2);
    rangee2.appendChild(colonneButtonAfficher3);
    colonneButtonAfficher3.appendChild(buttonAfficher3);
    rangee2.appendChild(colonneButtonAfficherPlus);
    colonneButtonAfficherPlus.appendChild(buttonAfficherPlus);

    rangee3.appendChild(colonneButtonAfficher4);
    colonneButtonAfficher4.appendChild(buttonAfficher4);
    rangee3.appendChild(colonneButtonAfficher5);
    colonneButtonAfficher5.appendChild(buttonAfficher5);
    rangee3.appendChild(colonneButtonAfficher6);
    colonneButtonAfficher6.appendChild(buttonAfficher6);
    rangee3.appendChild(colonneButtonAfficherMoins);
    colonneButtonAfficherMoins.appendChild(buttonAfficherMoins);

    rangee4.appendChild(colonneButtonAfficher7);
    colonneButtonAfficher7.appendChild(buttonAfficher7);
    rangee4.appendChild(colonneButtonAfficher8);
    colonneButtonAfficher8.appendChild(buttonAfficher8);
    rangee4.appendChild(colonneButtonAfficher9);
    colonneButtonAfficher9.appendChild(buttonAfficher9);
    rangee4.appendChild(colonneButtonAfficherFois);
    colonneButtonAfficherFois.appendChild(buttonAfficherFois);

    rangee5.appendChild(colonneButtonAfficherPoint);
    colonneButtonAfficherPoint.appendChild(buttonAfficherPoint);
    rangee5.appendChild(colonneButtonAfficher0);
    colonneButtonAfficher0.appendChild(buttonAfficher0);
    rangee5.appendChild(colonneButtonCalculer);
    colonneButtonCalculer.appendChild(buttonCalculer);
    rangee5.appendChild(colonneButtonAfficherDiviser);
    colonneButtonAfficherDiviser.appendChild(buttonAfficherDiviser);

}

function calculer() {
    let a = document.getElementById("output").value;
    let b = eval(a);
    document.getElementById("output").value = b;
}

function afficher(val) {
    document.getElementById("output").value += val;
}

function effacer() {
    document.getElementById("output").value = "";
}
afficherCalculatrice();