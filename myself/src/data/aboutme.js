import Mock from 'mockjs';
export var data= Mock.mock('http://g.cn', {
	'name'    : '@cname',
	'age|18-25': 100
});

export var dataImage= Mock.mock('http://img.cn', {"img":[{
	src:Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
	title:"@string"
},
{
	src:Mock.Random.image('200x100', '#666', '#FFF', 'Mock.js32'),
	title:"@string"
},
{
	src:Mock.Random.image('200x100', '#dddd', '#FFF', 'Mock.js111'),
	title:"@string"
}]
});



// export default 


