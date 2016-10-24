function create_list(json_file) {
    var data = {};

    $.getJSON(json_file , function(data, status) {
        var checkboxContents = "";
        var ID, NAME, TITLE;
        var correct_json_flag = 0;

        checkboxContents += "<div data-role='controlgroup' style='overflow-y:scroll;height:70vh'>";

        var bookmark_list = localStorage.getItem("bookmarks");
        if(bookmark_list != null && bookmark_list.length > 1) {
            bookmark_list = bookmark_list.split(",");
        }
        $.each(data.author, function(i, item1) {
            ID = item1.presenid,
            NAME = item1.name;

            $.each (data.presen, function(j, item2) {
              if ( item1.first === 1 && item1.presenid === item2.presenid) {
                  TITLE = item2.title;
                  checkboxContents += '<li><input type="checkbox" data-theme="c" id="jsform_checkbox'  + i + '" name="contender'+(i+1)+'"'+' value="'+ID+'"/></li>'
                  checkboxContents += '<label for="jsform_checkbox' + i +'">';
                  $.each (bookmark_list, function(k, item3){
                      if(item2.presenid === bookmark_list[k]) {
                          checkboxContents +="★";
                      }
                  });
                  checkboxContents +='ID:' + ID + ' Name:' + NAME + ' Title:' + TITLE + '</label>';
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
