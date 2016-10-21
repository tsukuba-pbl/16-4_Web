function create_list() {
    var data = {};

    $.getJSON("data.json" , function(data) {
        var checkboxContents = "", len = data.length;
        var ID, NAME, TITLE;

        checkboxContents += "<div data-role='controlgroup'>";

        for (var i=0; i<len; i++) {
            ID = data[i].id,
            NAME = data[i].name,
            TITLE = data[i].title;

            checkboxContents += '<li><input type="checkbox" data-theme="c" id="jsform_checkbox'  + i + '" name="contender'+(i+1)+'"'+' value="'+ID+'"/></li>'
            checkboxContents += '<label for="jsform_checkbox' + i +'">' + 'ID:' + ID + ' Name:' + NAME + ' Title:' + TITLE + '</label>';
        }

        checkboxContents += "</div>";
        $("#my_checkbox").empty().append(checkboxContents).trigger("create");

        $(document).ready(function() {
            var CandidateID = {};
            var count;
            $("input[type='checkbox']").change(function () {
                if ($(this).is(":checked")) {
                    count = $(this).attr('name');
                    CandidateID[count] = $(this).val();
                }
                else {
                    count = $(this).attr('name');
                    delete CandidateID[count];
                }
                localStorage.setItem('Candidate_ID',JSON.stringify(CandidateID));
            });
        });
    });
}
