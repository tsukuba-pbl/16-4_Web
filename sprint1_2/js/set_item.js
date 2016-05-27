//TEXTフォームのデータを取得してJSONでWebStorageに保存
function set_item(){
  var data ={};

  data['name_1'] = $("#contender_1").val();
  data['name_2'] = $("#contender_2").val();
  data['name_3'] = $("#contender_3").val();

  localStorage.setItem('Candidate',JSON.stringify(data));

  var CandidateInfo = JSON.parse(localStorage.getItem('Candidate'));
  $.mobile.changePage("#QRPage", {
    changeHash: true
  });

//QRCodeに入れたい中身を引数に入れる。引数の型はString
  (function(){
				new QRCode(document.getElementById('qrcode'),JSON.stringify(CandidateInfo));
			}
	)();
}
