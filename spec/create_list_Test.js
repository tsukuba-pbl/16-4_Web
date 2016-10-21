describe("create_list> ", function(){
	describe("correct_jsonfile> ", function(){
		beforeEach(function(){
			spyOn(console, "log");
		});

		//QRコードが入力されていない場合のテストコード。
		it("correct_json_file", function() {
			create_list();
			expect(console.log).toHaveBeenCalledWith("success_json_file");
		});
	});
});
