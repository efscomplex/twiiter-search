type Opts = {
   count: number;
   type: string;
   lang: string;
}

const opts = {
   count: 10,
   type: 'recent',
   lang: 'es',
}

async function searchFeedsBy(query: string, $opts: Opts = opts){
   const url = `http://localhost:4000/trending/${query}`

   const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify($opts),
      headers:{
         'Content-Type': 'application/json'
       }
   })
   const feeds = await res.json()
   
   return feeds
}  

export default searchFeedsBy