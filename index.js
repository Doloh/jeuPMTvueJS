mesDatas = {
    actualScore: 0,
    actualRoom: "Porte",
    actualRoomTitle: "BIENVENUE !",
    actualRoomBackground: "./images/porte.jpg",
    actualRoomBackgroundAlt: "",
    actualRoomDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        MonsterRoomList: [
            {
                roomTitle: "Alien !",
                roomBackground: "",
                roomBackgroundAlt: "",
                roomDescription: "un Alien"
            },
            {
                roomTitle: "Gizmo !",
                roomBackground:"",
                roomBackgroundAlt:"",
                roomDescription: "un Gizmo"
            },
            {
                roomTitle: "Dragon !",
                roomBackground:"",
                roomBackgroundAlt:"",
                roomDescription: "un Dragon"
            },
        ],
        TresorRoomList: [
            {
                roomTitle: "Petit Tresor !",
                roomBackground:"./images/tresor1.jpg",
                roomBackgroundAlt:"",
                roomDescription:"",
            },
            {
                roomTitle: "Tresor Moyen !",
                roomBackground:"./images/tresor2.jpg",
                roomBackgroundAlt:"",
                roomDescription:"",
            },
            {
                roomTitle: "Incroyable Tresor !",
                roomBackground:"./images/tresor3.jpg",
                roomBackgroundAlt:"",
                roomDescription:"",
            },
        ],
        otherRoomList: [
            {
                roomTitle:"Une fontaine !",
                roomBackground:"",
                roomBackgroundAlt:"",
                roomDescription:"",
            },
            {
                roomTitle:"Un cachot !",
                roomBackground:"",
                roomBackgroundAlt:"",
                roomDescription:"",
            },
            {
                roomTitle:"Rien du tout !",
                roomBackground:"",
                roomBackgroundAlt:"",
                roomDescription:"",
            },
        ]

    
}

const app = new Vue({
    el: '#app',   
    data: mesDatas,    
    computed: {   
    },   
    methods: {
        // renvoie un chiffre compris entre 0 inclus et la valeur max indiquée exclu.
        // 0: monstre 1: tresor 3:autre
        getActualRoom() {
            this.actualRoom = getRandomInt(3);
            this.getRoomContent(this.actualRoom);
        },
        
        getRoomContent(roomType) {
            //MONSTRE
            if(roomType == 0) {                
                let i = getRandomInt(this.MonsterRoomList.length);
                this.actualRoomTitle = this.MonsterRoomList[i].roomTitle;
                this.actualRoomDescription = this.MonsterRoomList[i].roomDescription;
                this.actualRoomBackground = this.MonsterRoomList[i].roomBackground;
                this.actualRoomBackgroundAlt = this.MonsterRoomList[i].roomBackgroundAlt;

            }
            //TRESOR
            else if(roomType == 1) {
                let i = getRandomInt(this.TresorRoomList.length);
                this.actualRoomTitle = this.TresorRoomList[i].roomTitle;
                this.actualRoomDescription = this.TresorRoomList[i].roomDescription;
                this.actualRoomBackground = this.TresorRoomList[i].roomBackground;
                this.actualRoomBackgroundAlt = this.TresorRoomList[i].roomBackgroundAlt;
                
            }
            //AUTRE
            else if(roomType == 2) {
                let i = getRandomInt(this.otherRoomList.length);
                this.actualRoomTitle = this.otherRoomList[i].roomTitle;
                this.actualRoomDescription = this.otherRoomList[i].roomDescription;
                this.actualRoomBackground = this.otherRoomList[i].roomBackground;
                this.actualRoomBackgroundAlt = this.otherRoomList[i].roomBackgroundAlt;
            }
        }
    }
});

function getRandomInt(maxEclu) {
    return Math.floor(Math.random() * maxEclu);
}



// bouton continue relance la fonction

// selon numero relance un random parmis monstre, tresor ou autre

// affiche la div associée

//gere le contenu de la div en allant piocher dans la base