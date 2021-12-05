import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterWordScreenComponent } from './enter-word-screen.component';

describe('EnterWordScreenComponent', () => {
  let component: EnterWordScreenComponent;
  let fixture: ComponentFixture<EnterWordScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterWordScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterWordScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
