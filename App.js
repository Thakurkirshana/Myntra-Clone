// const productImage =
// document.querySelector('.product-image');
// const images =[
//     './allIocons/Brand-poster (1).png',
//     './allIocons/Brand-poster (2).png',
//     './allIocons/Brand-poster (3).png',
//     './allIocons/Brand-poster (4).png',
//     './allIocons/Brand-poster (5).png'
// ];
// let index = 0;
// function autoScrollImage() {
//     productImage.src = images[index];
//     index=(index +1)%
//     images.length;
// }
// setInterval(autoScrollImage, 800)




// const productImgAll =
// document.querySelector('.product-All');
// const imgAlls =[
//     './brand (1).png',
//     './brand (2).png'
    
// ];
// let index1 = 0;
// function autoScrollImage() {
//     productImgAll.src = imgAlls[index1];
//     index1=(index1 +1)%
//     imgAlls.length;
// }
// setInterval(autoScrollImage, 800)



 const toggleButton = document.getElementById('togerBtn');
 const navLink =document.getElementById('nav-links')
 toggleButton.addEventListener('click',()=>{
    navLink.classList.toggle('active');
 })