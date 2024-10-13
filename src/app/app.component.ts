import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public loremText: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minus, harum asperiores molestias, facere pariatur fugit ex ab alias fugiat, optio quia. Aliquid beatae voluptatum soluta voluptas, excepturi nobis cupiditate!';
  public nothing?: boolean

  public user$: Observable<{ name: string; age: number }> | undefined;

  public some: { name: string; age: number } = {name: '1234', age: 25}

  constructor(private userService: UserService){

  }

  public ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

  public changeText(): void {
    this.loremText = 'simple';
    this.loremText = this.generateRandomString(5);
  }

  public changeNothing(): void {
    this.nothing = !this.nothing;
  }

  private generateRandomString(length: number): string {
    return Math.random().toString(36).substring(2, length + 2);
  }
}
