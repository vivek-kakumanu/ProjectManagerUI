import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttaskdialogComponent } from './parenttaskdialog.component';

describe('ParenttaskdialogComponent', () => {
  let component: ParenttaskdialogComponent;
  let fixture: ComponentFixture<ParenttaskdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenttaskdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttaskdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
