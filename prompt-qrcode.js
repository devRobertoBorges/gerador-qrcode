import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.greenBright('Digite o link para gerar o QR CODE'),
    },
    {
        name: "type",
        description: chalk.greenBright('Escolha a opção: (1- IMAGEM) // (2- TERMINAL)'),
        pattern: /^[1-2]+$/,
        message: (chalk.red("Escolha somente [1] ou [2]"))
    }
];

export default promptQRCode;