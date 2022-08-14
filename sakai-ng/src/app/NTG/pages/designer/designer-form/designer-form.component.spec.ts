import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerFormComponent } from './designer-form.component';

describe('DesignerFormComponent', () => {
  let component: DesignerFormComponent;
  let fixture: ComponentFixture<DesignerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
