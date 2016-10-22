describe("create_list> ", function(){
	describe("correct_jsonfile> ", function(){
		beforeEach(function(){
			spyOn(console, "log");
            $('body').append("<div id='my_checkbox'></div>");
		})

		//jsonファイルに必須キーが含まれているかのテスト。
		it("correct_json_file", function() {
            var json_file = "dammy_file.json";
			create_list(json_file);
			expect(console.log).toHaveBeenCalledWith("failed_read_json");
		});
	});
});
