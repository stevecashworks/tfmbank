const observer=new IntersectionObserver((entries)=>{
    for(let entry of entries){
        if(entry.isIntersecting){
            entry.target.classList.add('inter')
        }
        else{
            entry.target.classList.remove('inter')

        }
    }
})
const observe=(nodelist)=>{
    nodelist.forEach(element=>{
        observer.observe(element)
    })
}
export default observe