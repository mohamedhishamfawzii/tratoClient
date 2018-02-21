import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCat1AddComponent } from './admin-cat1-add.component';

describe('AdminCat1AddComponent', () => {
  let component: AdminCat1AddComponent;
  let fixture: ComponentFixture<AdminCat1AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCat1AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCat1AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
