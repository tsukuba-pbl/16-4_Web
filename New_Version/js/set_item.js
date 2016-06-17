//テキストフォームから入力されたデータを取得する
function set_item(){
    var N = 3;  //投票する人数
    var temp = {};
    var selected_id = [];
    var selected_id_json = {};

    data['voter'] = $("#voterid").val();

    temp=JSON.parse(localStorage.getItem('Candidate_ID'));
    var count = 0; //チェックしている候補者数
    //選択されているオブジェクトの値をselected_idに代入
    Object.keys(temp).forEach(function(key){
        if(temp[key] !== null){
            selected_id[count] = temp[key];
            count++;
        }
    });
    //{"name_1": id, "name_2": id, "name_3": null}を作成
    for(var i = 0;i < N;i++){
        //IDが入っている場合
        if(selected_id[i] !== undefined){
            selected_id_json["name_"+(i+1)] = selected_id[i];
        //IDが入っていない場合(undefined)
        }else{
            selected_id_json["name_"+(i+1)] = null;
        }
        //console.log(selected_id_json["name_"+i]);
    }
    //voterのデータと投票のデータのマージ
    var newdata = $.extend(data,selected_id_json);

    //LocalStorageに'Vote_Info'の名前で保存
    localStorage.setItem('Vote_Info',JSON.stringify(newdata));

    var VoteInfo = JSON.parse(localStorage.getItem('Vote_Info'));

    //QRページへ遷移する
    if(count == N) {
      $.mobile.changePage("#QRPage", {
          changeHash: true
      });
    }

    else {
      alert("現在選択している候補者は"+count+"名です。"+N+"名選んでください");
    }

    //QRCodeに入れたい中身を引数に入れる。引数の型はString
    (function(){
      $('#qrcode').empty();
		new QRCode(document.getElementById('qrcode'),JSON.stringify(VoteInfo));
	})();
}
