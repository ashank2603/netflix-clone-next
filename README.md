# Netflix Clone

How to run:

- Clone the repository.
- Open the directory in a terminal and run <code>npm install</code>
- Create a mongodb database and copy the connection string.
- Create a dotenv file and put the following in it:
```bash
DATABASE_URL="<YOUR_MONGODB_CONNECTION_STRING>"
NEXTAUTH_JWT_SECRET = '<YOUR_JWT_SECRET>'
NEXTAUTH_SECRET = '<YOUR_NEXT_AUTH_SECRET>'
```
- In the terminal now run <code>npx prisma db push</code>
- Now run <code>npm run dev</code> in the terminal.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots

Login Page
![image](https://user-images.githubusercontent.com/61231703/232249264-26d3b23d-054a-4ea7-8640-4360ea53b517.png)

Register Page
![image](https://user-images.githubusercontent.com/61231703/232249415-b3537095-6877-43aa-9ba3-12e63d42b06f.png)

Home Page
![image](https://user-images.githubusercontent.com/61231703/232249352-d1fc1580-d5eb-4bf2-b438-2b883c555bc4.png)

Movie List Page
![image](https://user-images.githubusercontent.com/61231703/232249383-b16e2ed4-62ee-4940-9ddd-3f6303b360c0.png)


## Deployed Link Credentials
- Email: guest@example.com
- Password: guest123
