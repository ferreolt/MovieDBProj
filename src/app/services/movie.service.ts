import { Subject } from 'rxjs';

export class MovieService {
  moviesSubject = new Subject<any[]>();
   private movies = [
        {
          id: 1,
          title : 'Avengers',
          image : 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SL1500_.jpg'
        },
        {
            id: 2,
          title : 'Titanic',
          image : 'http://cdn.shopify.com/s/files/1/1148/8924/products/MPW-115495-a_1024x1024.jpg?v=1556255572'
        },
        {
            id: 3,
          title: 'Avatar',
          image: 'https://images-na.ssl-images-amazon.com/images/I/91FKuRPgwCL._SL1500_.jpg'
        },
        {
            id: 4,
          title: 'Avatar',
          image: 'https://images-na.ssl-images-amazon.com/images/I/91FKuRPgwCL._SL1500_.jpg'
        },
        {
            id: 5,
          title: 'Attack on Titan',
          image: 'https://media.senscritique.com/media/000006484765/source_big/L_Attaque_des_Titans.jpg'
        }
      ];

      getMovieById(id: number) {
          const movie = this.movies.find(
              (s) => {
                  return s.id === id;
              }
          );
          return movie;
      }
      emitMovieSubject() {
          this.moviesSubject.next(this.movies.slice());
      }
}
