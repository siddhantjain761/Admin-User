import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkitemComponent } from './user-workitem.component';

describe('UserWorkitemComponent', () => {
  let component: UserWorkitemComponent;
  let fixture: ComponentFixture<UserWorkitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
