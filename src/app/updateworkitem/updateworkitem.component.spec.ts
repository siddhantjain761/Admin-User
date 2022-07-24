import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateworkitemComponent } from './updateworkitem.component';

describe('UpdateworkitemComponent', () => {
  let component: UpdateworkitemComponent;
  let fixture: ComponentFixture<UpdateworkitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateworkitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateworkitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
