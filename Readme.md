### 1. Create New Books
- **Endpoint**: `POST / newbook`
- **Description**: Add a new book to the database.
- **Request Body**:
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A story of decadence, idealism, and excess set in the Roaring Twenties."
  }
  ```
  ```json
    {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "summary": "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice."
  }
  ```
  ```json
  {
    "title": "1984",
    "author": "George Orwell",
    "summary": "A dystopian novel set in a totalitarian society ruled by Big Brother, where truth is manipulated and freedom is suppressed."
  }
  ```
  ```json
   {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "summary": "A romantic novel that explores the manners, education, and marriage in early 19th-century England."
  }
  ```
  ```json
    {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "summary": "A fantasy adventure that follows Bilbo Baggins as he embarks on an epic journey with a group of dwarves."
  }
    ```


### 2. List All Books

- **Endpoint**: `GET /books`
- **Description**: Retrieve a list of all books in the database.
- **Response**: Returns an array of book objects.

### 3. Get Book by ID

- **Endpoint**: `GET /book/:bookId`
- **Description**: Retrieve details of a specific book by its ID.
- **Response**: Returns the book with the specified ID.

### 4. Update Book

- **Endpoint**: `PUT /book/:bookId`
- **Description**: Update the details of a specific book by its ID.

  ```json
  {
    "title": "New Title",
    "author": "New Author",
    "summary": "Updated summary."
  }
  ```

  - **Response**: Returns the updated book.

### 5. Delete Book

- **Endpoint**: `DELETE /deletebook/:bookId`
- **Description**: Delete a book by its ID.
- **Response**: Returns a success message if the book was deleted, or an error message if the book was not found.




<!-- For cars -->
### 1. Create New Cars
- **Endpoint**: `POST /newcar`
- **Description**: Add a new car to the database.
- **Request Body**:

```json
{
  "carname": "Tesla Model S",
  "model": "2023",
  "summary": "A premium electric sedan with advanced autopilot features, long range, and a minimalist interior design."
}
```

```json
{
  "carname": "Ford Mustang",
  "model": "2021",
  "summary": "A classic American muscle car known for its powerful V8 engine, aggressive styling, and strong performance."
}
```

```json
{
  "carname": "Toyota Corolla",
  "model": "2022",
  "summary": "A reliable and fuel-efficient compact sedan, popular for its affordability and low maintenance costs."
}
```

```json
{
  "carname": "Chevrolet Camaro",
  "model": "2020",
  "summary": "A sporty coupe with a powerful engine lineup, sharp handling, and a modern, tech-filled interior."
}
```

```json
{
  "carname": "BMW 3 Series",
  "model": "2023",
  "summary": "A luxury sports sedan offering a balance of performance, comfort, and advanced technology."
}
```

### 2. List All Books

- **Endpoint**: `GET /cars`
- **Description**: Retrieve a list of all cars in the database.
- **Response**: Returns an array of car objects.

### 3. Get Book by ID

- **Endpoint**: `GET /car/:carId`
- **Description**: Retrieve details of a specific car by its ID.
- **Response**: Returns the car with the specified ID.

### 4. Update Book

- **Endpoint**: `PUT /car/:carId`
- **Description**: Update the details of a specific car by its ID.
- **Request Body**:
  ```json
  {
    "carname": "New Name",
    "model": "New Model",
    "summary": "Updated summary."
  }
  ```
- **Response**: Returns the updated car.

### 5. Delete Car

- **Endpoint**: `DELETE /deletecar/:carId`
- **Description**: Delete a car by its ID.
- **Response**: Returns a success message if the car was deleted, or an error message if the car was not found.
