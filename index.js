//RECUPERATION DES JSON POUR LES AJOUTER À MES DATAS
fetch("./datas/monsterRoomList.json")
    .then(function(res) { if (res.ok) { return res.json(); } })
    .then(function(datas) { mesDatas.MonsterRoomList = datas; });
fetch("./datas/tresorRoomList.json")
    .then(function(res) { if (res.ok) { return res.json(); } })
    .then(function(datas) { mesDatas.TresorRoomList = datas; });
fetch("./datas/otherRoomList.json")
    .then(function(res) { if (res.ok) { return res.json(); } })
    .then(function(datas) { mesDatas.otherRoomList = datas; });    

//LES DATAS QUE J'UTILISE AVEC VUEJS DANS LA DIV #APP
mesDatas = {
    bestScore: localStorage.getItem("bestScore"),
    actualScore: 0,
    actualRoomNumber: 0,
    actualRoomType: "Porte",
    actualRoomTitle: "BIENVENUE !",
    actualRoomBackground: "./images/porte.jpg",
    actualRoomBackgroundAlt: "La porte d'entrée d'un donjon...",
    actualRoomDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    actualRoomGold: 0,
        MonsterRoomList: [],
        TresorRoomList: [],
        otherRoomList: []     
}

//MODELE VUE JS
const app = new Vue({
    el: '#app',   
    data: mesDatas,    
    computed: {   
    },   
    methods: {
        
        //Met à jour le score et le meilleur score
        //Charge le changement de la prochaine piece
        nextRoom() {
            
            //MISE À JOUR DU SCORE
            this.actualScore += this.actualRoomGold;
            if(this.actualScore > this.bestScore) {
                localStorage.setItem("bestScore", this.actualScore);
                this.bestScore = localStorage.getItem("bestScore");
            }
            if(this.actualScore < 0) {
                this.actualScore = 0;
            } 

            //AJOUT DU LOG
            this.addNewlog(this.actualRoomType, this.actualRoomGold);
            this.actualRoomNumber ++;
            console.log(this.actualRoomNumber);
            
            //CHARGEMENT DE LA SALLE SUIVANTE
            let randomRoom = getRandomInt(3);
            switch (randomRoom) {
                case 0:
                    this.actualRoomType ="Monstre"
                    break;
                case 1:
                    this.actualRoomType ="Tresor"
                    break;
                case 2:
                    this.actualRoomType ="Autre"
                    break;            
                default:
                    this.actualRoomType ="Inconnu"
                    break;
            }
            this.getRoomContent(this.actualRoomType);
        },
        
        getRoomContent(roomType) {
            //MONSTRE
            if(roomType == "Monstre") {                
                let i = getRandomInt(this.MonsterRoomList.length);
                this.actualRoomTitle = this.MonsterRoomList[i].roomTitle;
                this.actualRoomDescription = this.MonsterRoomList[i].roomDescription;
                this.actualRoomBackground = this.MonsterRoomList[i].roomBackground;
                this.actualRoomBackgroundAlt = this.MonsterRoomList[i].roomBackgroundAlt;
                this.actualRoomGold = this.MonsterRoomList[i].roomGold;

            }
            //TRESOR
            else if(roomType == "Tresor") {
                let i = getRandomInt(this.TresorRoomList.length);
                this.actualRoomTitle = this.TresorRoomList[i].roomTitle;
                this.actualRoomDescription = this.TresorRoomList[i].roomDescription;
                this.actualRoomBackground = this.TresorRoomList[i].roomBackground;
                this.actualRoomBackgroundAlt = this.TresorRoomList[i].roomBackgroundAlt;
                this.actualRoomGold = this.TresorRoomList[i].roomGold;                
            }
            //AUTRE
            else if(roomType == "Autre") {
                let i = getRandomInt(this.otherRoomList.length);
                this.actualRoomTitle = this.otherRoomList[i].roomTitle;
                this.actualRoomDescription = this.otherRoomList[i].roomDescription;
                this.actualRoomBackground = this.otherRoomList[i].roomBackground;
                this.actualRoomBackgroundAlt = this.otherRoomList[i].roomBackgroundAlt;
                this.actualRoomGold = this.otherRoomList[i].roomGold;
            }
        },

        addNewlog(lastRoomType, lastRoomGold) {
            var divLogs = document.getElementById('divLogs');

            var newParagrapheLog = document.createElement('p');
            newParagrapheLog.classList = "log";
            newParagrapheLog.innerHTML = "Salle " + this.actualRoomNumber + ": " + lastRoomType + "  >>>  OR: " + lastRoomGold + "  >>>  OR total: " + this.actualScore;
            divLogs.appendChild(newParagrapheLog);
        }

    }
});

//FONCTIONS EXTERNES
function getRandomInt(maxEclu) {
    return Math.floor(Math.random() * maxEclu);
}
