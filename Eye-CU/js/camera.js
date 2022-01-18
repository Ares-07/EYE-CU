        var video = document.querySelector("video");
        function startWebCam() {
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function (stream) {
                        video.srcObject = stream;
                    })
                    .catch(function (err0r) {
                        console.log("Something went wrong!");
                    });
            }
        }
        startWebCam();
    
     // drag and drop
//image1

let image = document.getElementsByTagName('img');
let str = document.getElementsByTagName('img');

str.onmousedown = function(event) {
//by using getBoundingClientRect, it will return the size of the image
//and position it to the viewport
  let shiftX = event.clientX - str.getBoundingClientRect().left;
  let shiftY = event.clientY - str.getBoundingClientRect().top;

 str.style.position = 'absolute';
  document.body.append(str);
    str.style.index = 1000;
  moveAt(event.pageX, event.pageY);

  // moves the image at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
   str.style.left = pageX - shiftX + 'px';
    str.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the image on mousemove 
  //so it can be moved from left to top
  document.addEventListener('mousemove', onMouseMove);

  // drop the image, remove unneeded handlers
  str.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
   str.onmouseup = null;
  };
 };
//unable the mouse to move the clone of the image
str.ondragstart = function() {
  return false;
};


// //image 2

// let photo = document.getElementById('main');
// let str2 = document.getElementById('myPhoto');

// str2.onmousedown = function(event) {
// //by using getBoundingClientRect, it will return the size of the image
// //and position it to the viewport
//   let shiftX = event.clientX - str2.getBoundingClientRect().left;
//   let shiftY = event.clientY - str2.getBoundingClientRect().top;

//  str2.style.position = 'absolute';
//   document.body.append(str2);
//  str2.style.index = 1000;
//   moveAt(event.pageX, event.pageY);

//   // moves the image at (pageX, pageY) coordinates
//   // taking initial shifts into account
//   function moveAt(pageX, pageY) {
//    str2.style.left = pageX - shiftX + 'px';
//     str2.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   // move the image on mousemove 
//   //so it can be moved from left to top
//   document.addEventListener('mousemove', onMouseMove);

//   // drop the image, remove unneeded handlers
//   str2.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//    str2.onmouseup = null;
//   };
//  };
// //unable the mouse to move the clone of the image
// str2.ondragstart = function() {
//   return false;
// };

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


