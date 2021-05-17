import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

  subscription: Subscription = new Subscription();

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = {
      id: this.router.snapshot.params['id'],
      name: this.router.snapshot.params['name']
    };

    this.subscription.add(this.router.params.subscribe(p => this.user = {
      id: p.id,
      name: p.name
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
