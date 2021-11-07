export default (type, heartId, fillHeartId) => {
    let heart = document.getElementById(heartId)    
    let fillHeart = document.getElementById(fillHeartId)   
    if(type === "emptyHeart"){
        heart.classList.add('empty-heart-active')
        setTimeout(()=>{
            heart.classList.remove('empty-heart-active')
            heart.style.display = "none"
            fillHeart.style.display = "block"
            fillHeart.classList.add('fill-heart-active')
            setTimeout(()=>{
                fillHeart.classList.remove('fill-heart-active')
            }, 200)
        }, 150)
    } else {
        fillHeart.classList.add('fill-heart-active')
        setTimeout(()=>{
            fillHeart.classList.remove('fill-heart-active')
            fillHeart.style.display = "none"
            heart.style.display = "block"
            heart.classList.add('empty-heart-active')
            setTimeout(()=>{
                heart.classList.remove('empty-heart-active')
            }, 200)
        }, 150)
    }
}