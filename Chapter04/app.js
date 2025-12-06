const express = require("express");
const app = express();

app.set("view engine","ejs");

app.use((req,res,next)=>{
    console.log("this is middleware");
    return next();
})

/*
Here you go — **Express ke 3 main types of Middleware** + **EJS ka short explanation** ― simple, clean language mein 👇

---

# 🔥 **3 Types of Middleware in Express**

Express mein mainly **3 tarah ke middleware** hote hain:

---

## **1️⃣ Application-level Middleware (Global Middleware)**

👉 Entire app par lagu hota hai.
👉 Har request ke liye chalega (unless specific route restricted).

Example:

```js
app.use((req, res, next) => {
    console.log("Time:", Date.now());
    next();
});
```

💡 **Use cases**: logging, parsing, authentication check, static files.

---

## **2️⃣ Router-level Middleware**

👉 Sirf specific route ya group of routes ke liye chalta hai.
👉 `express.Router()` ke saath use hota hai.

Example:

```js
const router = express.Router();

router.use((req, res, next) => {
    console.log("Router middleware chal raha hai");
    next();
});

router.get("/user", (req, res) => {
    res.send("User page");
});

app.use("/", router);
```

💡 **Use cases**: large projects mein route grouping + permissions.

---

## **3️⃣ Built-in or Third-party Middleware**

### **A) Built-in Middleware**

Express ke saath aate hain:

* `express.json()`
* `express.urlencoded()`
* `express.static()`

Example:

```js
app.use(express.json());
```

### **B) Third-party Middleware**

Bahaar se install kiye jaate hain:

* `morgan` (logging)
* `cors`
* `cookie-parser`
* `helmet`

Example:

```js
const morgan = require("morgan");
app.use(morgan("dev"));
```

💡 **Use cases**: security, cookies, logging, validation, sessions, etc.

---

# 🎨 **EJS in Short**

**EJS = Embedded JavaScript Templates**
HTML ke andar JavaScript likh sakte ho:

```html
<h1>Hello <%= name %></h1>
```

### Express setup:

```js
app.set("view engine", "ejs");
```

### Rendering a view:

```js
app.get("/", (req, res) => {
    res.render("home", { name: "Srinjay" });
});
```

### Features:

✔ Dynamic HTML
✔ Partials (header.ejs, footer.ejs)
✔ Loops, conditionals
✔ Data injection from backend

---

# 📌 Quick Summary

| Topic                                 | Meaning                                             |
| ------------------------------------- | --------------------------------------------------- |
| **Application Middleware**            | Whole app ke liye chalta hai                        |
| **Router Middleware**                 | Specific routes ke liye chalta hai                  |
| **Built-in / Third-party Middleware** | Express ke inbuilt + npm se install hone wale tools |
| **EJS**                               | HTML + JS template engine to render dynamic pages   |

*/


app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/about',(req,res)=>{
    res.send("Hello from about page !");
})

app.listen(3000);