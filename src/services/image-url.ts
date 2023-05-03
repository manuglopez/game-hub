const getCroppedImageUrl=(url:string):string=>{
    const target ='media/'
    const index=url.indexOf(target)+target.length // we need the last position of media/
    return  url.slice(0,index)+'crop/600/400/'+ url.slice(index)
}
export default getCroppedImageUrl