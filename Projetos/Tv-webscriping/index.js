const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://guiadefilmes.com.br/');
  
   // Definir o tamanho da tela
    await page.setViewport({width: 1080, height: 1024});

  
   const imgList = await page.evaluate(() =>{
    //execução no browser
    //pegar imagens

        const NodeList = document.querySelectorAll('li img')

        //transforma o NodeList em Array
        const imgArray = [...NodeList]

        //transforma os nodes (elementos html) em objetos JS
        const imgList = imgArray.map( ({src}) => ({
            src
        }) )


    //Colocar fora da função
    return imgList
   });

   //escrever os dados em arquivos locais
   fs.writeFile('programação.json', JSON.stringify(imgList, null, 2), err => {
    if(err) throw new Error('something went wrong')

    console.log('well done')
   })
   
    await browser.close();
  })();