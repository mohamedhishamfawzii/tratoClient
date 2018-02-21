import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCat2AddComponent } from './admin-cat2-add.component';

describe('AdminCat2AddComponent', () => {
  let component: AdminCat2AddComponent;
  let fixture: ComponentFixture<AdminCat2AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCat2AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCat2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
