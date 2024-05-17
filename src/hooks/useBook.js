import { useEffect,useState } from "react";

const useBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setBooks([
              {
                id: 1,
                nombre: "Cien años de soledad",
                autor: "Gabriel García Márquez",
                año_publicacion: 1967,
                isbn_10: "0307474720",
                isbn_13: "9780307474728",
                imagen_portada:
                  "https://images.unsplash.com/photo-1569168731579-e6f24ba5e66e",
                sinopsis:
                  "La novela narra la historia de la familia Buendía en el ficticio pueblo de Macondo, mostrando la soledad y el destino circular de la historia.",
                criticas: [
                  {
                    fuente: "The New York Times",
                    comentario:
                      "Una obra maestra de la literatura latinoamericana.",
                  },
                  {
                    fuente: "The Guardian",
                    comentario:
                      "Una experiencia literaria única e inolvidable.",
                  },
                ],
                categoria: "Realismo mágico",
                fecha_anadido: "2024-05-15",
                popularidad: 9.8,
              },
              {
                id: 2,
                nombre: "1984",
                autor: "George Orwell",
                año_publicacion: 1949,
                isbn_10: "0451524934",
                isbn_13: "9780451524935",
                imagen_portada:
                  "https://images.unsplash.com/photo-1589779606932-18b703fbda33",
                sinopsis:
                  "Una novela distópica que presenta un futuro totalitario donde el gobierno ejerce un control absoluto sobre la vida de las personas.",
                criticas: [
                  {
                    fuente: "BBC",
                    comentario:
                      "Una advertencia atemporal sobre el poder y la vigilancia estatal.",
                  },
                  {
                    fuente: "The Guardian",
                    comentario:
                      "Un clásico que sigue resonando en la era digital.",
                  },
                ],
                categoria: "Distopía",
                fecha_anadido: "2024-05-15",
                popularidad: 9.6,
              },
              {
                id: 3,
                nombre: "Don Quijote de la Mancha",
                autor: "Miguel de Cervantes",
                año_publicacion: 1605,
                isbn_10: "8424116289",
                isbn_13: "9788424116287",
                imagen_portada:
                  "https://images.unsplash.com/photo-1542004209606-3dfac6e9f62a",
                sinopsis:
                  "La historia de un hidalgo que enloquece por la lectura de libros de caballería y decide salir al mundo como caballero andante.",
                criticas: [
                  {
                    fuente: "El País",
                    comentario: "Una obra cumbre de la literatura universal.",
                  },
                  {
                    fuente: "The Telegraph",
                    comentario:
                      "Una exploración profunda de la locura y la realidad.",
                  },
                ],
                categoria: "Novela clásica",
                fecha_anadido: "2024-05-15",
                popularidad: 9.7,
              },
              {
                id: 4,
                nombre: "Orgullo y prejuicio",
                autor: "Jane Austen",
                año_publicacion: 1813,
                isbn_10: "0141439513",
                isbn_13: "9780141439518",
                imagen_portada:
                  "https://images.unsplash.com/photo-1569545387828-fd83d819ff4e",
                sinopsis:
                  "La historia de Elizabeth Bennet y su relación con el rico y orgulloso Sr. Darcy.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario: "Una obra maestra de la comedia romántica.",
                  },
                  {
                    fuente: "The New Yorker",
                    comentario:
                      "Una sátira brillante sobre la sociedad de la época.",
                  },
                ],
                categoria: "Romance",
                fecha_anadido: "2024-05-15",
                popularidad: 9.5,
              },
              {
                id: 5,
                nombre: "Harry Potter y la piedra filosofal",
                autor: "J.K. Rowling",
                año_publicacion: 1997,
                isbn_10: "8478884459",
                isbn_13: "9788478884458",
                imagen_portada:
                  "https://images.unsplash.com/photo-1593465069828-45ba7e478fef",
                sinopsis:
                  "La historia de un joven mago que descubre que es famoso en el mundo de la magia y es enviado a la escuela de magia de Hogwarts.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "El comienzo de una saga que cautivó a millones de lectores en todo el mundo.",
                  },
                  {
                    fuente: "Time Magazine",
                    comentario:
                      "Una entrada triunfante en el género de la fantasía.",
                  },
                ],
                categoria: "Fantasía",
                fecha_anadido: "2024-05-15",
                popularidad: 9.9,
              },
              {
                id: 6,
                nombre: "El señor de los anillos: La comunidad del anillo",
                autor: "J.R.R. Tolkien",
                año_publicacion: 1954,
                isbn_10: "8445000117",
                isbn_13: "9788445000111",
                imagen_portada:
                  "https://images.unsplash.com/photo-1557492459-06b0c742b07e",
                sinopsis:
                  "La primera parte de la trilogía que sigue las aventuras de un hobbit llamado Frodo Bolsón y su misión de destruir un anillo maligno.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "Un clásico moderno que definió el género de la fantasía épica.",
                  },
                  {
                    fuente: "The New York Times",
                    comentario:
                      "Una obra maestra de la imaginación y la narración.",
                  },
                ],
                categoria: "Fantasía épica",
                fecha_anadido: "2024-05-15",
                popularidad: 9.7,
              },
              {
                id: 7,
                nombre: "Matar a un ruiseñor",
                autor: "Harper Lee",
                año_publicacion: 1960,
                isbn_10: "0061120081",
                isbn_13: "9780061120084",
                imagen_portada:
                  "https://images.unsplash.com/photo-1605190798257-34f9f4d91565",
                sinopsis:
                  "La historia de la pequeña Jean Louise Finch, apodada Scout, y su hermano Jem en la ciudad de Maycomb, Alabama.",
                criticas: [
                  {
                    fuente: "The New York Times",
                    comentario:
                      "Una poderosa exploración de la justicia y la moralidad.",
                  },
                  {
                    fuente: "The Guardian",
                    comentario:
                      "Un clásico moderno que sigue siendo relevante hoy en día.",
                  },
                ],
                categoria: "Novela clásica",
                fecha_anadido: "2024-05-15",
                popularidad: 9.4,
              },
              {
                id: 8,
                nombre: "El hobbit",
                autor: "J.R.R. Tolkien",
                año_publicacion: 1937,
                isbn_10: "054792822X",
                isbn_13: "9780547928227",
                imagen_portada:
                  "https://images.unsplash.com/photo-1511315598341-47270edd4773",
                sinopsis:
                  "La historia del hobbit Bilbo Bolsón, quien es reclutado por el mago Gandalf para ayudar a un grupo de enanos a reclamar su hogar y su tesoro de un dragón.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "Una encantadora aventura llena de personajes memorables.",
                  },
                  {
                    fuente: "The New York Times",
                    comentario:
                      "Una introducción perfecta al mundo de la Tierra Media.",
                  },
                ],
                categoria: "Fantasía",
                fecha_anadido: "2024-05-15",
                popularidad: 9.6,
              },
              {
                id: 9,
                nombre: "To Kill a Mockingbird",
                autor: "Harper Lee",
                año_publicacion: 1960,
                isbn_10: "0061120081",
                isbn_13: "9780061120084",
                imagen_portada:
                  "https://images.unsplash.com/photo-1605190798257-34f9f4d91565",
                sinopsis:
                  "The story of Scout Finch and her brother Jem in the town of Maycomb, Alabama.",
                criticas: [
                  {
                    fuente: "The New York Times",
                    comentario:
                      "A powerful exploration of justice and morality.",
                  },
                  {
                    fuente: "The Guardian",
                    comentario: "A modern classic that remains relevant today.",
                  },
                ],
                categoria: "Classic Fiction",
                fecha_anadido: "2024-05-15",
                popularidad: 9.4,
              },
              {
                id: 10,
                nombre: "The Hobbit",
                autor: "J.R.R. Tolkien",
                año_publicacion: 1937,
                isbn_10: "054792822X",
                isbn_13: "9780547928227",
                imagen_portada:
                  "https://images.unsplash.com/photo-1511315598341-47270edd4773",
                sinopsis:
                  "The story of the hobbit Bilbo Baggins, who is recruited by the wizard Gandalf to help a group of dwarves reclaim their home and treasure from a dragon.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "A charming adventure filled with memorable characters.",
                  },
                  {
                    fuente: "The New York Times",
                    comentario:
                      "A perfect introduction to the world of Middle-earth.",
                  },
                ],
                categoria: "Fantasy",
                fecha_anadido: "2024-05-15",
                popularidad: 9.6,
              },
              {
                id: 11,
                nombre: "The Catcher in the Rye",
                autor: "J.D. Salinger",
                año_publicacion: 1951,
                isbn_10: "9780241950425",
                isbn_13: "9780241950425",
                imagen_portada:
                  "https://images.unsplash.com/photo-1552934185-b6a804299eae",
                sinopsis:
                  "The story of Holden Caulfield, a disaffected teenager in New York City, who searches for authenticity in a world full of phoniness.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "An iconic novel that captures the angst of adolescence.",
                  },
                  {
                    fuente: "The New Yorker",
                    comentario:
                      "A timeless exploration of alienation and identity.",
                  },
                ],
                categoria: "Classic Fiction",
                fecha_anadido: "2024-05-15",
                popularidad: 9.3,
              },
              {
                id: 12,
                nombre: "Pride and Prejudice",
                autor: "Jane Austen",
                año_publicacion: 1813,
                isbn_10: "0141439513",
                isbn_13: "9780141439518",
                imagen_portada:
                  "https://images.unsplash.com/photo-1569545387828-fd83d819ff4e",
                sinopsis:
                  "The story of Elizabeth Bennet and her relationship with the rich and proud Mr. Darcy.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario: "A masterpiece of romantic comedy.",
                  },
                  {
                    fuente: "The New Yorker",
                    comentario:
                      "A brilliant satire on the society of the time.",
                  },
                ],
                categoria: "Romance",
                fecha_anadido: "2024-05-15",
                popularidad: 9.5,
              },
              {
                id: 13,
                nombre: "Harry Potter and the Philosopher's Stone",
                autor: "J.K. Rowling",
                año_publicacion: 1997,
                isbn_10: "0747532699",
                isbn_13: "9780747532699",
                imagen_portada:
                  "https://images.unsplash.com/photo-1593465069828-45ba7e478fef",
                sinopsis:
                  "The story of a young wizard who discovers he is famous in the world of magic and is sent to the Hogwarts School of Witchcraft and Wizardry.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "The beginning of a saga that captivated millions of readers worldwide.",
                  },
                  {
                    fuente: "Time Magazine",
                    comentario: "A triumphant entry into the fantasy genre.",
                  },
                ],
                categoria: "Fantasy",
                fecha_anadido: "2024-05-15",
                popularidad: 9.9,
              },
              {
                id: 14,
                nombre: "The Lord of the Rings: The Fellowship of the Ring",
                autor: "J.R.R. Tolkien",
                año_publicacion: 1954,
                isbn_10: "0618346252",
                isbn_13: "9780618346257",
                imagen_portada:
                  "https://images.unsplash.com/photo-1557492459-06b0c742b07e",
                sinopsis:
                  "The first part of the trilogy follows the adventures of a hobbit named Frodo Baggins and his quest to destroy a malevolent ring.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "A modern classic that defined the epic fantasy genre.",
                  },
                  {
                    fuente: "The New York Times",
                    comentario:
                      "A masterpiece of imagination and storytelling.",
                  },
                ],
                categoria: "Epic Fantasy",
                fecha_anadido: "2024-05-15",
                popularidad: 9.7,
              },
              {
                id: 15,
                nombre: "The Great Gatsby",
                autor: "F. Scott Fitzgerald",
                año_publicacion: 1925,
                isbn_10: "9780743273565",
                isbn_13: "9780743273565",
                imagen_portada:
                  "https://images.unsplash.com/photo-1600859615724-64d677221c15",
                sinopsis:
                  "The story of Jay Gatsby, a wealthy man, and his obsession with Daisy Buchanan, a woman he loved in his youth.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "A brilliant portrayal of the Jazz Age and the American Dream.",
                  },
                  {
                    fuente: "The New Yorker",
                    comentario:
                      "A timeless exploration of love, wealth, and identity.",
                  },
                ],
                categoria: "Classic Fiction",
                fecha_anadido: "2024-05-15",
                popularidad: 9.4,
              },
              {
                id: 16,
                nombre: "To Kill a Mockingbird",
                autor: "Harper Lee",
                año_publicacion: 1960,
                isbn_10: "0061120081",
                isbn_13: "9780061120084",
                imagen_portada:
                  "https://images.unsplash.com/photo-1605190798257-34f9f4d91565",
                sinopsis:
                  "The story of Scout Finch and her brother Jem in the town of Maycomb, Alabama.",
                criticas: [
                  {
                    fuente: "The New York Times",
                    comentario:
                      "A powerful exploration of justice and morality.",
                  },
                  {
                    fuente: "The Guardian",
                    comentario: "A modern classic that remains relevant today.",
                  },
                ],
                categoria: "Classic Fiction",
                fecha_anadido: "2024-05-15",
                popularidad: 9.4,
              },
              {
                id: 17,
                nombre: "The Hobbit",
                autor: "J.R.R. Tolkien",
                año_publicacion: 1937,
                isbn_10: "054792822X",
                isbn_13: "9780547928227",
                imagen_portada:
                  "https://images.unsplash.com/photo-1511315598341-47270edd4773",
                sinopsis:
                  "The story of the hobbit Bilbo Baggins, who is recruited by the wizard Gandalf to help a group of dwarves reclaim their home and treasure from a dragon.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "A charming adventure filled with memorable characters.",
                  },
                  {
                    fuente: "The New York Times",
                    comentario:
                      "A perfect introduction to the world of Middle-earth.",
                  },
                ],
                categoria: "Fantasy",
                fecha_anadido: "2024-05-15",
                popularidad: 9.6,
              },
              {
                id: 18,
                nombre: "The Catcher in the Rye",
                autor: "J.D. Salinger",
                año_publicacion: 1951,
                isbn_10: "9780241950425",
                isbn_13: "9780241950425",
                imagen_portada:
                  "https://images.unsplash.com/photo-1552934185-b6a804299eae",
                sinopsis:
                  "The story of Holden Caulfield, a disaffected teenager in New York City, who searches for authenticity in a world full of phoniness.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "An iconic novel that captures the angst of adolescence.",
                  },
                  {
                    fuente: "The New Yorker",
                    comentario:
                      "A timeless exploration of alienation and identity.",
                  },
                ],
                categoria: "Classic Fiction",
                fecha_anadido: "2024-05-15",
                popularidad: 9.3,
              },
              {
                id: 19,
                nombre: "Pride and Prejudice",
                autor: "Jane Austen",
                año_publicacion: 1813,
                isbn_10: "0141439513",
                isbn_13: "9780141439518",
                imagen_portada:
                  "https://images.unsplash.com/photo-1569545387828-fd83d819ff4e",
                sinopsis:
                  "The story of Elizabeth Bennet and her relationship with the rich and proud Mr. Darcy.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario: "A masterpiece of romantic comedy.",
                  },
                  {
                    fuente: "The New Yorker",
                    comentario:
                      "A brilliant satire on the society of the time.",
                  },
                ],
                categoria: "Romance",
                fecha_anadido: "2024-05-15",
                popularidad: 9.5,
              },
              {
                id: 20,
                nombre: "Harry Potter and the Philosopher's Stone",
                autor: "J.K. Rowling",
                año_publicacion: 1997,
                isbn_10: "0747532699",
                isbn_13: "9780747532699",
                imagen_portada:
                  "https://images.unsplash.com/photo-1593465069828-45ba7e478fef",
                sinopsis:
                  "The story of a young wizard who discovers he is famous in the world of magic and is sent to the Hogwarts School of Witchcraft and Wizardry.",
                criticas: [
                  {
                    fuente: "The Guardian",
                    comentario:
                      "The beginning of a saga that captivated millions of readers worldwide.",
                  },
                  {
                    fuente: "Time Magazine",
                    comentario: "A triumphant entry into the fantasy genre.",
                  },
                ],
                categoria: "Fantasy",
                fecha_anadido: "2024-05-15",
                popularidad: 9.9,
              },
            ]);
        }, 3000);
    },[])

    return books;
}

export {useBook}