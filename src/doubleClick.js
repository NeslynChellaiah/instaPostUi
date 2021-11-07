import animateHeartIcon from './animateHeartIcon';

export default () => {
    let count = 0
    let flag = true
    return (id, heartId, fillHeartId) => {
        count += 1
        let heart = document.getElementById(id);
        if(count == 2 && flag){
            flag = false
            heart.style.display = "inline-block"
            heart.classList.add("heart-active")
            animateHeartIcon("emptyHeart", heartId, fillHeartId)
            setTimeout(()=>{
                flag = true
                heart.classList.remove("heart-active")
                heart.style.display = "none"
            }, 1000)
        }
        setTimeout(()=>{
            count = 0
        }, 300)
    }
}