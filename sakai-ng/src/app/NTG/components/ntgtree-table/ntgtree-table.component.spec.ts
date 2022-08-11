import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NTGTreeTableComponent } from './ntgtree-table.component';

describe('NTGTreeTableComponent', () => {
  let component: NTGTreeTableComponent;
  let fixture: ComponentFixture<NTGTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NTGTreeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NTGTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
