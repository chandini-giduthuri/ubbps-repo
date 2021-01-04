import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { UbService } from '../services/ub.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../widgets/dialog/dialog.component';
import { MatSort } from '@angular/material/sort';
import { ExcelService } from '../services/excel.service';
import {MatTableModule} from '@angular/material/table';

export interface sixRowBarley {
  mandiName: string;
  minPrice: number;  
  quantity: number;
  maxPrice: number;
  avgBuying: number;
  modalPrice: number;
  suggestedPrice: number;
  ceilingPrice: number;
}

export interface TwoRowBarley {  
  mandiName: string;
  state: string;
  premium: number;
  onePrice: number;
  msp: number;
  suggestedPrice: number;
  ceilingPrice: number;
}

const SixRowBarley_DATA: sixRowBarley[] = [
  {mandiName: 'Tijara', quantity: 200.0, minPrice: 200.0,  maxPrice: 1500.0, avgBuying: 1400.0, modalPrice: 1200.0, suggestedPrice: 1400.0, ceilingPrice: 1498  },
  {mandiName: 'Jaipur', quantity: 150.0, minPrice: 1200.0, maxPrice: 1500.0, avgBuying: 1300.0, modalPrice: 1100.0, suggestedPrice: 1300.0, ceilingPrice: 1300  },
  {mandiName: 'Chomu' , quantity: 300.0, minPrice: 700.0,  maxPrice: 1500.0, avgBuying: 1250.0, modalPrice: 1050.0, suggestedPrice: 1350.0, ceilingPrice: 1552.5},
  {mandiName: 'Chaksu', quantity: 150.0, minPrice: 1200.0, maxPrice: 1400.0, avgBuying: 1300.0, modalPrice: 1250.0, suggestedPrice: 1300.0, ceilingPrice: 1400  },
  {mandiName: 'Sikar' , quantity: 20.0 , minPrice: 1400.0, maxPrice: 1600.0, avgBuying: 1500.0, modalPrice: 1300.0, suggestedPrice: 1600.0, ceilingPrice: 1920  }
];

const TwoRowBarley: TwoRowBarley[] = [
  {mandiName: 'Tijara', state: 'Rajasthan', onePrice: 400.0, msp: 550.0, premium: 100.0, suggestedPrice: 550.0, ceilingPrice: 550  },
  {mandiName: 'Chandigarh', state: 'Punjab', onePrice: 650.0, msp: 600.0, premium: 0.0, suggestedPrice: 600.0, ceilingPrice: 600  }
];

@Component({
  selector: 'app-viewceiling',
  templateUrl: './viewceiling.component.html',
  styleUrls: ['./viewceiling.component.scss']
})
export class ViewceilingComponent implements OnInit {

  displayedColumnsSix: string[] = ['mandiName', 'quantity', 'minPrice', 'maxPrice','avgBuying','modalPrice','suggestedPrice','ceilingPrice'];
  dataSourceSix = SixRowBarley_DATA;

  displayedColumnsTwo: string[]=['mandiName','state','onePrice','msp','premium','suggestedPrice','ceilingPrice'];
  dataSourceTwo =TwoRowBarley;

  public daterange: any = {};
  public options: any = {
  locale: { format: 'YYYY-MM-DD' },
  alwaysShowCalendars: false,
  };
  links = ['6 Row Barley', '2 Row Barley'];
  activeLink = this.links[0];
  public selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

  constructor() {   }

  ngOnInit(): void {
  }

}
