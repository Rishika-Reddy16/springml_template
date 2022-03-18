import { Component, OnInit,ViewChild ,Inject } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  lastname: string;
  firstname: string;
  sfn: string;
  lastupdatedby: string;
  lastupdatedtime: string,
  status: string,
  action: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {firstname: 'Porter', lastname: 'Keeling', sfn: '68231-5366', lastupdatedby: 'Jane Cooper', lastupdatedtime: '09:54 AM', status:'Complete',action:'Validate' },
  {firstname: 'Aric', lastname: 'Oberbrunner', sfn: '20351-2496', lastupdatedby: 'Cody Fisher', lastupdatedtime: '11:13 AM', status:'Pending',action:'Validate' },
  {firstname: 'Tyson', lastname: 'Dibbert', sfn: '57384-6143', lastupdatedby: 'Ronald Richards', lastupdatedtime: '03:25 PM', status:'Complete',action:'Validate' },
  {firstname: 'Kali', lastname: 'Marks', sfn: '23035-9018', lastupdatedby: 'Kristin Watson', lastupdatedtime: '12:45 PM', status:'Pending',action:'Validate' },
  {firstname: 'Hallie', lastname: 'Murray', sfn: '23035-9018', lastupdatedby: 'Albert Flores', lastupdatedtime: '06:22 PM', status:'Ongoing(Floyd Miles)',action:'Validate' },
  {firstname: 'Carlo', lastname: 'Bashirian', sfn: '28528-6873', lastupdatedby: 'Ralph Edwards', lastupdatedtime: '04:00 PM', status:'Complete',action:'Validate' },
];

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css']
})
export class LibComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  searchKey:string
  searchKey1:string
  displayedColumns: string[] = ['firstname', 'lastname', 'sfn', 'lastupdatedby','lastupdatedtime','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort ,{static: false}) sort: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter1() {
    this.dataSource.filter = this.searchKey1;
  }
  
  statuss: Status[] = [
    {value: '', viewValue: 'All'},
    {value: 'complete', viewValue: 'Complete'},
    {value: 'ongoing', viewValue: 'Ongoing(Floyd Miles)'},
    {value: 'pending', viewValue: 'Pending'}
  ];
  
  openDialog(i:any): void {
    console.log()
  }
}