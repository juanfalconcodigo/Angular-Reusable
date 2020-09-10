import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryViewComponent } from './country-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from 'src/app/core/services/country.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of, throwError } from 'rxjs';

describe('CountryViewComponent', () => {
  let component: CountryViewComponent;
  let fixture: ComponentFixture<CountryViewComponent>;
  let store: MockStore;
  const initialState = { search: "" };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryViewComponent],
      imports: [
        HttpClientModule
      ],
      providers: [
        CountryService,
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
      store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should country service fine get users', () => {
    const countries=['Peru','Chile','Argentina'];
    spyOn(component._countryService, 'getCountries').and.returnValue(of(countries ));
    component.getCountriesMethod();
    expect(component.error).toBeFalsy();
    expect(component.countries).toEqual(countries);
    expect(component.datafake).toEqual(countries);
  });


  it('should country service error get users', () => {
    spyOn(component._countryService, 'getCountries').and.returnValue(throwError({error:'fatal'}));
    component.getCountriesMethod();
    expect(component.error).toBeTruthy();
    expect(component.countries).toEqual([]);
    expect(component.datafake).toEqual([]);
  });


  it('should country service fine ngOnInit', () => {
    const country=[{name:'Peru'}];
    spyOn(component._countryService, "getCountry").and.returnValue(of(country));
    component.ngOnInit();
    expect(component.error).toBeFalsy();
    expect(component.countries).toEqual(country);
  });


});
