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



