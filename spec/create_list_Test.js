describe("create_list> ", function(){
	describe("correct_jsonfile> ", function(){
		beforeEach(function(){
			spyOn(console, "log");
            $('body').append("<div id='my_checkbox'></div>");
		})

		//jsonファイルが存在しないときに例外になるテスト
		it("not-exist_json_file", function() {
            var json_file = "dammy_file.json";
			expect(create_list(json_file)).toThrow;
		});
	});
});
