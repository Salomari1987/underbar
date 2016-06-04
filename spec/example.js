var myAdd = function (b) {
	return this.a + b;
}

var makeContext = function(){
	
	return {a: 100,
			add: myAdd}
}

var newContext = makeContext()
console.log(newContext.add(2));


_.invoke(["string"], "replace", ["t", "r"]);