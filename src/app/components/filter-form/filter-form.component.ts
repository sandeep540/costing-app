import { FilterForm } from './../../model/filter-form';
import { CategoryApiService } from '../../services/category-api.service';
import { BrandApiService } from '../../services/brand-api.service';
import { VendorApiService } from '../../services/vendor-api.service';
import { Vendor } from './../../model/vendor';
import { Category } from './../../model/category';
import { Brand } from './../../model/brand';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../model/filter';
import { Season } from '../../model/season';
import { SeasonApiService } from '../../services/season-api.service';



@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent  {

  seasons: Season[];
  brands: Brand[];
  categorys: Category[];
  vendors: Vendor[];
  errormsg: any;

  filterCriteria: FilterForm;
  form: any;

  filter = new Filter(this.seasons, this.vendors, this.brands, this.categorys);

  @Output() filterCriteriaSelected = new EventEmitter(true);

  constructor(private seasonService: SeasonApiService, private vendorService: VendorApiService,
      private brandService: BrandApiService, private categoryService: CategoryApiService
    ) {
    this.seasonService.getSeasons().subscribe(data => this.seasons = data,
      error => this.errormsg = error);

    this.vendorService.getVendors().subscribe(data => this.vendors = data,
      error => this.errormsg = error);

    this.brandService.getBrands().subscribe(data => this.brands = data,
      error => this.errormsg = error);

    this.categoryService.getCategorys().subscribe(data => this.categorys = data,
      error => this.errormsg = error);
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
    this.form = form;
    this.filterCriteriaSelected.emit(this.form);
  }

}
