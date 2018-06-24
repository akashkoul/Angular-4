import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HolidayListComponent } from './holiday-list.component';
import { HolidayService } from './holiday.service';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'holidays', component: HolidayListComponent },
    ])
  ],
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    HolidayListComponent,
  ],
  providers: [
    HolidayService,
  ]
})
export class HolidayModule {}
