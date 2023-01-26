# State Management

This documentation is about how we manage the state of the LibriMem appllication.

We want to save the user data on the client. We use IndexedDB through the library dexie.js to achieve this.

## Persisting Data on The Client

### Purpose

The primary purpose to save the data on the frontend is to save calls to the backend which costs resources.

### Functionality

Given that we are offline. Each time we change data we save the change we made in the frontend. Once we are online again we will merge the state.

## Problems

But there are some problems. We use redux for a central single source of truth state mangement. How do we align it with IndexedDB?
What happens if we have a conflict in merging the two states. In that case which state should we prefer?

### Synchronising Backend with The Client

#### Merging

This are the cases we have to consider when we merge the two sets:

- both sets are exactly equal
- frontend has data that backend has not
- backend has data that frontend has not
- frontend has updated data that backend has not
- backend has updated data that frontend has not
