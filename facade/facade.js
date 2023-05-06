class TicketingSystem {
    constructor(movieName) {
        this.movieName = movieName;
    }

    buyTicket() {
        console.log(`Ticket purchased for ${this.movieName}`);
    }
}

class SeatReservationSystem {
    constructor(theaterName) {
        this.theaterName = theaterName;
    }

    selectSeat() {
        console.log(`Seat selected at ${this.theaterName}`);
    }
}

class SnackCounter {
    constructor(snacks) {
        this.snacks = snacks;
    }

    buySnacks() {
        console.log(`${this.snacks} purchased at the snack counter`);
    }
}

class MovieTheaterFacade {
    constructor(movieName, theaterName, snacks) {
        this.ticketingSystem = new TicketingSystem(movieName);
        this.seatReservationSystem = new SeatReservationSystem(theaterName);
        this.snackCounter = new SnackCounter(snacks);
    }

    watchMovie() {
        this.ticketingSystem.buyTicket();
        this.seatReservationSystem.selectSeat();
        this.snackCounter.buySnacks();

        console.log('Enjoy the movie!');
    }
}

const movieTheaterFacade = new MovieTheaterFacade('Movie-1', 'Theater-1', 'Burger and Coke');
movieTheaterFacade.watchMovie();
