import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SchematicsSolucaoDataSource, SchematicsSolucaoItem } from './schematics-solucao-datasource';

@Component({
  selector: 'app-schematics-solucao',
  templateUrl: './schematics-solucao.component.html',
  styleUrls: ['./schematics-solucao.component.css']
})
export class SchematicsSolucaoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SchematicsSolucaoItem>;
  dataSource: SchematicsSolucaoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new SchematicsSolucaoDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
