function create_list(json_file) {
    var data = {};
    localStorage.removeItem("Candidate_ID");
    localStorage.removeItem("Vote_Info");

    $.getJSON(json_file , function(data, status) {
        var checkboxContents = "";
        var ID, NAME, TITLE;
        var correct_json_flag = 0;

        checkboxContents += "<div data-role='controlgroup'>";

        $.each(data.author, function(i, item1) {
            ID = item1.presenid,
            NAME = item1.name;

            $.each (data.presen, function(j, item2) {
              if ( item1.first === 1 && item1.presenid === item2.presenid) {
                  TITLE = item2.title;
                  checkboxContents += '<li><input type="checkbox" data-theme="c" id="jsform_checkbox'  + i + '" name="contender'+(i+1)+'"'+' value="'+ID+'"/></li>'
                  checkboxContents += '<label for="jsform_checkbox' + i +'">' + 'ID:' + ID + ' Name:' + NAME + ' Title:' + TITLE + '</label>';
              }
            });
        });

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
    })
    .fail(function() {
      $("#my_checkbox").append("<a>読み込みError</a>");
      return false;
    });
}
