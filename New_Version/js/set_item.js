//テキストフォームから入力されたデータを取得する
function set_item(){
   var temp = {};

  data['Voter_ID'] = $("#voterid").val();

  temp=JSON.parse(localStorage.getItem('Candidate_ID'));

  var newdata = $.extend(data,temp);

  localStorage.setItem('Vote_Info',JSON.stringify(newdata));

  var VoteInfo = JSON.parse(localStorage.getItem('Vote_Info'));

  //QRページへ遷移する
  $.mobile.changePage("#QRPage", {
    changeHash: true
  });

  //QRCodeに入れたい中身を引数に入れる。引数の型はString
  (function(){
				new QRCode(document.getElementById('qrcode'),JSON.stringify(VoteInfo));
			}
	)();
}
