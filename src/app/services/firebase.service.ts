import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Business } from '../models/business.model';
import { Category } from '../models/category.model';

@Injectable()
export class FirebaseService {
   businesses:FirebaseListObservable<Business[]>;
   categories:FirebaseListObservable<Category[]>;

  constructor(private af:AngularFireDatabase) { }

  getBusinesses() {
    this.businesses = this.af.list('/businesses') as
      FirebaseListObservable<Business[]>
    return this.businesses;
  }

  getCategories() {
    this.categories = this.af.list('/categories') as
      FirebaseListObservable<Category[]>
    return this.categories;
  }

} // end class