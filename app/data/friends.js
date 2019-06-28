//"friends"
//Really regretting not using the new object model now
var friends = [
    {
        name: "Paul",
        photo: "https://randomuser.me/api/portraits/men/90.jpg",
        scores: [1,2,3,4,5,4,3,2,1,1],
       scoreTotal: function (){
            var bigscore = 0;
            for(var i = 0; i<this.score.length; i++){
                this.score[i]= parseInt(this.score[i])
                
                bigscore += this.score[i];
            }
            return bigscore
           // this.score.reduce((a,b) => a + b , 0)
        }

    },
    {
        name: "Steve",
        photo: "https://randomuser.me/api/portraits/men/71.jpg",
        scores: [1,1,1,1,1,1,1,1,1,1],
       scoreTotal: function (){
            var bigscore = 0;
            for(var i = 0; i<this.score.length; i++){
                this.score[i]= parseInt(this.score[i])
                
                bigscore += this.score[i];
            }
            return bigscore
           // this.score.reduce((a,b) => a + b , 0)
        }
    },
    {
        name : "Jeff",
        photo : "https://vignette.wikia.nocookie.net/youtube/images/3/3c/Maxmoefoe.jpg/revision/latest?cb=20180613091420",
        scores: [3,4,5,4,3,5,5,4,3,4],
       scoreTotal: function (){
            var bigscore = 0;
            for(var i = 0; i<this.score.length; i++){
                this.score[i]= parseInt(this.score[i])
                
                bigscore += this.score[i];
            }
            return bigscore
           // this.score.reduce((a,b) => a + b , 0)
        }
    },
    {
        name: "James",
        photo: "https://randomuser.me/api/portraits/men/66.jpg",
        scores: [1,2,3,4,1,2,3,3,2,2],
       scoreTotal: function (){
            var bigscore = 0;
            for(var i = 0; i<this.score.length; i++){
                this.score[i]= parseInt(this.score[i])
                
                bigscore += this.score[i];
            }
            return bigscore
           // this.score.reduce((a,b) => a + b , 0)
        }
    },
    {
        name: "Stacie",
        photo: "https://randomuser.me/api/portraits/women/87.jpg",
        scores: [3,4,2,4,3,3,3,4,3,4],
       scoreTotal: function (){
            var bigscore = 0;
            for(var i = 0; i<this.score.length; i++){
                this.score[i]= parseInt(this.score[i])
                
                bigscore += this.score[i];
            }
            return bigscore
           // this.score.reduce((a,b) => a + b , 0)
        }
    },
    {
        name: "Beth",
        photo: "https://randomuser.me/api/portraits/women/88.jpg",
        scores: [1,2,3,2,1,4,3,2,1,3],
       scoreTotal: function (){
            var bigscore = 0;
            for(var i = 0; i<this.score.length; i++){
                this.score[i]= parseInt(this.score[i])
                
                bigscore += this.score[i];
            }
            return bigscore
           // this.score.reduce((a,b) => a + b , 0)
        }
    },
    {
        name: "Stephanie",
        photo: "https://randomuser.me/api/portraits/women/16.jpg",
        scores: [4,4,5,4,5,4,5,4,5,5],
       scoreTotal: function (){
            var bigscore = 0;
            for(var i = 0; i<this.score.length; i++){
                this.score[i]= parseInt(this.score[i])
                
                bigscore += this.score[i];
            }
            return bigscore
           // this.score.reduce((a,b) => a + b , 0)
        }
    }
]

module.exports = friends