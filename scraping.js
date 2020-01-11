const request = require('request'); 
const cheerio = require('cheerio'); 
const fs = require('fs'); 
var FormData = require('form-data'); 
const axios = require('axios').default; 
require('axios-response-logger'); 
const {Builder, By, Key, until} = require('selenium-webdriver'); 
var lineReader = require('line-reader'); 


// axios.interceptors.request.use(request => { 
//     console.log('Starting Request', request) 
//     return request 
//   }) 

//   axios.interceptors.response.use(response => { 
//     console.log('Response:', response) 
//     return response 
//   }) 


// var form = new FormData(); 

// form.append('ctl00$MainContent$cboDenominacionSocial', '198'); 
// body.append('email', 'emailId'); 
// body.append('password', 'xyz'); 
// this.http.post(url, body); 


request('http://www.smv.gob.pe/Frm_LisDatosGenerales?data=B5C77F8C6BF989E2D2220F8ED366A4EF1CB0260F56',(error, 
 response,html)=>{ 
    if (!error && response.statusCode == 200) { 
        //console.log(html); 
        const $ = cheerio.load(html); 
        const options = $('select[name ="ctl00$MainContent$cboDenominacionSocial"] option') 

            //console.log(options[0].children); 
            //console.log(options[100].children[0].data) 

            // options.map((i,el)=>{ 

            //     console.log($(this)); 

            // }) 

            //console.log(options[1].children[0].data) 
            // options.map((i,e)=>{ 
            //     console.log(e.children[0].data) 
            // }); 

            // fs.writeFile('Output.txt',"hola",(err)=>{ 
            //     if (err) throw err; 
            // }); 

            // fs.truncate('Output.txt',0,(err)=>{ 
            //     if (err) throw err; 
            // }); 

            // options.map((i,e)=>{ 
            //     fs.appendFile('Output.txt', i + ',' + e.attribs.value + ',' + e.children[0].data + '\n', (err) => {  
            //     })
            // }); 
    } 
}); 

 
const getElement = (id,driver,nextChr)=>{ 
    driver.findElement(By.id(id)).getText().then((txt)=>{ 
       //console.log(txt) 
        fs.appendFile('company.txt',txt+nextChr,(err)=>{ 
            if (err) throw err; 
        }) 
    }) 
} 

