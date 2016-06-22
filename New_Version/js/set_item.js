//テキストフォームから入力されたデータを取得する
function set_item(){
    var N = 3;  //投票する人数
    var temp = {};
    var selected_id_json = {};
    var error = "";

    var voterINFO = $("#voterid").val();
    var obj = JSON.parse(voterINFO);
    data['voter_id'] = obj.voter_id.toString();
    data['voter_name'] = obj.voter_name.toString();

    temp=JSON.parse(localStorage.getItem('Candidate_ID'));
    var count = 0; //チェックしている候補者数
    //選択されているオブジェクトの値をselected_idに代入
    Object.keys(temp).forEach(function(key){
        if(temp[key] !== null){
            //3人まではオブジェクトに入れていく
            if(count < 3){
                selected_id_json["name_"+(count+1)] = temp[key];
            }
            count++;
        }
    });
    //count数を見て候補者の選択数をチェック
    if(count < 3){
        console.log("count < 3");
        error = "候補者を3名未満選んでます。候補者は3名まで選んでください";
    }else if(count > 3){
        console.log("count > 3");
        error = "候補者を4名以上選んでます。候補者は3名選んでください";
    }
    //エラーがあったらalertして終了
    if(error !== ""){
        alert(error);
        return;
    }
    //voterのデータと投票のデータのマージ
    var newdata = $.extend(data,selected_id_json);

    //LocalStorageに'Vote_Info'の名前で保存
    localStorage.setItem('Vote_Info',JSON.stringify(newdata));

    var VoteInfo = JSON.parse(localStorage.getItem('Vote_Info'));

    //QRコード表示ページに遷移
    $.mobile.changePage("#QRPage", {
        changeHash: true
    });

    //QRCodeに入れたい中身を引数に入れる。引数の型はString
    (function(){
        $('#qrcode').empty();
            new QRCode(document.getElementById('qrcode'),JSON.stringify(VoteInfo));
	})();
}
