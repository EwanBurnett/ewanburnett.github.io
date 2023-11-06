 window.addEventListener('load', function(){
    Particles.init({

            // normal options
            selector: '.particles',

            maxParticles: 200,

            connectParticles: true, 
            sizeVariations: 5, 
            speed: 0.25, 
        });

    })

    console.log("Hello {{ site.data.metadata.name }}");
