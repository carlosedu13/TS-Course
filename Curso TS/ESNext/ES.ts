function contagemRegressiva(inicio: number = 3, fim: number = inicio - 5): void {
    console.log(inicio);
    while(inicio >= fim){
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}

contagemRegressiva();
