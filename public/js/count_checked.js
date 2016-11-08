/*
**候補者をチェックボックスでチェックしたときに、そのチェックボックスに応じて
**ローカルストレージに保存する処理
**動的に追加したcheckboxは、.changeメソッドでは発火しないので、$(document).on を使う。
*/

var count;

$(document).on('change', 'input[type="checkbox"]',function () {
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
