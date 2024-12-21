//Animación del boton 
const link = document.querySelector('#btn-down'); 
function triggerAnimation() {
    link.classList.add('link-grow-twice');
    
    setTimeout(() => {
        link.classList.remove('link-grow-twice');
    }, 800); 
}
setInterval(triggerAnimation, 10000);


//Mensajes de parrafo en el inicio
const mensajes = [
    "Ada Lovelace, considerada la primera programadora del mundo, escribió un algoritmo para la máquina analítica de Charles Babbage en 1843. 💻",
    "El primer lenguaje de programación de alto nivel fue Fortran, creado en 1957 por IBM. ¡Y aún se usa en aplicaciones científicas! 🌌",
    "¿Sabías que 'Hello, World!' es el mensaje típico que los programadores usan para aprender un nuevo lenguaje? 🖥️",
    "El término 'bug' para referirse a errores en programas nació cuando se encontró una polilla en un ordenador en 1947. 🐞",
    "El lenguaje de programación Python no tiene que ver con la serpiente; fue nombrado en honor al grupo de comedia británico 'Monty Python'. 🐍🤡",
    "Grace Hopper, una pionera de la programación, desarrolló el primer compilador y popularizó el término 'debugging'. ⚙️",
    "El lenguaje C es la raíz de muchos lenguajes modernos, como C++, Java, y Python. ¡Es un verdadero ancestro! 🌳",
    "JavaScript, uno de los lenguajes más populares, fue creado en solo 10 días en 1995 por Brendan Eich. 🕒",
    "El código fuente de Linux, uno de los sistemas operativos más usados, tiene más de 27 millones de líneas de código. ¡Impresionante! 🐧",
    "El videojuego Tetris tiene un código fuente tan compacto que cabe en menos de 30 KB. 🎮",
    "¿Sabías que los programadores pasan más tiempo depurando que escribiendo código? ¡Pero esa es parte de la diversión! 🛠️",
    "El 'printf' en C ha sido usado como herramienta de depuración desde los años 70. ¡El clásico nunca muere! 📜",
    "En 2021, había más de 700 lenguajes de programación, pero los desarrolladores tienden a concentrarse en los más populares. 🌎",
    "Alan Turing, el padre de la computación, propuso una máquina teórica que ahora llamamos la 'Máquina de Turing'. 🤖",
    "COBOL, creado en 1959, todavía ejecuta la mayoría de los sistemas bancarios del mundo. ¡Habla de longevidad! 💰",
    "Los emojis fueron incorporados oficialmente a Unicode en 2010, ¡y ahora incluso puedes programar con ellos! 😎",
    "El logo del lenguaje Python incluye dos serpientes, pero en realidad representa simplicidad y elegancia. 🐍🐍",
    "El lenguaje Ruby fue diseñado para hacer feliz a los programadores. ¡Y muchos lo consideran poético! 💎",
    "HTML no es un lenguaje de programación, sino un lenguaje de marcado. ¡Pero es esencial para la web! 🌐",
];



document.addEventListener('DOMContentLoaded', () =>{
    recorrerMensajes()
})
function recorrerMensajes(){
    const parrafo = document.querySelector('#mainContent-p');
    let i = 0;

    setInterval(() => {
        parrafo.innerHTML = mensajes[i];
        i = (i + 1) % mensajes.length; 
    }, 5000); 
}


//Animación del h1
document.addEventListener("DOMContentLoaded", () => {
    const typingText = "Bienvenido a Fundamentos!";
    const typingElement = document.getElementById("typing");
    const cursor = document.getElementById("cursor");
    const elementsToFade = document.querySelectorAll("#mainContent-p, h2");
    let index = 0;

    function typeEffect() {
        if (index < typingText.length) {
            typingElement.innerHTML = typingText.substring(0, index + 1) + '<span id="cursor">|</span>';
            index++;
            setTimeout(typeEffect, 100);
        } else {
            cursor.style.animation = "blink 0.7s step-start infinite"; 
            setTimeout(() => fadeInElements(), 500);
        }
    }

    function fadeInElements() {
        elementsToFade.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add("fade-in");
            }, i * 300); 
        });
    }

    typeEffect();
});

//Animacion al mirarse en pantalla
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleccionar las secciones a observar
    const secciones = document.querySelectorAll(
        ".estructura-conceptos, .estructura-control, .estructura-datos-variables, .estructura-funciones, .contenido"
    );

    secciones.forEach(seccion => observer.observe(seccion));
});

//Animacion de internet
document.addEventListener("scroll", () => {
    const internetContent = document.querySelector(".internet-content");
    const internetImage = document.querySelector(".internet-img .img");
  
    if (internetContent && internetImage) {
      const contentPosition = internetContent.getBoundingClientRect().top;
      const imagePosition = internetImage.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (contentPosition < windowHeight - 50) {
        internetContent.classList.add("visible");
      }
      if (imagePosition < windowHeight - 50) {
        internetImage.classList.add("visible");
      }
    }
  });

// Función para observar la visibilidad de las secciones
const observeSections = () => {
    if (window.innerWidth <= 768) {
        return;
    }

    const sections = document.querySelectorAll('.secciones-programability, .tipos-lenguaje, .lenguaje-programacion, .introduccion-programacion, .conceptos-basicos');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observamos cada una de las secciones
    sections.forEach(section => {
        observer.observe(section);
    });
};

document.addEventListener('DOMContentLoaded', observeSections);


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 
});

const elementsToObserve = document.querySelectorAll('.card, article');

elementsToObserve.forEach(element => {
    observer.observe(element);
});

