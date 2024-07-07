function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("modTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var icon = document.getElementById(sectionId + 'Icon');
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        icon.innerHTML = "▼";
    } else {
        section.style.display = "none";
        icon.innerHTML = "►";
    }
}
