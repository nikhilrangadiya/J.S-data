const slide = document.querySelectorAll('.img')
console.log(slide);
let count = 0

slide.forEach(
    (img, index) => {
        console.log(img, index);
        img.style.left = `${index * 100}%`
    }
)

function slideimg() {
    slide.forEach(
    (img) => {
        console.log(img);
        img.style.transform = `translateX(${-count * 100}%)`
    }
)
}

goPrew = () => {
    count--
    console.log(goPrew);
    if (count === -1) {
        count = 6
    }
    slideimg()
}
goNext = () => {
    count++
    console.log(goNext);
    if (count === 7) {
        count = 0
    }
    // if (count >= sliderdata.length){
    //     count = 0
    // }
    slideimg()
}