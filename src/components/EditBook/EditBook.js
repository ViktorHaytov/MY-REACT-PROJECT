export const EditBook = () => {
    return (
        <div className="form-container">
        <form>
            <label>Edit Book</label>
          <div className="form-group">
            <label htmlFor="title">Títle:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" />
          </div>
          <div className="form-group">
            <label htmlFor="book-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows={5} cols={40} defaultValue={""} />
          </div>
          <div className="form-group">
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    )
}