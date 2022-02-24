/**
var contracts={
	hello:{
		address:'0x38f8a8F895A68eEEd2577BFFb693a2bE4D518BB6',
		abi:''
	},
	diamonds:{
		address:"0xcbc48b5FFB10300BE089c8869734470898d5Da74",
		abi:''
	}
}
*/

var contracts={
	hello:{
		address:'0x38f8a8F895A68eEEd2577BFFb693a2bE4D518BB6'
	},
	diamonds:{
		address:'0xcbc48b5FFB10300BE089c8869734470898d5Da74'
	}
}
function loadData(callback){
	//通过合约编译后的元数据，加载对应的abi设置到contracts中
	$.getJSON("service/contracts/artifacts/Hello_metadata.json", function (result){
		contracts.hello.abi=result.output.abi;
		$.getJSON("service/contracts/artifacts/Diamonds_metadata.json", function (result){
			contracts.diamonds.abi=result.output.abi;
			callback();
		});
	});
}
