class NewsPublisher:
    def __init__(self):
        self.__subscribers = []
        self.__latest_news = None

    def add_subscriber(self, subscriber):
        self.__subscribers.append(subscriber)

        print(f'{subscriber.name} has been added as a new subscriber')

    def remove_subscriber(self, subscriber):
        self.__subscribers.remove(subscriber)

        print(f'{subscriber.name} has been removed as subscriber')

    def notify_subscribers(self):
        for subscriber in self.__subscribers:
            subscriber.update(self.__latest_news)

    def add_news(self, news):
        self.__latest_news = news
        self.notify_subscribers()


class NewsSubscriber:
    def __init__(self, name):
        self.name = name

    def update(self, news):
        print(f'{self.name}, {news}')


if __name__ == '__main__':
    news_publisher = NewsPublisher()
    news_subscriber1 = NewsSubscriber('Subscriber-1')
    news_subscriber2 = NewsSubscriber('Subscriber-2')

    news_publisher.add_subscriber(news_subscriber1)
    news_publisher.add_subscriber(news_subscriber2)

    print() # new line

    news_publisher.add_news('New sports article has been published')

    print() # new line

    news_publisher.remove_subscriber(news_subscriber1)

    print() # new line

    news_publisher.add_news('New global article has been published')
