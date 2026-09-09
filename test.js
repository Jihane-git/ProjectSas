function AcheterTickets(){
    let nom = prompt("entrez le nom du passager: ")
    let idTrajet = parseInt(prompt("entrez l'id du trajet: "))

    let trajet = chercherTrajet(idTrajet) 
    if (trajet === null){
        console.log("ce trajet est introuvable!")
    }
    else if (trajet.availableSeats >0) {
        console.log("les places dans ce trajet est complet!")
    }
    else {
        let numeroPlace = 1;
        for (let i=0; i<tickets.length; i++){
            if(tickets[i].tripId === idTrajet &&
               tickets[i].seatNumber === numeroPlace ){
               placeOccupee = true;
               break;
            }
        }
        if (placeOccupee === false){
            break
        }
        numeroPlace++
        
    } 
}