const app = new Vue({
    el: '#app',
    data: {
        itemActive: 0,

        cities : [
            {
                nameCity: 'Antarctica',
                image: 'img/Antarctica.jpg',
            },
            {
                nameCity: 'Antelope Canyon, Arizona',
                image: 'img/Antelope-Canyon-Arizona.jpg',
            },
            {
                nameCity: 'Faroe Islands',
                image: 'img/Faroe-Islands.jpg',
            },
            {
                nameCity: 'Machu Picchu, Peru',
                image: 'img/Machu-Picchu-Peru.jpg',
            },
            {
                nameCity: 'Reynisfjara, Iceland',
                image: 'img/Reynisfjara-Iceland.jpg',
            }
        ]
    },
    methods: {
        previousImage(){
            if( this.itemActive === 0){
                this.itemActive = this.cities.length - 1;
            } else {
                this.itemActive--;
            }
        },
        nextImage(){
            if( this.itemActive === this.cities.length - 1){
                this.itemActive = 0;
            } else {
                this.itemActive++;
            }
        },
    }
})