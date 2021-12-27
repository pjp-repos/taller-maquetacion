
// Menu ================================================
((d)=>{
    const menuBtn = d.querySelector(".menu-btn");
    const menu = d.querySelector(".menu");
    menuBtn.addEventListener("click",()=>{
        menuBtn.firstElementChild.classList.toggle("none");
        menuBtn.lastElementChild.classList.toggle("none");
        menu.classList.toggle("is-active");
    })

    // Event delegate
    d.addEventListener("click",(e)=>{
        if(!e.target.matches(".menu a")) return false;
        menuBtn.firstElementChild.classList.remove("none");
        menuBtn.lastElementChild.classList.add("none");
        menu.classList.remove("is-active");
    })
})(document);

// Contact Form ==========================================

((d)=>{
    const $form = d.querySelector(".contact-form");
    const $loader = d.querySelector(".contact-form-loader");
    const $response = d.querySelector(".contact-form-response");
    $form.addEventListener("submit",(e)=>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/pj.pavon@gmail.com",{
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json =>{
            console.log(json); 
            console.log("Hola")          
            location.hash = "#gracias";
            $form.reset();
        })
        .catch(err=>{
            console.log(err);
            let message = err.statusText || "Ocurrió un error. Intenta nuevamente."
            $response.querySelector("h3").innerHTML=`Error ${err.status} : ${message}`
        })
        .finally(()=>{
            $loader.classList.add("none");
            setTimeout(()=>{
                location.hash="close"
            },3000)
        })

    })
})(document);