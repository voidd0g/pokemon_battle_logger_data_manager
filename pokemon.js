module.exports = class Pokemon
{
	constructor(json)
	{
		this.pokedex = json["pokedex"];
		this.form = json["form"];
		this.name = json["name"];
		this.type1 = json["type1"];
		this.type2 = json["type2"];
		this.weight10 = json["weight10"];
		this.bshp = json["bshp"];
		this.bsatk = json["bsatk"];
		this.bsdef = json["bsdef"];
		this.bssat = json["bssat"];
		this.bssdf = json["bssdf"];
		this.bsspd = json["bsspd"];
	}

	get id(){
		return `${this.pokedex}-${this.form ?? 0}`;
	}

	get data(){
		return {
			"pokedex": this.pokedex,
			"form": this.form ?? 0,
			"name": this.name,
			"type1": this.type1,
			"type2": this.type2 ?? 0,
			"weight10": this.weight10,
			"bshp": this.bshp,
			"bsatk": this.bsatk,
			"bsdef": this.bsdef,
			"bssat": this.bssat,
			"bssdf": this.bssdf,
			"bsspd": this.bsspd,
		};
	}
}