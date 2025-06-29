import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaListComponent } from './area-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AreaListComponent', () => {
  let component: AreaListComponent;
  let fixture: ComponentFixture<AreaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaListComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
