import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourShowsComponent } from './your-shows.component';

describe('YourShowsComponent', () => {
  let component: YourShowsComponent;
  let fixture: ComponentFixture<YourShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
