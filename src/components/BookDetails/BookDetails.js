import {Link} from 'react-router-dom';

export const BookDetails = () => {
    return (
        <section>
        <h1>Mi Sección</h1>
        <div className="item">
          <h2>Título del ítem</h2>
          <img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen" />
          <p>Categoría:</p>
          <p>Descripción del ítem</p>
        </div>
        <div className="comments">
          <h3>Comentarios</h3>
          <ul>
            <li>Comentario 1</li>
          </ul>
        </div>
        <div className="actions">
          <Link to='/delete'>Delete</Link>
          <Link to="/catalog/:bookId/edit">Edit</Link>
        </div>

        <article>
        <form>
        <label>Add new comment:</label>
        <input type="text" placeholder='Name' id="name" name="name" /><br />
        <textarea id="comments" placeholder='Comments' name="comments" defaultValue={""} /><br />

        < input className="btn submit" type="submit" value="Add Comment"/>
      </form>
        </article>
      

      </section>
    );
};