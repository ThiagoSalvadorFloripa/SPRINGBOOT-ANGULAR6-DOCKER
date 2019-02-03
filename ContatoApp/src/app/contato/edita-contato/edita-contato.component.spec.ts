import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaContatoComponent } from './edita-contato.component';

describe('EditaContatoComponent', () => {
  let component: EditaContatoComponent;
  let fixture: ComponentFixture<EditaContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
