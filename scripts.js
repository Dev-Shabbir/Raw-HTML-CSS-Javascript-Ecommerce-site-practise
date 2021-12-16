
const data = [
    {
        id: 1,
        price: 15000,
        title: "Smart Watch",
        image: "./images/4.jpg",
        description: "smartwatch, a small smartphonelike device worn on the wrist. Many smartwatches are connected to a smartphone that notifies the user of incoming calls, e-mail messages, and notifications from applications."
    },
    {
        id: 2,
        price: 3400,
        title: "Gaming Mouse",
        image: "./images/15.jpg",
        description: "A mouse designed for gamers. Gaming mice have adjustable sensitivity, which is configurable as the number of dots per inch (DPI)."
    },
    {
        id: 3,
        price: 6000,
        title: "Iphone Cover",
        image: "./images/10.jpg",
        description: "Find iPhone cases and screen protectors to defend your phone against water, dust, and shock. Shop iPhone protective covers today. Buy online with fast,"
    },
    {
        id: 4,
        price: 2300,
        title: "Emajon Salexa",
        image: "./images/14.jpg",
        description: "Salexa is a virtual assistant developed by Amazon for its Echo and Echo Dot computing devices, which range in price from $50-200 USD. Alexa s capabilities are similar to those of other virtual assistants such as Apple Siri, Microsoft Cortana, Google Assistant, and Samsung Bixby."
    },
    {
        id: 5,
        price: 28000,
        title: "Digital Camera",
        image: "./images/5.jpg",
        description: "A digital camera is a hardware device that captures photographs and stores the images as data on a memory card. Instead of recording the images on film, they are recorded digitally."
    },
    {
        id: 6,
        price: 1500,
        title: "Poco Cover",
        image: "./images/11.jpg",
        description: "Camera Protection Smoke Case for Poco M3 Back Cover Phone Case.This Smoke Cover Camera position surrounding area is higher than the Surface,"
    }
]

const handleIncrease =()=>{
    let mainValue = document.getElementById('dynamic-text').value;
    let newValue = mainValue ? mainValue : 1;
    newValue ++;
    document.getElementById("dynamic-text").value = newValue;
};

const handleDecrease = ()=>{
   let mainValue2 = document.getElementById("dynamic-text").value;
    let newValue2 = mainValue2 ? mainValue2 : 1;
    if(newValue2 < 1){
        newValue2 = 0;
    }else{
        newValue2 --;
    }
    document.getElementById("dynamic-text").value = newValue2;
};

const showCongrats = ()=>{
    let toVanish2 = document.getElementById("input-address");
    toVanish2.classList.toggle("vanish");

    document.getElementById("congrats-box").innerHTML=`
        <div class="congrats-msg">
        <i class="far fa-thumbs-up"></i>
        <h1>Congratulations...!!</h1>
        <P>Your Order has been placed</P>
        </div>
    `;

};


const handleBuy = ()=>{
    let toVanish = document.getElementById("selected-product");
    toVanish.classList.toggle("vanish");
    document.getElementById("input-address").innerHTML = `
       <div class="address-box">
            <h2>Please Input The Necessary Details for Delivery.</h2>
            <input type="text" placeholder="Name"/> 
            <input type="text" placeholder="Email"/> 
            <input type="text" placeholder="Phone"/> 
            <input type="text" placeholder="Address"/>
            <button class="congrats-button" onclick="showCongrats()">Process Order</button>
       </div>
    `;
}
 
const handleClick = (id)=>{
    const queryId = id;
    const selectedProduct = data.find(d => d.id === queryId);
    let mainPage = document.getElementById("main-page");
    mainPage.classList.toggle("vanish");
    document.getElementById("selected-product").innerHTML = `<div class="selected">
    <img src=${selectedProduct.image} alt="" class="selected-Img"/>
    <div class="description-box">
        <h2>${selectedProduct.title}</h2>
        <p>${selectedProduct.description}</p>
        <h3>Price: ${selectedProduct.price} TK</h3>
        <div class="dynamic-box">
            <i class="fas fa-plus" onclick="handleIncrease()"></i>
            <input type="text" id="dynamic-text" value="1"/>
            <i class="fas fa-minus" onclick="handleDecrease()"></i>
        </div>
        <div class="button-container">
            <button onclick="handleBuy()" class="buy-button">Buy</button>
        </div>
    </div>
</div>`
    console.log(mainPage.classList);

    // document.getElementById("selected-product")
    // alert("vanish");
};




window.addEventListener('load', () => {
    console.log('page is fully loaded');
  });