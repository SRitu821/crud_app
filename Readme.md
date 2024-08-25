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



