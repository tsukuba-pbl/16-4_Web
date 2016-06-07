describe("TestSample> ", function(){
	describe("Logic> ", function(){
		it("multiNumber", function(){
			var target = new Logic();
			var num = 3;
			var expected = 10;

			var result = target.squaredNumber(num);

			expect(expected).toEqual(result);
		})
	});
});
describe('Hello Test', () => {
    it('Test', () => {
        var targetText = 'ふがふが'; // ここを変更
        var expectText = 'ふがふが';
        expect(expectText).toBe(targetText);
    });
});
