const prompt = require("prompt-sync")();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

function AfficherTrajets() {
    console.log("=== TRAJETS DISPONIBLES ===")
    for (let i = 0; i < trips.length; i++) {
        if (trips.availableSeats !== 0) {
            console.log(
                `#${trips[i].id} ${trips[i].departure} -> ${trips[i].destination} \n` +
                `Depart : ${trips[i].departureTime} \n` +
                `Arrivee : ${trips[i].arrivalTime} \n` +
                `Prix : ${trips[i].price} \n` +
                `Places disponibles : ${trips[i].availableSeats}` +
                `\n `
            )
        }
    }
  
} 
let tickets = [];
function AcheterTickets(){
    let nom= prompt("Entrez le num du passager: ")
    let idT = parseInt( prompt("Entrez l'Identifiant du trajet: ") )
    let trajet = null;
    let ticket = null;

// verifier si id existe 
    for (i=0; i<trips.length; i++){
        if (trips[i].id === idT){
            trajet = trips[i]
            break;
        }
    } 
    if (trajet === null) {
    console.log("Trajet introuvable.");
} 
    else if (trajet.availableSeats === 0) {
    console.log("Train complet.");
}
    else {
    // creer ticket

    let ticket = {
        id: tickets.length + 1,
        passengerName: nom,
        tripId: idT,
        seatNumber: trajet.availableSeats, 
        price: trajet.price
    };

    tickets.push(ticket);
    trajet.availableSeats--;

    console.log("Ticket acheté avec succes !");
}

    console.log(
                `Ticket ${ticket.id}  \n` +  
                `Passager: : ${ticket.passengerName} \n` +
                `Trajet : ${trajet.departure} -> ${trajet.destination} \n` +
                `Prix : ${ticket.price} \n` +
                `Numéro de siège : ${ticket.seatNumber}\n` +
                `Places disponibles : ${ticket.availableSeats}`  
              
            )

}














































let choix;

do {
    console.log(
        "=================================\n" +

        "       RAILWAY MANAGER\n" +

        "=================================\n" +

        "1. Afficher les trajets \n" +

        "2. Acheter un ticket \n" +

        "3. Afficher les tickets \n" +

        "4. Annuler un ticket \n" +

        "5. Rechercher un ticket \n" +

        "6. Filtrer les trajets \n" +

        "7. Trier les trajets \n" +

        "0. Quitter \n")

    choix = parseInt(prompt("Entrez votre choix: "))
    switch (choix) {
        case 1:
            AfficherTrajets()
            break;
        case 2:
            AcheterTickets()
            break;
        case 3:
            AfficherTickets()
            break;
        case 4:
            AnnulerTicket()
            break;
        case 5:
            RechercherTicket()
            break;
        case 6:
            FiltrerTrajets()
            break;
        case 7:
            TrierTrajets()
            break;
        case 0:
            Quitter()
            break;
    }
}
while (choix !== 0) 