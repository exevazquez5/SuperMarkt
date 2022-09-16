addEventListener('DOMContentLoaded' , () => {

    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu_items')
                menu_items.classList.toggle('mostrar')
            })
        }
    
    const btn_carrito = document.querySelector('.carrito')
    if(btn_carrito){
        btn_carrito.addEventListener('click', () =>{
            window.location.href="./carrito.html"
        })
    }
    const btn_logo = document.querySelector('.logo')
    if(btn_logo){
        btn_logo.addEventListener('click', () => {
            window.location.href="./index.html"
        })
    }
    }
);

