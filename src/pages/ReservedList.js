import { useReserverdlist } from "../hooks/useReservedlist";
import Loader from "../components/loader/Loader";
import Title from "../components/tittle/Title";
import BookCard from "../components/bookcard/BookCard";

const ReservedList = () => {

    const {books} = useReserverdlist();

    return (
      <div className="container-fliud">
        {books.length > 0 ? (
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Title title="Libros prestados"></Title>
                <div className="row m-2 p-1">
                  {books.map((book, index) => {
                    console.log('LIBROOOOOXS ',book.libro);
                    return <BookCard key={index} book={book.libro} />;
                  })}
                </div>
              </div>
              
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
}

export default ReservedList;