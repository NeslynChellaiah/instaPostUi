import animateHeartIcon from './animateHeartIcon';

export default () => {
    let count = 0
    return (id, heartId, fillHeartId) => {
        count += 1
        let heart = document.getElementById(id);
        if(count == 2){
            heart.style.display = "inline-block"
            heart.classList.add("heart-active")
            animateHeartIcon("emptyHeart", heartId, fillHeartId)
            setTimeout(()=>{
                count = 0
                heart.classList.remove("heart-active")
                heart.style.display = "none"
            }, 1000)
        }
    }
}