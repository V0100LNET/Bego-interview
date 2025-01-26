import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Output() eventInputSearch: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup = this.formBuilder.group({
    text: [""]
  })

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService
  ){}

  ngOnInit(): void {    
    this.generalService.resetInput.subscribe(response => {
      if(response) {
        this.form.reset();
      }
    })

    this.form.valueChanges.subscribe(response => {
      this.eventInputSearch.emit(response.text);
    })
  }

  get getValue(): string {
    return this.form.get("text")?.value;
  }
}
