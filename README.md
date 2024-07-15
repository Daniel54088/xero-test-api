<h1 align="center"> Show Me The Money - API</h1>

</br>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#introduction"> ➤ Introduction</a></li>
    <li><a href="#tech-stack"> ➤ Tech stack</a></li>
    <li><a href="#app-structure"> ➤ Run app</a></li>
    <li><a href="#test"> ➤ Run test</a></li>
  </ol>
</details>

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="introduction"> :pencil: Introduction</h2>

<p align="justify"> 
The goal of this project is to provide a backend service to fetch Balance Sheet Reports from the Xero API. This backend application is built using node js with express framework.
</p>

- The API endpoint to fetch the Balance Sheet Report from Xero is /api.xro/2.0/Reports/BalanceSheet. <br>
- Handles errors gracefully and provides informative feedback.<br>

<p align="center">
  <img src="/public/preview.png" alt="app structure" width="70%" height="70%">        
</p>



![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- Tech stack -->
<h2 id="tech-stack"> :books: Tech stack</h2>

<!--This project is written in Python programming language. <br>-->

The following open source techs are used in this project:

- <b>Base</b> <br>

    ![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)  ![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)

- <b>Code Consistency & Reliability</b> <br>

  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
  ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)


- <b>Testing tool</b> <br>
 ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)


![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- App structure -->
<h2 id="app-structure"> :fork_and_knife: Run app </h2>

### Steps:
1. RUN ```docker build . -t "xero-api:v1.0"```
2. RUN ```docker run -p 3001:3001 {IMAGE ID} ```
3. Visit ```http://localhost:3001/``` 

## If docker fails:

1. Run `npm install`
2. Run `npm run dev`


![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- deployment -->
<h2 id="test"> :floppy_disk: Test</h2>

### Run test 

1. ```npm install```
2. ```npm run test```



![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
