import { Component, OnInit } from '@angular/core';

import { IHoliday } from './holiday';
import { HolidayService } from './holiday.service';
import { PagerService } from '../_services';
import { ConfirmDialog } from '../shared';
import * as _ from 'lodash';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { GenericValidator } from '../shared/generic-validator';
import { FormBuilder, AbstractControl, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';


@Component({
    templateUrl: './holiday-list.component.html',
    styleUrls: ['./holiday-list.component.css'],
    providers: [ConfirmDialog]
})
export class HolidayListComponent implements OnInit {
    pageTitle: string = 'Holidays';
    errorMessage: string;
    holidays: IHoliday[];
    public form: FormGroup;
    public price: AbstractControl;
    public pdfUrl: AbstractControl;
    public title: AbstractControl;
    public place: AbstractControl;
    public commission: AbstractControl;
    public duration: AbstractControl;
    public addingFlag;
    constructor(private fb: FormBuilder, private holidayService: HolidayService,
        private pagerService: PagerService, public dialog: MdDialog, public snackBar: MdSnackBar) {
        this.addingFlag = false;

        this.form = fb.group({
            'title': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            'place': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            'commission': ['', Validators.compose([Validators.required])],
            'price': ['', Validators.compose([Validators.required])],
            'pdfUrl': ['', Validators.compose([Validators.required])],
            'duration': ['', Validators.compose([Validators.required])],
        });

        this.title = this.form.controls['title'];
        this.commission = this.form.controls['commission'];
        this.place = this.form.controls['place'];
        this.price = this.form.controls['price'];
        this.pdfUrl = this.form.controls['pdfUrl'];
        this.duration = this.form.controls['duration'];

    }


    ngOnInit(): void {
        console.log('dsfdsfds')
        this.getPro();
    }
    getPro() {


        this.form.reset();
        this.holidayService.getHolidays()
            .subscribe(holidays => {
                this.holidays = holidays.reverse();
                this.addingFlag = false;
            },
            error => this.errorMessage = <any>error);
    }
    onSubmit(data) {
        this.addingFlag = true;
        this.holidayService.saveHoliday(data)
            .subscribe(
            () => this.getPro(),
            (error: any) => this.errorMessage = <any>error
            );

    }
}