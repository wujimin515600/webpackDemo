require('jquery')
import '../css/style.css'
// import img from '../img/1.jpg'
import img1 from '../img/recom2.png'
let list = []
list.push(img1)
console.log('img1',img1)
$('#img').html(dom())

function dom(){
	let str = '';
	for (let i = 0; i < list.length; i++) {
		str += `<img src=${list[i]} >`
	}
	return str;
}
// console.log('sd',sd)