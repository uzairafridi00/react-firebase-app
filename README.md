# Firebase React Typescript app

1. `npx create-react-app APP_NAME --template typescript`
2. `npm install --save react-router-dom`
3. Now Sign-up to Google Firebase and create project.
4. Now you need to choose to create the app for web -> Select Web-app (</>).
5. Name your app and install the firbase library `npm install firebase`.
6. Now paste all the config code to `config` file to connect to database.

## ALL THE LIBRARIES USED

```js

npm install react-router-dom 
npm install firebase react-firebase-hooks
npm install react-hook-form yup @hookform/resolvers

```

## FIREBASE AUTH

1. Click on Authenticator and Get Started.
2. Now Choose your Auth method, we will use Google one.
3. Then click on enable and choose the email which will handle.
4. Now import the Google Auth to config file.
5. Install react-firebase-hooks library to auto update the content `npm install react-firebase-hooks`.


### Checking the User Logged In

```js

// Checking the User and then display the Menus according to that

 {
    !user ? (
            <Link to="/login">Login</Link>
        ): (
            <Link to="/create-post">Create Post</Link>
        )
 }


{user && (
        <>
          <div className="user">
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              width="60"
              height="60"
              alt="Profile Pic"
            />
            <button onClick={signUserOut}>Log Out</button>
          </div>
        </>
      )}

```


## Now Create Database

1. Build -> FireStore Database -> Create Database


## FireStore Rules

### Default Rule Set by FireStore

```js

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

```


### Setting the Rule for Auth User

```js

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write, delete, update: if request.auth != null && request.auth.uid == request.resource.data.userId;
      allow read: if request.auth != null;
   }
  }
}

```

### Setting the Rule for Deleting if User is Auth


```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write,update: if request.auth != null && request.auth.uid == request.resource.data.userId;
      allow read,delete: if request.auth != null;
   }
  }
}

```