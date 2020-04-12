# express-api

Basic Rest API developed with Express

## Steps

Clone repository

```bash
git clone https://github.com/reisbel/express-api.git && cd express-api
```

Install npm packages

```bash
npm install
```

Run the application

```bash
npm start
```

## Explore the API 

Get task list

```bash
curl --location --request GET 'http://localhost:8080/todo'
```

Create a task

```bash
curl --location --request POST 'http://localhost:8080/todo' \
--data-urlencode 'name=dummy task' \
--data-urlencode 'completed=false'
```

Update a task

```bash
curl --location --request PUT 'http://localhost:8080/todo/1' \
--data-urlencode 'name=updated dummy task' \
--data-urlencode 'completed=true'
```

Delete a task

```bash
curl --location --request DELETE 'http://localhost:8080/todo/1'
```

## References

* [Build a basic Rest API](https://medium.com/better-programming/use-express-to-build-a-rest-api-69bd4abb8e4a)
* [How to Secure Your API With JSON Web Tokens](https://medium.com/javascript-in-plain-english/how-to-secure-your-api-with-json-web-tokens-495ec68ba6cd)