let status = '';
function myFunctionS() {
  document.getElementById("infoPnl").innerHTML = "A square face is often characterized by a strong jaw line, a broad forehead, and a wide chin and cheekbones. The width and length of the face are close to being equal. Frames should be selected to make the face look longer and to soften the square angles of the face. Choose frames that are slightly curved (like an oval shape) and that have more horizontal than vertical real estate."
  var image1 = document.createElement('img')
  image1.setAttribute("src","https://www.goggles4u.co.uk/media/catalog/product/cache/c443ca7343598bef75a42026c54e7ea8/1/1/119864w.jpg")
  image1.setAttribute("width", "100")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://www.goggles4u.com/media/catalog/product/cache/c443ca7343598bef75a42026c54e7ea8/1/3/135864w.jpg")
  image2.setAttribute("width", "100")
  image2.setAttribute("height", "100")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://i.pinimg.com/originals/3b/8a/c3/3b8ac3f5896b4412bfbaf2302a61aa08.jpg")
  image3.setAttribute("width", "100")
  image3.setAttribute("height", "100")

  var info = document.getElementById("facePnl");

  if (status != 'square' && status != ''){
      info.innerHTML = "";

  }
  
  if (info.firstElementChild == null){
    info.append(image1)
    info.append(image2)
    info.append(image3)
    status = 'square'
  }
  else if (info.firstElementChild != null) {
    console.log('sun')
  }
  else {
    return
  }
  
}
function myFunctionOV() {
  document.getElementById("infoPnl").innerHTML = "The oval face is identifiable by its balanced proportions. The forehead is slightly wider than the chin and cheekbones are high. Frames should complement the natural proportions of the oval. Choose frames that are wide or wider than the broadest part of the face and that follow your brow line. Often, diamond or rectangular shapes work best for oval shapes."
  document.getElementById("facePnl").innerHTML = "";

  var image1 = document.createElement('img')
  image1.setAttribute("src","https://blog.eyeconic.com/dam/jcr:f8c0b1c5-fc71-4a7b-b2e3-4abe57cf9cea/ch4002.2018-10-26-16-19-02.png")
  image1.setAttribute("width", "150")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://pngimg.com/uploads/sunglasses/sunglasses_PNG41.png")
  image2.setAttribute("width", "150")
  image2.setAttribute("height", "100")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://pngimg.com/uploads/glasses/glasses_PNG54253.png")
  image3.setAttribute("width", "150")
  image3.setAttribute("height", "100")

  var info = document.getElementById("facePnl");
  console.log(info)
  if (status != 'oval'  && status != ''){
    info.innerHTML = "";
  
  }
  if (info.firstElementChild == null){
    info.append(image1)
    info.append(image2)
    info.append(image3)
    status = 'oval'
  }
  else if (info.firstElementChild != null) {
    console.log('sun')
  }
  else {
    return
  }

  
}
function myFunctionOB() {
  document.getElementById("infoPnl").innerHTML = "Although fairly similar to an oval shape, an oblong face is longer than it is wide. The ideal frames will shorten the face by creating a break in the length of the face. Choose frames that have depth and a low bridge to shorten the nose. Try frames that are round, deep, have low-triangle shapes, or that have strong vertical lines."
  var image1 = document.createElement('img')
  image1.setAttribute("src","https://images.vexels.com/media/users/3/147022/isolated/preview/558f97721f2c91d479d8339973521fd3-brown-wayfarer-sunglasses-by-vexels.png")
  image1.setAttribute("width", "150")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://glassesshop-res.cloudinary.com/w_600,h_300/tryon/fm1269.png")
  image2.setAttribute("width", "150")
  image2.setAttribute("height", "100")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://glassesshop-res.cloudinary.com/w_600,h_300/tryon/sm0749.png")
  image3.setAttribute("width", "150")
  image3.setAttribute("height", "100")

 var info = document.getElementById("facePnl");
  if (status != 'oblong'  && status != ''){
    info.innerHTML = "";
  }
  if (info.firstElementChild == null){
    info.append(image1)
    info.append(image2)
    info.append(image3)
    status = 'oblong'
  }
  else if (info.firstElementChild != null) {
    console.log('sun')
  }
  else {
    return
  }
  
}



function myFunctionR() {
  document.getElementById("infoPnl").innerHTML = "A round or full face is characterized by having the same width and length. For round faces, frames that add length to the face often work best. Frames that lengthen the face are typically angular, narrow and are wider than they are deep. It is best to avoid round style frames as these will exaggerate the roundness and curves of the face."
  var image1 = document.createElement('img')
  image1.setAttribute("src","https://images.vexels.com/media/users/3/147022/isolated/preview/558f97721f2c91d479d8339973521fd3-brown-wayfarer-sunglasses-by-vexels.png")
  image1.setAttribute("width", "150")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://glassesshop-res.cloudinary.com/w_600,h_300/tryon/fm1269.png")
  image2.setAttribute("width", "150")
  image2.setAttribute("height", "100")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://glassesshop-res.cloudinary.com/w_600,h_300/tryon/sm0749.png")
  image3.setAttribute("width", "150")
  image3.setAttribute("height", "100")

 var info = document.getElementById("facePnl");
  if (status != 'round'  && status != ''){
    info.innerHTML = "";
  }
  if (info.firstElementChild == null){
    info.append(image1)
    info.append(image2)
    info.append(image3)
    status='round'
  }
  else if (info.firstElementChild != null) {
    console.log('sun')
  }
  else {
    return
  }
}

