import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ThreeDimensionalPrintingForm } from '../../../../interfaces/library-forms/three-dimensional-printing-form.interface';
/**
 * Data source for the ReservationsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

let threeDimensionalPrintingForms: ThreeDimensionalPrintingForm[];

export class PrintingDataTableDatasource extends DataSource<ThreeDimensionalPrintingForm> {
  data: ThreeDimensionalPrintingForm[] = threeDimensionalPrintingForms;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
  super();
  }

/**
 * Connect this data source to the table. The table will only update when
 * the returned stream emits new items.
 * @returns A stream of the items to be rendered.
 */
connect(): Observable<ThreeDimensionalPrintingForm[]> {
  // Combine everything that affects the rendered data into one update
  // stream for the data-table to consume.
  const dataMutations = [
    observableOf(this.data),
    this.paginator.page,
    this.sort.sortChange
  ];

// Set the paginator's length
this.paginator.length = this.data.length;

return merge(...dataMutations).pipe(map(() => {
  return this.getPagedData(this.getSortedData([...this.data]));
}));
}

/**
 *  Called when the table is being destroyed. Use this function, to clean up
 * any open connections or free any held resources that were set up during connect.
 */
disconnect() {}

/**
 * Paginate the data (client-side). If you're using server-side pagination,
 * this would be replaced by requesting the appropriate data from the server.
 */
private getPagedData(data: ThreeDimensionalPrintingForm[]) {
  const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  return data.splice(startIndex, this.paginator.pageSize);
}

/**
 * Sort the data (client-side). If you're using server-side sorting,
 * this would be replaced by requesting the appropriate data from the server.
 */
private getSortedData(data: ThreeDimensionalPrintingForm[]) {
  if (!this.sort.active || this.sort.direction === '') {
    return data;
  }

  return data.sort((a, b) => {
    const isAsc = this.sort.direction === 'asc';
    switch (this.sort.active) {
      // case 'name': return compare(a.name, b.name, isAsc);
      case '_id':
        return compare(+a._id, +b._id, isAsc);
      case 'patronName':
        return compare(a.patronName, b.patronName, isAsc);
      case 'libraryCard':
        return compare(a.libraryCard, b.libraryCard, isAsc);
      case 'email':
        return compare(a.email, b.email, isAsc);
      case 'phone':
        return compare(a.phone, b.phone, isAsc);
      case 'tosAgreement':
        return compare(+a.tosAgreement, b.tosAgreement, isAsc);
      case 'printed':
        return compare(a.printed, b.printed, isAsc);
      case 'pickedUp':
        return compare(a.pickedUp, b.pickedUp, isAsc);
      case 'finalLocation':
        return compare(a.finalLocation, b.finalLocation, isAsc);
      case 'color':
        return compare(a.color, b.color, isAsc);
      case 'specialInstructions':
        return compare(a.specialInstructions, b.specialInstructions, isAsc);
      case 'fileName':
        return compare(a.fileName, b.fileName, isAsc);
      case 'submitted':
        return compare(a.submitted, b.submitted, isAsc);
      case 'modifiedBy':
        return compare(a.modifiedBy, b.modifiedBy, isAsc);
      case 'printedBy':
        return compare(a.printedBy, b.printedBy, isAsc);

      default:
        return 0;
    }
  });
}
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

