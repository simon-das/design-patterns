# Observer Pattern

Observer design pattern is `a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes its state, all its dependent objects are notified and updated automatically`. The main idea behind this pattern is to establish a loose coupling between the objects, where the subject or the publisher object does not need to know about the subscribers or the observer objects, and the observers only need to know about the subject, without knowing about other observers.

In this pattern, the subject maintains a list of its observers, and when its state changes, it notifies all the observers by calling their update method. The observers can then access the new state of the subject and perform any necessary actions based on it.

Observer pattern is widely used in GUI programming, where changes in one widget may require changes in other widgets, or in systems where multiple components need to be notified of changes in a particular component.

### A Few Use Cases
1. **Event handling**: In graphical user interfaces, events like button clicks, mouse movements, and keyboard presses occur frequently. The Observer pattern can be used to handle these events, where the subject is the GUI element and the observers are the event handlers.
2. **Stock market monitoring**: Investors and analysts need to stay up-to-date with stock prices and market trends. The Observer pattern can be used to build an application that monitors stock prices and alerts users when there are significant changes.
3. **Message queues**: When messages are placed on a queue, multiple processes may need to be notified when a new message is available. The Observer pattern can be used to notify the processes that are waiting for new messages.
4. **Temperature monitoring**: Temperature sensors can be used to monitor the temperature of a room or a machine. The Observer pattern can be used to alert maintenance personnel or an automated system when the temperature exceeds a certain threshold.
5. **Traffic monitoring**: Traffic sensors can be used to monitor the flow of vehicles on a highway. The Observer pattern can be used to analyze the traffic patterns and detect areas of congestion or accidents.

<br>

## Example
Suppose we have a simple news application that allows users to subscribe. Whenever a new article is published, the subscribed users should receive a notification.

## Python Implementation
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

### Output
    Subscriber-1 has been added as a new subscriber
    Subscriber-2 has been added as a new subscriber

    Subscriber-1, New sports article has been published
    Subscriber-2, New sports article has been published

    Subscriber-1 has been removes as subscriber

    Subscriber-2, New global article has been published
    
<br>

## JavaScript Implementation
    class NewsPublisher {
        constructor() {
            this._subscribers = [];
            this._latestNews = null;
        }

        addSubscriber(subscriber) {
            this._subscribers.push(subscriber);

            console.log(`${subscriber.name} has been added as a new subscriber`);
        }

        removeSubscriber(subscriber) {
            this._subscribers = this._subscribers.filter(sub => sub !== subscriber);

            console.log(`${subscriber.name} has been removed as subscriber`);
        }

        notifySubscribers() {
            this._subscribers.forEach(subscriber => {
                subscriber.update(this._latestNews);
            });
        }

        addNews(news) {
            this._latestNews = news;
            this.notifySubscribers();
        }
    }

    class NewsSubscriber {
        constructor(name) {
            this.name = name;
        }

        update(news) {
            console.log(`${this.name}, ${news}`);
        }
    }

    const newsPublisher = new NewsPublisher();
    const newsSubscriber1 = new NewsSubscriber('Subscriber-1');
    const newsSubscriber2 = new NewsSubscriber('Subscriber-2');

    newsPublisher.addSubscriber(newsSubscriber1);
    newsPublisher.addSubscriber(newsSubscriber2);

    console.log() // new line

    newsPublisher.addNews('New sports article has been published');

    console.log() // new line

    newsPublisher.removeSubscriber(newsSubscriber1);

    console.log() // new line

    newsPublisher.addNews('New global article has been published');

### Output
    Subscriber-1 has been added as a new subscriber
    Subscriber-2 has been added as a new subscriber

    Subscriber-1, New sports article has been published
    Subscriber-2, New sports article has been published

    Subscriber-1 has been removes as subscriber

    Subscriber-2, New global article has been published
