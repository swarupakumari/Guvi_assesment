# Guvi_assesment
# 🚀 GUVI Full Stack Assessment

This project is developed as part of the **GUVI Internship Assessment**.
It demonstrates user authentication, profile management, and hybrid database usage using **MySQL and MongoDB**.

---

## 📌 Project Overview

The application allows users to:

* Register
* Login
* View profile
* Update additional profile details
  The system uses **MySQL for authentication** and **MongoDB for profile details**, following GUVI guidelines.

---

## 🧩 Tech Stack Used

### Frontend

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery (AJAX only)

### Backend

* PHP

### Database

* MySQL → User authentication
* MongoDB → Profile details

---

## 🔑 Features Implemented

✅ User Registration (Stored in MySQL)
✅ Secure Login using Prepared Statements
✅ Session maintained using **LocalStorage only**
✅ Profile page after login
✅ Update profile (Age, Contact etc.)
✅ Profile data stored in MongoDB
✅ AJAX-based backend communication
✅ Responsive UI using Bootstrap
✅ Clean folder structure

---

## 📂 Folder Structure

```
internship-project/
│
├── assets/
│   └── js/
│       ├── login.js
│       ├── register.js
│       └── profile.js
│
├── css/
│
├── php/
│   ├── login.php
│   ├── register.php
│   ├── profile.php
│   ├── update_profile.php
│   └── mongodb_connection.php
│
├── login.html
├── register.html
├── profile.html
├── index.html
└── README.md
```

---

## ⚙️ Database Details

### 🟢 MySQL (User Authentication)

Used for:

* Registration
* Login
* User validation

Secure prepared statements are used to prevent SQL injection.

---

### 🟢 MongoDB (Profile Data)

Used for storing:

* Age
* Contact
* Additional profile details

MongoDB collection stores user profile using email as unique identifier.

---

## 🔄 Application Flow

```
Register → Login → Profile → Update Profile
```

---

## 💻 Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/swarupakumari/Guvi_assesment.git
```

---

### 2️⃣ Move project to XAMPP

Copy project folder inside:

```
C:\xampp\htdocs\
```

---

### 3️⃣ Start Services

Start in XAMPP:

* Apache
* MySQL

Start MongoDB server:

```
mongod
```

---

### 4️⃣ MySQL Setup

Create database:

```
users_db
```

Create table:

```
users
```

---

### 5️⃣ MongoDB Setup

MongoDB automatically creates:

* Database
* Collection
  When profile is updated.

---

### 6️⃣ Run Project

Open browser:

```
http://localhost/internship-project/register.html
```

---



---

## 📬 Notes

* Redis session is optional and not implemented.
* LocalStorage is used as per assessment guidelines.
* Vendor folder removed for clean repository.

---

## 👩‍💻 Author

**Swarupa Kumari**

---

## ⭐ Conclusion

This project successfully fulfills the GUVI assessment requirements including:

* Hybrid database usage
* Secure backend
* AJAX communication
* Responsive UI

---
