import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from './country.service';
import { environment } from 'src/environments/environment';


describe('CountryService', () => {
  let httpMock: HttpTestingController;
  let injector:TestBed;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
            HttpClientTestingModule
      ],
      providers:[
        CountryService
      ]
    });
    injector=getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

 /*  it('should be created', () => {
    expect(service).toBeTruthy();
  }); */


  it('Should fine get countries return Observable<any>', () => {
    const service:CountryService=TestBed.get(CountryService);
    const dummyCountries=[{name:"Argentina"},{name:"Peru"}];
    service.getCountries().subscribe((resp)=>{
      expect(resp).toEqual(dummyCountries);
    });
    const req = httpMock.expectOne(`${environment.backendUrl}/lang/es`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCountries);
  });


  it('Should fine get country', () => {
    const service:CountryService=TestBed.inject(CountryService);
    const dummyCountry={name:'Peru'};
    const name='Peru'
    service.getCountry(name).subscribe((resp)=>{
      expect(resp).toEqual(dummyCountry);
    });
    const req = httpMock.expectOne(`${environment.backendUrl}/name/${name}?fullText=true`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCountry);
  });
  

  
});
