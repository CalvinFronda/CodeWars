function maskify(cc){
	if(cc.length < 4){
  	return cc
}

	return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}


 maskify("123332")