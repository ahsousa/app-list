import { Component, OnInit }      from '@angular/core';
import { AppService }             from '../core/services/app.service';
import { IApp }                   from '../core/interfaces/iapp';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  apps = [] as IApp[];
  appsCopy = [] as IApp[];
  categories = [];
  filter: string;
  filteredApps = [] as IApp[];
  searchTerm: string;
  p = 1;
  q = 1;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getApps().subscribe(apps => {
      this.apps = apps.sort(this.compare);
      this.appsCopy = this.apps;
      apps.forEach(app => {
        if (app.categories) {
          app.categories.forEach(category => {
            if (!this.categories.includes(category)) {
              this.categories.push(category);
            }
          });
        }
      });
      this.categories.sort((a, b) => a.localeCompare(b));
    });
  }

  compare(a: IApp, b: IApp) {
    let sumA = a.subscriptions.map(sub => sub.price).reduce((a, b) => a + b, 0);
    let sumB = b.subscriptions.map(sub => sub.price).reduce((a, b) => a + b, 0);

    if (sumA > sumB) {
      return 1;
    }
    if (sumA < sumB) {
      return -1;
    }
    return 0;
  }


  filterCategory(event: any) {
    if (event === 'Categories') {
      this.filteredApps = [];
      return;
    }
    this.filteredApps = this.apps.filter(app => {
      if (app.categories.includes(event)) {
        return app;
      }
    });
  }

}

