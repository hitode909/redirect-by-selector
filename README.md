- Fetch specified uri, select anchors with specified CSS selector, and redirect to random link.

## HOW TO RUN

```
% npm start
% curl -silent 'http://localhost:8080/?uri=https://blog.sushi.money/&selector=a.entry-title-link' | grep Location
Location: https://blog.sushi.money/entry/2020/04/30/235900
```

## DEPLOY TO CLOUD FUNCTION

```
make deploy
```
