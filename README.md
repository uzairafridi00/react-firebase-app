# Firebase React Typescript app

1. `npx create-react-app APP_NAME --template typescript`
2. `npm install --save react-router-dom`
3. Now Sign-up to Google Firebase and create project.
4. Now you need to choose to create the app for web -> Select Web-app (</>).
5. Name your app and install the firbase library `npm install firebase`.
6. Now paste all the config code to `config` file to connect to database.

## FIREBASE AUTH

1. Click on Authenticator and Get Started.
2. Now Choose your Auth method, we will use Google one.
3. Then click on enable and choose the email which will handle.
4. Now import the Google Auth to config file.
5. Install react-firebase-hooks library to auto update the content `npm install react-firebase-hooks`.


### Checking the User Logged In

```js

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