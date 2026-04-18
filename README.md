# 🔐 Gerador de Senhas e QR Code (CLI)

Projeto desenvolvido em Node.js que permite gerar **senhas seguras** e **QR Codes** diretamente pelo terminal.

---

## 🚀 Funcionalidades

- Geração de senhas seguras  
- Personalização da senha via `.env`  
- Geração de QR Code a partir de texto ou links  
- Execução simples pelo terminal  

---

## 🛠️ Tecnologias Utilizadas

- Node.js  
- JavaScript  
- Bibliotecas NPM (`qrcode`, `prompt`, `chalk` etc.)  

---

## ▶️ Como usar

Execute o projeto:

```bash
node src/app.js
```

Siga as instruções no terminal para escolher:

- Gerar senha  
- Gerar QR Code  

---

## 📌 Exemplo de uso

```bash
Escolha uma opção:
1 - Gerar senha
2 - Gerar QR Code
```

---

## 📁 Estrutura do Projeto

```
src/
 ├── app.js
 ├── services/
 │    ├── password.js
 │    └── qrcode.js
 └── utils/
```

---

## 💡 Aprendizados

- Uso de variáveis de ambiente (`.env`)  
- Modularização de código  
- Entrada de dados via terminal (CLI)  
- Integração com bibliotecas externas  

---

## 📈 Melhorias Futuras

- Interface gráfica (GUI)  
- Exportar QR Code como imagem  
- Validações mais robustas  
- Histórico de senhas geradas  

---
