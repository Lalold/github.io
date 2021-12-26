let order_btn = document.querySelector('.ordering');
let order_window = document.querySelector('.model1')
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let send_btn = document.querySelector('.send-data'); 
    

order_btn.onclick = () => {
    header.style.display = "none";
    main.style.display = "none";
    order_window.style.display = "flex";    
}

send_btn.onclick = () => {
    header.style.display = "block";
    main.style.display = "block";
    order_window.style.display = "none";    
}

