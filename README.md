<div align="center">

```javascript
console.log("Hello World");
```

</div>

<p>
Este projeto é um <code>E-Commerce</code> de hamburgeria, com <code>Crud</code> onde é possível fazer a <code>Gestão de Categorias, Produtos e Pedidos.</code>
</pre>


---


<table >
  <tr>
    <td width=15%>
      <img  src="https://github.com/user-attachments/assets/3414e700-5c4f-4d07-9bd6-6029ea3a1836" target="_blank">
    </td>
    <td width=50%>

## Sobre o Projeto
- [Instalação](#instalação)
- [Licença](#licença)

    </td>
  </tr>
  
</table>
<div>
  <a href="mailto:samuelrosario.dev@gmail.com" target="_blank">
    <img width=10% src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank">
  </a>
  <a href="https://www.linkedin.com/in/samuelwsrosario/" target="_blank">
    <img width=12% src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank">
  </a> 
</div>

<details>
  <summary>Tecnologias usadas no projeto</summary>
<div align="center">

  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
  <img width=5% src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />       
</div>
</details>

---

## Instalação
Nesse projeto você vai instalar todo o projeto <code>fullstack</code>, significa que precisamos configurar o projeto em sua maquina, para isso será necessarios algumas ferramentas <code>Docker, Bun e Beekeeper-Studio</code>, depois de tudo instalado siga os passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/SamuelRosarioDev/devburger-ecommerce.git
   ```
2. Dentro da pasta <code>devburger-back</code> e dentro da pasta <code>devburger-front</code> use:
   ```bash
   cd devburger-back && bun install
   cd devburger-front && bun install
   ```
3. Agora crie containers 
   ```bash
   docker run -d --name devburger-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=devburger -p 5432:5432 postgres

   ```

   ```bash
   docker run -d --name devburger-mongodb -e MONGO_INITDB_ROOT_USERNAME=mongodb -e MONGO_INITDB_ROOT_PASSWORD=mongodb -p 27017:27017 mongo

   ```
4. Dê start nos containers
   ```bash
   docker start devburger-postgres
   ```
   ```bash
   docker start devburger-mongodb
   ```
5. Entre no <code>beekeeper-studio</code> e coloque as informações do container criado <code>postgres</code>, depois crie um <code>Database</code> com o nome <code>devbuger</code>.
6. Crie um arquivo .env e coloque as informações do postgres 
7. Voltando nos terminais dos <code>devburger-back e devburger-front</code> utilize o comando para startar o projeto 
   ```bash
   bun dev
   ```
---

## Licença
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
