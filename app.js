const httpReq=new EasyHTTP;

const myKey='3u-v952hHhAC_NMr4hQG95xcJ0PXA-RohTk9lk9fjYs'

document.getElementById('btn').addEventListener('click',getImage)

const searchValue= document.getElementById('search')



function getImage(){
    console.log(searchValue.value)

    httpReq.getOne(`https://api.unsplash.com/search/photos?page=1&per_page=15&query=
    ${searchValue.value}/&client_id=${myKey}`)
   
    .then(data=>printImages(data.results))
    
    // httpReq.getOne(`https://api.unsplash.com/photos/random/?client_id=${myKey}`)
  
    // .then(data=>printImage(data.urls.regular))

}

function printImages(data){

    let pics=''

    data.forEach((pic)=>{
        console.log(pic.urls.regular)
        pics+=`<a href="${pic.urls.regular}" target="_blank" >
                    <img href="${pic.urls.regular}" 
                    src="${pic.urls.regular}"
                    id="img" class="round-img">
                    </img>
                </a>
              `    
    
        document.getElementById('imgDiv').innerHTML=pics

        searchValue.value=''
    })


}

function printImage(data){ 
    const pic=data

    document.getElementById('imgDiv').innerHTML=
    `<img src="${pic}" id="img" class="round-img"></img>`
}