import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mr.Phong' },
      { id: 2, name: 'Mr.Danh' },
      { id: 3, name: 'Mr.Long' },
      { id: 4, name: 'Mr.Liem' },
      { id: 5, name: 'Mr.Thien' },
      { id: 6, name: 'Mr.Tien' }
    ];
    return{heroes};
  }

}
