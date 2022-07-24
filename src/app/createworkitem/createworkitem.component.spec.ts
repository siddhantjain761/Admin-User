import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateworkitemComponent } from './createworkitem.component';

describe('CreateworkitemComponent', () => {
  let component: CreateworkitemComponent;
  let fixture: ComponentFixture<CreateworkitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateworkitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateworkitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
