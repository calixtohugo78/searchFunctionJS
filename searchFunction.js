var filter = document.getElementById('input_search');
    var table = document.getElementById('list_table');

    function searchList() {
        var nameFilter = filter.value;
        for (var i = 0; i < table.rows.length; i++) {
            var cellContent = table.rows[i].cells[0].innerText;
            var match = cellContent.toLowerCase().indexOf(nameFilter) >= 0;
            table.rows[i].style.display = match ? '' : 'none';
        }
    };