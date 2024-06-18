<p align="right">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=AliHadhood.AliHadhood" />
</p>

# 💊 Pharma Management System

Welcome to the Pharma Management System! This project aims to streamline pharmaceutical operations, offering a robust platform for managing medicines, performing CRUD operations, and generating insightful statistics to help managers stay updated and make informed decisions.

## 🚀 Getting Started

### Prerequisites

- 📦 Install [XAMPP](https://www.apachefriends.org/index.html) for the PHP backend and MySQL database.
- 🌐 Ensure you have [Node.js](https://nodejs.org/) installed for the React frontend.

### 📂 Project Structure

- **app**: 🌟 React frontend.
- **backend**: 🐘 PHP backend.

## 🔧 Setup Instructions

### 🖥️ Frontend (React)

1. **Navigate to the `app` directory:**

   ```bash
   cd app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser to view the app:**

   [http://localhost:3000](http://localhost:3000)

   The app will auto-update as you edit files in `app/page.tsx`.

### 🐘 Backend (PHP)

1. **Start XAMPP and ensure Apache and MySQL are running.**

2. **Place the backend folder in the XAMPP `htdocs` directory:**

   ```bash
   mv backend /path/to/xampp/htdocs/pharma_manage_backend
   ```

3. **Import the database:**

   - Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
   - Create a new database named `pharma_db`.
   - Import the SQL file located in the `backend` folder.

4. **Configure the database connection:**

   Edit the `config.php` file in the backend directory to match your database settings:

   ```php
   <?php
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "pharma_db";
   ?>
   ```

5. **Access the backend:**

   [http://localhost/pharma_manage_backend](http://localhost/pharma_manage_backend)

## 🏥 Project Features

- **📝 CRUD Operations**: Easily manage medicines with Create, Read, Update, and Delete functionalities.
- **📊 Statistics**: Generate and view comprehensive statistics to monitor inventory and sales.
- **🔍 Search & Filter**: Quickly find specific medicines using search and filter options.
- **📈 Reports**: Access detailed reports to help managers make data-driven decisions.
- **🔔 Notifications**: Get alerts for low stock levels and expiration dates.

## 🌐 Learn More

To learn more about Next.js and PHP, check out the following resources:

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 📚 [PHP Documentation](https://www.php.net/docs.php)

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🙏 Acknowledgments

Special thanks to:
- Ali Abdallah(https://github.com/ali20021973)
- Sherif-altiby(https://github.com/Sherif-altiby)

---
