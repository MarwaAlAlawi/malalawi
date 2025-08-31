/*!
* Start Bootstrap - Shop Item v5.0.3 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




/* all the JS does is update current top item index */
const S = document.querySelector('section').style /* wrapper style */, 
			N = +S.getPropertyValue('--n') /* number of items */;

let k = +S.getPropertyValue('--k') /* idx of current top item */;

addEventListener('click', e => {
	let v = +e.target.dataset.inc /* value (±1) to change top idx by */;
	if(v) S.setProperty('--k', k = ((k + v + N)%N))
})