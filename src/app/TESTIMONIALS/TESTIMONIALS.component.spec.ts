/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TESTIMONIALSComponent } from './TESTIMONIALS.component';

describe('TESTIMONIALSComponent', () => {
  let component: TESTIMONIALSComponent;
  let fixture: ComponentFixture<TESTIMONIALSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TESTIMONIALSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TESTIMONIALSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
