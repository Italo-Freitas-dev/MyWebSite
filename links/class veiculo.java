class veiculo{
	String cor;
	String marca;
	String dono;
	Int marchas;

	void pedalar(){}
	void parar(){}
	void definirVelocidade(){}
	void seEquilibrar(){}

	void marchaAcima(){}
	void marchaAbaixo(){}
}

class bicicleta extends veiculo{
	int numeroDeRodas = 2;

	void seEquilibrar(){}
}

class triciclo extends veiculo{
	int numeroDeRodas = 3;
}