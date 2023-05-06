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
