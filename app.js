const navSlide = () => {
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li')

    //toggle Map
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation=``;
            }else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
            }
    
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });



   
}


window.addEventListener('load',()=>{
    const carouselSlide=document.querySelector('.carousel-slide');
    const carouselImages=document.querySelectorAll('.carousel-slide img');
    
    const carouselSounds=document.querySelectorAll('.carousel-slide audio');
    //Buttons
    const prevBtn=document.querySelector("#prevButton");
    const nextBtn=document.querySelector("#nextButton");
    
    const playBtn=document.querySelectorAll('.playButton');

    const pauseBtn=document.querySelectorAll('.pauseButton');

    const stopBtn=document.querySelectorAll('.stopButton');
    
    //Counter
    let counter=1;
    const size=carouselImages[0].clientWidth;
    
    pauseBtn.forEach(item=>{
        item.addEventListener('click',event=>{
            console.log("fired");
            carouselSounds[counter].pause();
        });
    });

    playBtn.forEach(item =>{
        item.addEventListener('click',event =>{
            carouselSounds[counter].play();
        });
    });

    stopBtn.forEach(item =>{
        item.addEventListener('click',event =>{
            carouselSounds[counter].pause();
            carouselSounds[counter].currentTime=0;
        });
    });

    
    
    carouselSlide.style.transform='translateX('+(-size*counter)+'px)';
    console.log(carouselImages.length);
    //Button Listeners
    nextBtn.addEventListener('click',()=>{
        
        carouselSounds[counter].pause();
        carouselSounds[counter].currentTime=0;
        if(counter >=carouselImages.length-1){
            return;
        }
        carouselSlide.style.transition="transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform='translateX('+(-size*counter)+'px)';
    
    });
    
    prevBtn.addEventListener('click',()=>{
        carouselSounds[counter].pause();
        carouselSounds[counter].currentTime=0;
        if(counter <=0){
            return;
        }
        
        carouselSlide.style.transition="transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform='translateX('+(-size*counter)+'px)';
        
    });

    

    
    carouselSlide.addEventListener('transitionend',()=>{
        if(carouselImages[counter].id ==='lastClone'){
            carouselSlide.style.transition="none";
            counter=carouselImages.length-2;
            carouselSlide.style.transform='translateX('+(-size*counter)+'px)';
        }
        if(carouselImages[counter].id ==='firstClone'){
            carouselSlide.style.transition="none";
            counter=carouselImages.length-counter;
            carouselSlide.style.transform='translateX('+(-size*counter)+'px)';
        }
    });
});

navSlide();
