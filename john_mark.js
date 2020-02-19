/*      var markH = 5.6;
var johnH = 5.10;
var markM = 60;
var johnM = 65;
var BMIj = johnM/johnH;
var BMIm = markM/markM;
boolean = BMIj > BMIm;
console.log(boolean);               */





var names = ['vakul','ramu','latha','nikil','suvarna'];
//names.push('raju');

//names.pop('raju');
//names.pop('suvarna');
names.unshift('mr.');
names.shift();


console.log(names);
console.log(names[1]);
console.log(names.length);
console.log(names.indexOf('latha'));
console.log(names.indexOf(23));
console.log(names.indexOf('developer'));
console.log(names.indexOf('designer'));
var isDesigner = names.indexOf('designer')===-1? 'names is NOT a designer': 'vakul IS a designer';
console.log(isDesigner);