(async function example() { 
    let driver = await new Builder().forBrowser('chrome').build(); 
    
    try { 
    
        fs.truncate('company.txt', 0, function(){console.log('done')}) 

        // driver.get('http://www.smv.gob.pe/Frm_LisDatosGenerales?data=B5C77F8C6BF989E2D2220F8ED366A4EF1CB0260F56').then( ()=>{ 
        //     const company = driver.findElement(By.id("MainContent_cboDenominacionSocial")).sendKeys('AUSTRAL GROUP').then(()=>{ 
        //         driver.wait(until.elementLocated(By.id('MainContent_txtCIUU')),10000).then(()=>{ 
        //             getElement('MainContent_lblCodigoRPJ',driver,','); 
        //             getElement('MainContent_lblRazonSocial',driver,','); 
        //             getElement('MainContent_lblCIUU',driver,'\n'); 
        //             getElement('MainContent_txtCodigoRPJ',driver,','); 
        //             getElement('MainContent_txtRazonSocial',driver,','); 
        //             getElement('MainContent_txtCIUU',driver,','); 
        //         }).catch((err)=>console.log(err)); 
        //     }) 
        // }); 




    // lineReader.eachLine('Output.txt', async function(line, last) { 

     

                // var lineReader = require('readline').createInterface({
                //     input: require('fs').createReadStream('Output.txt')
                //   });
                  
                //   lineReader.on('line', async function (line) {
                        let item = 'ADMINISTRADORA DEL'
                        console.log('Line from file:', item);
                        //let item = line.substr(line.lastIndexOf(",")+1,line.lastIndexOf(",")+15) 
                        await driver.get('http://www.smv.gob.pe/Frm_LisDatosGenerales?data=B5C77F8C6BF989E2D2220F8ED366A4EF1CB0260F56')
                        console.log(item);
                        await driver.findElement(By.id("MainContent_cboDenominacionSocial")).sendKeys(item)
                        await driver.wait(until.elementLocated(By.id('MainContent_txtCIUU')),10000)
                        
                        item = 'AFP HABITAT S.A.'
                        console.log('Line from file:', item);
                        //let item = line.substr(line.lastIndexOf(",")+1,line.lastIndexOf(",")+15) 
                        await driver.get('http://www.smv.gob.pe/Frm_LisDatosGenerales?data=B5C77F8C6BF989E2D2220F8ED366A4EF1CB0260F56')
                        console.log(item);
                        await driver.findElement(By.id("MainContent_cboDenominacionSocial")).sendKeys(item)
                        await driver.wait(until.elementLocated(By.id('MainContent_txtCIUU')),10000)
               


                    
                    // getElement('MainContent_lblCodigoRPJ',driver,',');

                //   });


                //let item = 'ADMINISTRADORA DEL'

               
       

    //   }); 

    //   await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN); 

    //   await driver.wait(until.titleIs('webdriver - Google Search'), 1000); 

     } finally { 

    //    await driver.quit(); 

     } 

  })(); 

 

 

 

 

   

 

 

  //   request('http://www.smv.gob.pe/Frm_LisDatosGenerales?data=B5C77F8C6BF989E2D2220F8ED366A4EF1CB0260F56',(error, 

  //   response,html)=>{ 

  //      if (!error && response.statusCode == 200) { 

  //          //console.log(html); 

  //          const $ = cheerio.load(html); 

  //      } 

  //  }); 

 

 

 

 

  

 

 

 

 

 

    // axios.post('http://www.smv.gob.pe/Frm_LisDatosGenerales?data=B5C77F8C6BF989E2D2220F8ED366A4EF1CB0260F56', { 

    //     data:{"ctl00$MainContent$cboDenominacionSocial":33862} 

    // }) 

    // .then(function (response) { 

    //     console.log(response.statusCode); 

    // }) 

    // .catch(function (error) { 

    //     console.log(error); 

    // }); 

 

 

 

//   axios({ 

//     method: 'post', 

//     url: 'http://www.smv.gob.pe/Frm_LisDatosGenerales?data=B5C77F8C6BF989E2D2220F8ED366A4EF1CB0260F56', 

//     headers:{ 

//         //Cookie: "FlagLanguage=es; ASP.NET_SessionId=ypzktjuzc0ojxcs0horax2po; _ga=GA1.3.2067525774.1578325613; _gid=GA1.3.1389388398.1578325613" 

//     },  

//     data: { 

//         ctl00$MainContent$cboDenominacionSocial:122466 

//     }, 

//   }).then(function (response) { 

//         console.log(response); 

//    }) 

 

 

 

// request.post('http://www.smv.gob.pe/Frm_LisDatosGenerales?data=B5C77F8C6BF989E2D2220F8ED366A4EF1CB0260F56', { 

//     data: { 

//         "ctl00$MainContent$cboDenominacionSocial":131703 

//     } 

 

 

// }, (error, res, body) => { 

//   if (error) { 

//     console.error(error) 

//     return 

//   } 

//   console.log(`statusCode: ${res.statusCode}`) 

//   console.log(`body: ${res.body}`) 

 

 

//   //console.log(body) 

// }) 

 

 

 

 

// form.submit('http://www.smv.gob.pe/Frm_LisDatosGenerales?data=B5C77F8C6BF989E2D2220F8ED366A4EF1CB0260F56', function(err, res) { 

//   if (err) throw err 

//   else 

//   console.log(`body: ${res.statusCode}`) 

// }); 

 
