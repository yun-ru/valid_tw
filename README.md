# Validation for Taiwan

**Example**

Valid(`type, option`)


```js
Valid("phone","0921-876543");
//=> true

Valid("phone","04-98765412","home");
//=> true
```

## Types
* phone (option: home)
* email
* date (option: /,-)
* password
* ID
* account
* creditCard