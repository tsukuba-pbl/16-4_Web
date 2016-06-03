//テキストフォームから入力されたデータを取得する
function set_item(){
  var data = {};

  data['voter'] = $("#voterid").val();
  data['name_1'] = $("#contender_1").val();
  data['name_2'] = $("#contender_2").val();
  data['name_3'] = $("#contender_3").val();
  localStorage.setItem('Vote_Info',JSON.stringify(data));

  var VoterInfo = JSON.parse(localStorage.getItem('Vote_Info'));

  //QRページへ遷移する
  $.mobile.changePage("#QRPage", {
    changeHash: true
  });

  //QRCodeに入れたい中身を引数に入れる。引数の型はString
  (function(){
				new QRCode(document.getElementById('qrcode'),JSON.stringify(VoterInfo));
			}
	)();
}
