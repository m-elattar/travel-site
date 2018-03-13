class person {
	constructor(_name,_age){
		this.N=_name;
		this.A=_age; 
	}
	greet(){
		console.log('hello there here is '+this.N+' and my age is '+this.A);
	}
}


module.exports = person; 