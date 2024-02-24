import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumberConverterComponent } from './number-converter/number-converter.component';

@NgModule({
    declarations: [NumberConverterComponent],
    imports: [
        CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule
    ],
    exports: [NumberConverterComponent]
})
export class NumberConverterModule {
}
