const express = require("express")
const path=require("path")
const fs=require("fs").promises
const { json } = require("stream/consumers")
const cors = require('cors')
const i18next =require('i18next')
const Backend=require('i18next-fs-backend')
app=express()

app.use(cors())
const keyLang={
  "en":"en-US",
  "de":"de-DE",
  "fr":"fr-FR"
}

app.get('/:prodno/:lng',async(req,res)=>{
const id=req.params.prodno
const lng=req.params.lng
const result= await readData(id);
const data= JSON.parse(result)
const keys=Object.keys(data.products)
const responseObj={}
keys.map((key)=>{
  responseObj[key]={
    handle:data.products[key].handle,
    description:data.products[key].localizedDescription[keyLang[lng]],
    price:data.products[key].price,
    images:data.products[key].images,
    sizes:data.products[key].sizes,
    fullName:data.products[key].masterName,
    colors:data.products[key].colors,
    category:data.products[key].type,
    
  }
})
res.json({products:responseObj})

})


app.get('/collection',async(req,res)=>{
const data=[]
const resObj={}
try{
 for(i=1;i<4;i++){
  const result=await readData(i);
  const prod=JSON.parse(result)
  const keys= Object.keys(prod.products)
  keys.map((key)=>
    resObj[key]={
        handle:prod.products[key].handle,
        description:prod.products[key].description,
        images:prod.products[key].images,
        sizes:prod.products[key].sizes,
        price:prod.products[key].price,
        colors:prod.products[key].colors,
        id:i
    }
  )
 }
 res.send(resObj)
}
catch(e)
{
  console.log(`ERROR:${e}`)
}
})

app.get('/product/availability/:handle',((req,res)=>{
let availability=false
if(Math.random()>0.1)
{
  availability=true
  res.send(availability)
  return
}
  
  res.send(availability)

}))





app.get('/',(async(req,res)=>{
  const dbFile=path.join(__dirname,"/db/allproduct.json")
   try{
const dataJson= await fs.readFile(dbFile,'utf8')
res.send(dataJson)
}
catch(e)
{
    console.log(e)
}

  
}))


app.listen(3000,()=>{
    console.log("listening at Port 3000 ")
}) 


async function readData(id){
const dbFile= path.join(__dirname,"/db/product"+id+".json")
try{
const dataJson=  fs.readFile(dbFile,'utf8')
return dataJson
}
catch(e)
{
    console.log(e)
}
}