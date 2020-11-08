type Opts = {
   maxResults: number,
   nextToken?: string | null,
   [key: string]: any
}

const defOpts = {
   maxResults: 10,
}
const host = 'localhost:5000'

async function searchFeedsBy(query: string, opts: Opts = defOpts){
   const url = `http://${host}/trending/${query}`
   
   const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(opts),
      headers:{
         'Content-Type': 'application/json'
       }
   })
   
   const data = await res.json()
   console.log('query data ffrom client', data);
   
   return data
}  

export default searchFeedsBy