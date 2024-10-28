export default function Page({params}:{
    params : {id:string}
}){
    return <h1>Hi this is home {params.id} </h1>
  }