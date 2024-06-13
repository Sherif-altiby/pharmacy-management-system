import pandas as pd
import mysql.connector
from mysql.connector import Error

# Function to connect to MySQL database
def connect_to_mysql():
    try:
        connection = mysql.connector.connect(
            host='127.0.0.1',
            database='pharmacy_management_system',
            user='root',
            password=''
        )
        if connection.is_connected():
            print('Connected to MySQL database')
            return connection
    except Error as e:
        print(f'Error connecting to MySQL database: {e}')
        return None

# Read data from Excel file and return as lists
def read_excel_data(excel_file):
    try:
        data = pd.read_excel(excel_file)
        print('Excel file read successfully')
        names = data['Name'].tolist()
        box_prices = data['box_price'].tolist()
        tape_prices = data['Tape_price'].tolist()
        amounts = data['amount'].tolist()
        expire_dates = data['expire'].tolist()
        return names, box_prices, tape_prices, amounts, expire_dates
    except FileNotFoundError:
        print(f'Error: Excel file "{excel_file}" not found')
        return None, None, None, None, None

# Function to insert data into MySQL Medicine table
def insert_medicine_data(connection, names, box_prices, tape_prices, amounts, expire_dates):
    try:
        cursor = connection.cursor()
        for name, box_price, tape_price, amount, expire_date in zip(names, box_prices, tape_prices, amounts, expire_dates):
            sql = "INSERT INTO Medicine (Name, Box_Amount, Tape_Amount, Tape_Price, Expire,barcode) VALUES (%s, %s, %s, %s, %s,'0')"
            cursor.execute(sql, (name, box_price, tape_price, amount, expire_date))
        connection.commit()
        print(f'{len(names)} records inserted successfully into MySQL Medicine table')
    except Error as e:
        print(f'Error inserting data into MySQL Medicine table: {e}')

# Read data from Excel file
excel_file = 'E:\semester-6\Ahmed-project/medicine.xls'
names, box_prices, tape_prices, amounts, expire_dates = read_excel_data(excel_file)

# Connect to MySQL database
connection = connect_to_mysql()
if connection is None:
    exit()

# Insert data into MySQL Medicine table
insert_medicine_data(connection, names, box_prices, tape_prices, amounts, expire_dates)

# Close MySQL connection
if connection.is_connected():
    connection.close()
    print('MySQL connection closed')
