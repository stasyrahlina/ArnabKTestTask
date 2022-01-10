import random from 'lodash/random';
import faker from 'faker';
import { Observable, Subscription } from 'rxjs';

enum Priority {
  Error,
  Warn,
  Info,
}

export interface Message {
  message: string;
  priority: Priority;
}

const observable = new Observable<Message>(subscriber => {
  const generate = () => {
    const message = faker.lorem.sentence();
    const priority = random(0, 2) as Priority;
    const nextInMS = random(500, 3000);
    subscriber.next({ message, priority });
    setTimeout(generate, nextInMS);
  };
  generate();
});

let subscription: Subscription

export const subscribeFunk = (callback: (message: Message) => void) => {
  subscription = observable.subscribe({
    next: callback,
  });
  return () => subscription.unsubscribe();
};

export const unsubscribeFunk = (): void => {
  subscription.unsubscribe()
};
