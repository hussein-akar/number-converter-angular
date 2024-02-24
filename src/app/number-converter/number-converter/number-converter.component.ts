import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberConverterService } from '../services/number-converter.service';
import { NumberType } from '../interfaces/number-type';

@Component({
    selector: 'app-number-converter',
    standalone: false,
    templateUrl: './number-converter.component.html',
    styleUrl: './number-converter.component.css'
})
export class NumberConverterComponent implements OnInit {

    public result$: Observable<string> | undefined;

    public fromTypes: NumberType[] = [
        {name: 'Decimal', value: 'DECIMAL'},
        {name: 'Binary', value: 'BINARY'},
    ]

    public toTypes: NumberType[] = [
        {name: 'Roman', value: 'ROMAN'},
    ]

    public form!: FormGroup;

    constructor(private formBuilder: FormBuilder, private readonly numberConverterService: NumberConverterService) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            fromType: [this.fromTypes[0].value, Validators.required],
            toType: [this.toTypes[0].value, Validators.required],
            value: ['', [Validators.required, Validators.min(1)]]
        });
    }

    onSubmit() {
        if (!this.form.valid) {
            return;
        }

        this.result$ = this.numberConverterService.convert(this.form.value);
    }
}
