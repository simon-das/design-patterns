# Facade Pattern
The Facade design pattern is a software design pattern that `provides a simplified interface to a complex system of classes, interfaces, and objects`. It `hides the complexity of the system and provides an easy-to-use interface to the client code`.

Think of it like a simplified "facade" or front-end interface for a complex system. Just as a building's facade can hide the complexities of its internal structure, a software facade can hide the complexities of a system's internal workings.

The Facade pattern is useful in situations where a complex system needs to be accessed by client code, but the complexity of the system is a hindrance to the client. The Facade provides a simplified interface that shields the client from the details of the system's implementation, making it easier to use and understand.

### A Few Use Cases
1. **Simplifying complex systems**: The Facade pattern can be used to simplify a complex system by providing a single, simplified interface that hides the underlying complexity of the system. This can make it easier for developers to work with the system and for users to interact with it.
2. **Decoupling subsystems**: The Facade pattern can be used to decouple subsystems by providing a single interface that abstracts away the details of the subsystems. This can make it easier to maintain and modify the subsystems without affecting the rest of the system.
3. **Providing a unified interface**: The Facade pattern can be used to provide a unified interface to a group of related classes or functions. This can make it easier to use the group of classes or functions in a consistent way and can simplify the code that uses them.
4. **Enhancing performance**: The Facade pattern can be used to enhance performance by providing a simplified interface that reduces the number of calls to underlying subsystems. This can reduce the overhead associated with complex systems and improve the overall performance of the system.
5. **Improving testability**: The Facade pattern can be used to improve the testability of a system by providing a simplified interface that makes it easier to write tests. By providing a single, consistent interface, the Facade pattern can make it easier to write tests that cover the entire system.

<br>

## Example
Suppose you want to watch a movie at a theater. You would typically need to go through several steps such as buying a ticket, selecting a seat, and buying snacks. Each of these steps may involve interacting with different subsystems such as the ticketing system, seat reservation system, and snack counter. To simplify the process for the user, the theater could provide a facade that encapsulates these subsystems and presents a simple interface for the user to interact with.

<br>

## Python Implementation
    class TicketingSystem:
        def __init__(self, movie_name):
            self.movie_name = movie_name

        def buy_ticket(self):
            print(f'Ticket purchased for {self.movie_name}')


    class SeatReservationSystem:
        def __init__(self, theater_name):
            self.theater_name = theater_name

        def select_seat(self):
            print(f'Seat selected at {self.theater_name}')


    class SnackCounter:
        def __init__(self, snacks):
            self.snacks = snacks

        def buy_snacks(self):
            print(f'{self.snacks} purchased at the snack counter')


    class MovieTheaterFacade:
        def __init__(self, movie_name, theater_name, snacks):
            self.ticketing_system = TicketingSystem(movie_name)
            self.seat_reservation_system = SeatReservationSystem(theater_name)
            self.snack_counter = SnackCounter(snacks)

        def watch_movie(self):
            self.ticketing_system.buy_ticket()
            self.seat_reservation_system.select_seat()
            self.snack_counter.buy_snacks()

            print('Enjoy the movie!')


    if __name__ == '__main__':
        movie_theater_facade = MovieTheaterFacade('Movie-1', 'Theater-1', 'Burger and Coke')
        movie_theater_facade.watch_movie()
        
### Output
    Ticket purchased for Movie-1
    Seat selected at Theater-1
    Burger and Coke purchased at the snack counter
    Enjoy the movie!
        
<br>

## JavaScript Implementation
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

### Output
    Ticket purchased for Movie-1
    Seat selected at Theater-1
    Burger and Coke purchased at the snack counter
    Enjoy the movie!
