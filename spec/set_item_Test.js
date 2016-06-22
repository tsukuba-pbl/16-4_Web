describe("set_item> ", function(){
	describe("select_person_cnt> ", function(){
		beforeEach(function(){
			spyOn(console, "log");
		    var data = {};
			$('body').append("<div id='voterid'></div>");
			$("#voterid").val("example");
		})
		it("under_3", function(){
			var selected_json = {
				contender3:"333",
				contender5:"555"
			};
			localStorage.setItem('Candidate_ID',JSON.stringify(selected_json));
			set_item();
			expect(console.log).toHaveBeenCalledWith("count < 3");
		});
		it("greater_3", function(){
			var selected_json = {
				contender3:"333",
				contender4:"444",
				contender5:"555",
				contender1:"111"
			};
			localStorage.setItem('Candidate_ID',JSON.stringify(selected_json));
			set_item();
			expect(console.log).toHaveBeenCalledWith("count > 3");
		});
	});
});
