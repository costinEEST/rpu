Notes from the [book](https://pragprog.com/titles/smreactjs5/reactive-programming-with-rxjs-5)

- Observable == stream of events

- Side effects == Changing a variable external to our function, printing to the console, or updating a value in a database

- `push-based behavior` means that the server component of an application sends updates to its clients instead of the clients having to poll the server for
  these updates.

- RxJS is push-based, so the source of events (the Observable) will push new values to the consumer (the Subscriber), without the consumer requesting the next value.

- Differences from the traditional [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern#JavaScript):

  - An Observable doesn’t start streaming items until it has at least one
    Observer subscribed to it.
  - Like iterators, an Observable can signal when the sequence is completed.

- The Observer interface contains three methods: `next`, `complete`, and `error`.
