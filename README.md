# Backend Documentation:

### Run Service

1. Open Ternimal in the folder
2. Run `npm i`
3. Run `npm start`
4. Server will run on PORT 4000

### API Details

- Databse contains the Customer details data.
- Sample customer data includes fields such as id, first_name, last_name, city, and company.

1. List API with Search and Pagination:

- Endpoint: `/api/customer/get-all-customers`

- Features:

  - Supports searching customers by first_name, last_name, and city.

  - Supports pagination for listing customers.

  - Returns a paginated list of customers based on search parameters.

  - HTTP Method: GET

  - Query Parameters:
    page: Specifies the page number.
    per_page: Specifies the number of items per page.
    first_name, last_name, city: Optional search parameters.

  - **Example: `/api/customer/get-all-customers?page=1&per_page=10&first_name=Aman&city=Ahmedabad`**

2. Single Customer Data API:

- Endpoint: /api/customer/get-customer-details/:id

- Features:

  - Retrieves data of a single customer by their id.

  - Returns customer information including id, first_name, last_name, city, and company.

  - HTTP Method: GET

  - Path Parameters:
    id: Identifier of the customer.

  - **Example: `/api/customer/get-customer-details/1`**

3. Unique Cities List API:

- Endpoint: `/api/customer/get-customer-by-city`

- Features:

  - Retrieves a list of unique cities along with the number of customers from each city.

  - Returns an array of city objects containing city and count fields.

  - HTTP Method: GET

4. Create Customer

- Endpoint: `/api/customer/add-customer`

- Features:

  - Create a new customer and store the data in databse

  - Returns and object of new created customer

  - HTTP Method: POST

  - Body : {
    "first_name": "Aman",
    "last_name": "Gupta",
    "city": "Ahmedabad",
    "company": "SublimeDataSystems"
    }

4. Edit Customer

- Endpoint: `/api/customer/add-customer`

- Features:

  - Update customer and can add profile.

  - Returns and object of new updated customer

  - HTTP Method: POST

  - Body : {
    "first_name": "Aman",
    "last_name": "Gupta",
    "city": "Ahmedabad",
    "company": "SublimeDataSystems",
    "file": "file_path"
    }

    **NOTE :- Request body should in in Form Data**

6. Total Number of Customer

- Endpoint: `/api/customer/count-of-customer`

- Features:

  - Retrieves a count of all customers for pagination.

  - Returns an object with count key.

  - HTTP Method: GET
