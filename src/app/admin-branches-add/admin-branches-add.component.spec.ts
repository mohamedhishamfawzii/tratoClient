import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBranchesAddComponent } from './admin-branches-add.component';

describe('AdminBranchesAddComponent', () => {
  let component: AdminBranchesAddComponent;
  let fixture: ComponentFixture<AdminBranchesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBranchesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBranchesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
