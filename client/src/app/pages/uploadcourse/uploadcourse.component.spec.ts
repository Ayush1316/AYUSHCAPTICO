import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcourseComponent } from './uploadcourse.component';

describe('UploadcourseComponent', () => {
  let component: UploadcourseComponent;
  let fixture: ComponentFixture<UploadcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