function myFunctionH() {
  document.getElementById("infoPnl").innerHTML = "A heart shaped face looks like a heart or a triangle with the point facing down. The forehead is very wide and cheekbones are high while the face narrows towards the chin. Counterbalance the narrow chin by choosing frames that are wider at the bottom. Generally, light colored and rimless frames work best, although aviator, butterfly and low-triangle styles also work well."
  var image1 = document.createElement('img')
  image1.setAttribute("src","https://i.pinimg.com/originals/60/cb/48/60cb48c8e5c2daf304e3f22531137974.png")
  image1.setAttribute("width", "150")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://th.bing.com/th/id/R.7d9b4752d04945270457af9c7f64dff2?rik=Auom%2bsYS%2bfZHxg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshades-transparent-background%2fshades-transparent-background-24.png&ehk=F5jC0xB4PKeFY0qx2e126tizkc5BwSdgGtGpclGrau4%3d&risl=&pid=ImgRaw&r=0")
  image2.setAttribute("width", "150")
  image2.setAttribute("height", "100")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://cdn.shopify.com/s/files/1/0066/1500/7314/products/Round_Glasses_N7771_C1_tryon_675x247.png?v=1564047760")
  image3.setAttribute("width", "150")
  image3.setAttribute("height", "100")

 var info = document.getElementById("facePnl");
  if (status != 'heart'  && status != ''){
    info.innerHTML = "";
  }
  if (info.firstElementChild == null){
    info.append(image1)
    info.append(image2)
    info.append(image3)
    status='heart'
  }
  else if (info.firstElementChild != null) {
    console.log('sun')
  }
  else {
    return
  }
}

  function myFunctionT() {
  document.getElementById("infoPnl").innerHTML = "A base-down triangle face has a narrower forehead with full cheeks and a broad chin. To offset a broad chin, select frames that widen at the top. Great selections include frames that have heavy color accents and detail on the top part of the frames. Cat-eye shapes also work well to add width and emphasize the narrow upper part of the face."
  var image1 = document.createElement('img')
  image1.setAttribute("src","https://cdn.shopify.com/s/files/1/0896/5742/products/CL086-PNK_2048x2048.png?v=1554483129")
  image1.setAttribute("width", "150")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://images.ray-ban.com/extra/image/RayBan/Clipon/8053672689464_shad_qt.png?impolicy=RB_RB_FBShare")
  image2.setAttribute("width", "150")
  image2.setAttribute("height", "100")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://s7d9.scene7.com/is/image/Lenscrafters/8053672737639_shad_fr?$pngalpha$&wid=680")
  image3.setAttribute("width", "150")
  image3.setAttribute("height", "100")


 var info = document.getElementById("facePnl");
  if (status != 'triangle'  && status != ''){
    info.innerHTML = "";
  }
  if (info.firstElementChild == null){
    info.append(image1)
    info.append(image2)
    info.append(image3)
    status='triangle'
  }
  else if (info.firstElementChild != null) {
    console.log('sun')
  }
  else {
    return
  }
}

  function myFunctionD() {
  document.getElementById("infoPnl").innerHTML = "A diamond shaped face is often characterized by high, dramatic cheekbones with a narrow eye line and jaw line. This shape is the rarest of all the shapes. Oval frames that are soft in style typically work best to highlight the eyes and cheekbones. Select frames that have detailing, distinctive brow lines, are rimless or a cat-eye shape for best results."
  var image1 = document.createElement('img')
  image1.setAttribute("src","https://www.eyeconic.com/dw/image/v2/AAYA_PRD/on/demandware.static/-/Sites-Frames_Catalog/default/dwec20df47/images/large/Luxottica/Oakley/888392282262_face_OX5128.png?sw=1117&sh=480&sm=fit")
  image1.setAttribute("width", "150")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://cdn.shopify.com/s/files/1/0066/1500/7314/products/Round_Glasses_N7771_C3_tryon_668x242.png?v=1564047770")
  image2.setAttribute("width", "150")
  image2.setAttribute("height", "75")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://i.pinimg.com/originals/c3/ac/64/c3ac641bba9106d1dc1bfe6a0bc4c2e8.png")
  image3.setAttribute("width", "150")
  image3.setAttribute("height", "100")

 var info = document.getElementById("facePnl");
  if (status != 'diamond'  && status != ''){
    info.innerHTML = "";
  }
  if (info.firstElementChild == null){
    info.append(image1)
    info.append(image2)
    info.append(image3)
    status='diamond'
  }
  else if (info.firstElementChild != null) {
    console.log('sun')
  }
  else {
    return
  }
}