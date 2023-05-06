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
