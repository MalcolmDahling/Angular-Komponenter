import { ComponentFixture, TestBed } from '@angular/core/testing';


import { AnimalsComponent } from './animals.component';

describe('AnimalsComponent', () => {
  let component: AnimalsComponent;
  let fixture: ComponentFixture<AnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should count the animals', () => {
    expect(component.animalsArray.length).toBe(4);

    component.animalsArray.length++;

    expect(component.animalsArray.length).toBe(5);
  });
});
