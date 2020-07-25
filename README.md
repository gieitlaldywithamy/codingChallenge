# Twig Education Coding Challenge

## How to run

```bash
npm install

npm test
```

## Notes

### MVP

You should implement a function or class that can be called on to provide the following behaviour: Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays. Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.

**I have made one additional assumption: the positive integer N ( the number of groups ) cannot be greater than the length of the input array. In a real work environment, I would have asked for clarification and looked at how and where it would be used.**

### Notes

I chose to include jest as I would not consider this code production-ready without being unit tested. I apologise if this was out of scope, but I think this function would be used to group content and likely to be manipulated further before being presented to the user, if it was broken, you are saving yourself time in the long run by unit testing basic functions.

You may think the code is a little comment sparse, controversially I'm not absolutely certain I would include the single comment I did. In good, self-documented code, you don't have to comment every line because every identifier ( variable, function name ) has a clear semantic name. Being overzealous with your comments actually makes it harder to read code. If you include doxygen and write comments explaining what the code does on a higher abstraction level, in my experience gives you an immediate understand of what the code does and why. Obviously if the "self-documenting" code takes longer to understand, it's not fit for purpose. I'm open to having my opinion on this challenged however!

### Why it works

I chose to use while as this reaps performance benefits when the input array is larger. I did have a few other approaches in mind and if you have a better one ( that's still readable! ) I'm happy to be proved wrong. Without seeing the team's codebase and writing styles, I thought simplicity was best.

### Git notes

Please note I would not have used the same workflow to commit my code if this was in a production environment.
