import Mock from 'mockjs';
export var data= Mock.mock('http://g.cn', {
	'name'    : '@cname',
	'age|18-25': 100
});

export var dataImage= Mock.mock('http://img.cn', {"img":[
	Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
	Mock.Random.image('200x100', '#666', '#FFF', 'Mock.js32'),
	Mock.Random.image('200x100', '#dddd', '#FFF', 'Mock.js111'),
]
});



// export default 


