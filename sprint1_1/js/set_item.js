//TEXTフォームのデータを取得してJSONでWebStorageに保存
function set_item(){
  var data ={};

  data['name_1'] = $("#contender_1").val();
  data['name_2'] = $("#contender_2").val();
  data['name_3'] = $("#contender_3").val();

  localStorage.setItem('Candidate',JSON.stringify(data));
}
