import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});
app.post('/imc', (req: Request, res: Response) => {
    //res.send('seja bem vindo a calculadora IMC');
    const { name, age, height, weight } = req.body;

    const imc = weight / (height * height);
    const imcAccurency = parseFloat(imc.toFixed(2));
    let status = "";

    //mudaça da mensagem de status
    if (imcAccurency < 18.5) {
        status = "Abaixo do normal";
    } else if (imcAccurency >= 18.5 && imcAccurency < 25) {
        status = "Peso normal";
    } else if (imcAccurency >= 25 && imcAccurency < 30) {
        status = "Peso em excesso";
    } else {
        status = "OBESO";
    }

    res.json({
        name,
        age,
        height,
        weight,
        imc: imcAccurency,
        status
    });
});

app.listen(port, () => {
    console.log(`rodando na porta: ${port}`);
});